import { Component, OnInit, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppStore } from '../../app.store';
import { Pipeline, PackageBuild } from '../pipeline.model';
import { PipelineAction, PackageBuildAction, RequestPipelinesAction } from '../pipeline.actions';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-pipeline-selection',
  templateUrl: './pipeline-selection.component.html',
  styleUrls: ['./pipeline-selection.component.less']
})
export class PipelineSelectionComponent implements OnInit {
  @Input() pipelines: Observable<Pipeline[]>;
  @Input() selectedPipeline: Observable<Pipeline>;
  @Input() packageBuilds: Observable<PackageBuild[]>;
  @Input() selectedPackageBuild: Observable<PackageBuild>;

  constructor(private store: Store<AppStore>) {
    this.pipelines = this.store.select(store => store.pipelineReducer.pipelines);
    this.packageBuilds = this.store.select(store => store.pipelineReducer.selectedPipeline && store.pipelineReducer.selectedPipeline.packageBuilds);
    this.selectedPipeline = store.select(store => store.pipelineReducer.selectedPipeline);
    this.selectedPackageBuild = store.select(store => store.pipelineReducer.selectedPackageBuild);
  }

  ngOnInit() {
    this.store.dispatch(new RequestPipelinesAction());
  }

  selectPipeline(pipeline: Pipeline) {
    this.store.dispatch(new PipelineAction(pipeline));
  }

  selectPackageBuild(packageBuild: PackageBuild) {
    this.store.dispatch(new PackageBuildAction(packageBuild));
  }

  keyCompare(val1, val2) {
    return val1 && val2 && val1.key == val2.key;
  }
}
