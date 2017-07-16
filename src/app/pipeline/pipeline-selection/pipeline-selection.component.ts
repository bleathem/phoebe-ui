import { Component, OnInit, Output } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppStore } from '../../app.store';
import { Pipeline, PackageBuild } from '../pipeline.model';
import { SelectPipelineAction, SelectPackageBuildAction, RequestPipelinesAction } from '../pipeline.actions';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-pipeline-selection',
  templateUrl: './pipeline-selection.component.html',
  styleUrls: ['./pipeline-selection.component.less']
})
export class PipelineSelectionComponent implements OnInit {
  @Output() pipelines: Observable<Pipeline[]>;
  @Output() packageBuilds: Observable<PackageBuild[]>;

  constructor(private store: Store<AppStore>) {
    this.pipelines = this.store.select(store => store.pipelineReducer.pipelines);
    this.packageBuilds = this.store.select(store => store.pipelineReducer.selectedPipeline && store.pipelineReducer.selectedPipeline.packageBuilds);
  }

  ngOnInit() {
    this.store.dispatch(new RequestPipelinesAction());
  }

  selectPipeline(pipelineKey: string) {
    this.store.dispatch(new SelectPipelineAction(pipelineKey));
  }

  selectPackageBuild(packageBuildKey: number) {
    this.store.dispatch(new SelectPackageBuildAction(packageBuildKey));
  }

}
