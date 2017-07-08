import { Component, OnInit, Output } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppStore } from '../../app.store';
import { Pipeline, PackageBuild } from '../pipeline.model';
import { SelectPipelineAction, SelectPackageBuildAction } from '../pipeline.actions';
import { PipelineXhrService } from '../pipeline-xhr/pipeline-xhr.service'

@Component({
  selector: 'app-pipeline-selection',
  templateUrl: './pipeline-selection.component.html',
  styleUrls: ['./pipeline-selection.component.less']
})
export class PipelineSelectionComponent implements OnInit {
  @Output() pipelines: Pipeline[];
  @Output() packageBuilds: PackageBuild[];

  constructor(private store: Store<AppStore>, private piplineXhrService: PipelineXhrService) {
    this.store.select(store => store.pipelineReducer.pipelines)
    .subscribe(state => {
      this.pipelines = state;
    });

    this.store.select(store => store.pipelineReducer.selectedPipeline && store.pipelineReducer.selectedPipeline.packageBuilds)
    .subscribe(state => {
      this.packageBuilds = state;
    });
  }

  ngOnInit() {
    this.piplineXhrService.loadPipelines();
  }

  selectPipeline(pipelineKey) {
    let pipeline = this.pipelines.filter(_pipeline => {
      return _pipeline.key === pipelineKey;
    })[0];
    this.store.dispatch(new SelectPipelineAction(pipeline));
  }

  selectPackageBuild(packageBuildKey) {
    let packageBuild = this.packageBuilds.filter(_packageBuild => {
      return _packageBuild.key == packageBuildKey;
    })[0];
    this.store.dispatch(new SelectPackageBuildAction(packageBuild));
  }

}
