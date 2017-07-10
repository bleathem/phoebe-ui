import { Store } from '@ngrx/store';
import { AppStore } from '../app.store';
import {Effect, Actions, toPayload} from "@ngrx/effects";
import {
  REQUEST_PIPELINES,
  SELECT_PIPELINE,
  SELECT_PACKAGE_BUILD,
  LOAD_TEST_CASES,
  LoadPipelinesAction,
  LoadPackageBuildsAction,
  LoadTestCasesAction
} from './pipeline.actions';
import { AddNotificationAction } from '../notifications/notification.actions';
import { Notification } from '../notifications/notification.model';
import {Injectable} from "@angular/core";
import {PipelineXhrService} from './pipeline-xhr/pipeline-xhr.service';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

@Injectable()
export class PipelineEffects {

  constructor(private action$: Actions, private store: Store<AppStore>, private pipelineXhrService: PipelineXhrService) { }

  @Effect() requestPipelines$ = this.action$
    .ofType(REQUEST_PIPELINES)
    .map(toPayload)
    .switchMap(() =>
      this.pipelineXhrService.getPipelines()
      .switchMap(pipelines => Observable.of(new LoadPipelinesAction(pipelines)))
    );

  @Effect() selectPipeLineEffect$ = this.action$
    .ofType(SELECT_PIPELINE)
    .map(toPayload)
    .switchMap((selectedPipeline) =>
      this.pipelineXhrService.getPackageBuilds(selectedPipeline)
      .map(packageBuilds => {
        selectedPipeline.packageBuilds = packageBuilds;
        return selectedPipeline;
      })
      .switchMap(packageBuilds => Observable.of(new LoadPackageBuildsAction(selectedPipeline)))
    );

  @Effect() selectPackageBuildEffect$ = this.action$
    .ofType(SELECT_PACKAGE_BUILD)
    .map(toPayload)
    .withLatestFrom(this.store.select(store => store.pipelineReducer.selectedPipeline))
    .switchMap(([packageBuild, pipeline]) =>
      this.pipelineXhrService.getTestCases(pipeline, packageBuild)
      .switchMap(testCases => Observable.of(new LoadTestCasesAction(testCases)))
    );

  @Effect() loadTestCasesEffect$ = this.action$
    .ofType(LOAD_TEST_CASES)
    .map(toPayload)
    .withLatestFrom(this.store.select(store => store.pipelineReducer.selectedPipeline))
    .switchMap(([testCases, pipeline]) => Observable.of(new AddNotificationAction(
      new Notification(`Test cases loaded for ${pipeline.key}`, 'success', 3)
    )));
}
