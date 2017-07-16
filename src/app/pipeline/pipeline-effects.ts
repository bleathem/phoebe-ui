import { Store } from '@ngrx/store';
import { AppStore } from '../app.store';
import {Effect, Actions, toPayload} from "@ngrx/effects";
import {
  REQUEST_PIPELINES,
  PIPELINES,
  PIPELINE,
  SELECT_PIPELINE,
  PACKAGE_BUILDS,
  PACKAGE_BUILD,
  SELECT_PACKAGE_BUILD,
  REQUEST_TEST_SUITES,
  TEST_SUITES,
  RequestPipelinesAction,
  PipelinesAction,
  PipelineAction,
  SelectPipelineAction,
  PackageBuildsAction,
  PackageBuildAction,
  SelectPackageBuildAction,
  RequestTestSuitesAction,
  TestSuitesAction
} from './pipeline.actions';
import { AddNotificationAction } from '../notifications/notification.actions';
import { Notification } from '../notifications/notification.model';
import {Injectable} from "@angular/core";
import {PipelineXhrService} from './pipeline-xhr/pipeline-xhr.service';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/mergeMap';

@Injectable()
export class PipelineEffects {

  constructor(private action$: Actions, private store: Store<AppStore>, private pipelineXhrService: PipelineXhrService) { }

  @Effect() requestPipelines$ = this.action$
    .ofType(REQUEST_PIPELINES)
    .map(toPayload)
    .switchMap(() =>
      this.pipelineXhrService.getAllPipelinesAndPackageBuilds()
      .switchMap(pipelines => Observable.of(new PipelinesAction(pipelines)))
    );

  @Effect() selectPipeLineEffect$ = this.action$
    .ofType(SELECT_PIPELINE)
    .map(toPayload)
    .withLatestFrom(this.store.select(store => store.pipelineReducer.pipelines))
    .switchMap(([pipelineKey, pipelines]) => {
      let pipeline = pipelines.filter(_pipeline => _pipeline.key == pipelineKey)[0];
      return Observable.of(new PipelineAction(pipeline))
    });

  @Effect() selectPackageBuildEffect$ = this.action$
    .ofType(SELECT_PACKAGE_BUILD)
    .map(toPayload)
    .withLatestFrom(this.store.select(store => store.pipelineReducer.selectedPipeline))
    .switchMap(([packageBuildKey, pipeline]) => {
      let packageBuild = pipeline.packageBuilds.filter(_packageBuild => _packageBuild.key == packageBuildKey)[0];
      return [
        new PackageBuildAction(packageBuild),
        new RequestTestSuitesAction(pipeline, packageBuild)
      ];
    });

  @Effect() requestTestSuitesEffect$ = this.action$
    .ofType(REQUEST_TEST_SUITES)
    .map(toPayload)
    .switchMap(payload =>
      this.pipelineXhrService.getTestSuites(payload.pipeline, payload.packageBuild)
      .switchMap(testSuites => Observable.of(new TestSuitesAction(testSuites)))
    );

  @Effect() testSuitesEffect$ = this.action$
    .ofType(TEST_SUITES)
    .map(toPayload)
    .withLatestFrom(this.store.select(store => store.pipelineReducer.selectedPipeline))
    .switchMap(([testCases, pipeline]) => Observable.of(new AddNotificationAction(
      new Notification(`Test cases loaded for ${pipeline.key}`, 'success', 3)
    )));
}
