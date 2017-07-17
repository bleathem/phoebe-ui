import { Store } from '@ngrx/store';
import { AppStore } from '../app.store';
import {Effect, Actions, toPayload} from "@ngrx/effects";
import {
  REQUEST_PIPELINES,
  PIPELINES,
  PIPELINE,
  PACKAGE_BUILDS,
  PACKAGE_BUILD,
  REQUEST_TEST_SUITES,
  TEST_SUITES,
  RequestPipelinesAction,
  PipelinesAction,
  PipelineAction,
  PackageBuildsAction,
  PackageBuildAction,
  RequestTestSuitesAction,
  TestSuitesAction
} from './pipeline.actions';
import { AddNotificationAction } from '../notifications/notification.actions';
import { Notification } from '../notifications/notification.model';
import {Injectable} from "@angular/core";
import {PipelineXhrService} from './pipeline-xhr/pipeline-xhr.service';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/observable/empty';
import 'rxjs/add/operator/mergeMap';

@Injectable()
export class PipelineEffects {

  constructor(private action$: Actions, private store: Store<AppStore>, private pipelineXhrService: PipelineXhrService) { }

  @Effect() requestPipelines$ = this.action$
    .ofType(REQUEST_PIPELINES)
    .map(toPayload)
    .switchMap(() =>
      this.pipelineXhrService.getAllPipelinesAndPackageBuilds()
      .switchMap(pipelines => [
        new PipelinesAction(pipelines),
        new PipelineAction(pipelines[0]),
        new PackageBuildAction(pipelines[0].packageBuilds[0]),
        new RequestTestSuitesAction(pipelines[0], pipelines[0].packageBuilds[0])
      ])
    );

  @Effect() pipeLineEffect$ = this.action$
    .ofType(PIPELINE)
    .map(toPayload)
    .withLatestFrom(this.store.select(store => store.pipelineReducer.selectedPackageBuild))
    .switchMap(([pipeline, packageBuild]) => {
      if (pipeline && packageBuild) {
        return Observable.of(new RequestTestSuitesAction(pipeline, packageBuild));
      } else {
        return Observable.empty();
      }
    });

  @Effect() packageBuildEffect$ = this.action$
    .ofType(PACKAGE_BUILD)
    .map(toPayload)
    .withLatestFrom(this.store.select(store => store.pipelineReducer.selectedPipeline))
    .switchMap(([packageBuild, pipeline]) => {
      if (pipeline && packageBuild) {
        return Observable.of(new RequestTestSuitesAction(pipeline, packageBuild));
      } else {
        return Observable.empty();
      }
    });

  @Effect() requestTestSuitesEffect$ = this.action$
    .ofType(REQUEST_TEST_SUITES)
    .map(toPayload)
    .switchMap(payload =>
      this.pipelineXhrService.getTestSuitesByPipelineAndPackageBuild(payload.pipeline, payload.packageBuild)
      .switchMap(testSuites => Observable.of(new TestSuitesAction(payload.pipeline, payload.packageBuild, testSuites)))
    );

  @Effect() testSuitesEffect$ = this.action$
    .ofType(TEST_SUITES)
    .map(toPayload)
    .withLatestFrom(this.store.select(store => store.pipelineReducer.selectedPipeline))
    .switchMap(([testCases, pipeline]) => Observable.of(new AddNotificationAction(
      new Notification(`Test cases loaded for ${pipeline.key}`, 'success', 3)
    )));
}
