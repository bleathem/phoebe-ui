import { Component, OnInit, Output } from '@angular/core';
import { Store } from '@ngrx/store';
import { Pipeline } from '../pipeline.model';
import { AppStore } from '../../app.store';
import { SELECT_PIPELINE } from '../pipeline.actions';
import { PipelineXhrService } from '../pipeline-xhr/pipeline-xhr.service'

@Component({
  selector: 'app-pipeline-selection',
  templateUrl: './pipeline-selection.component.html',
  styleUrls: ['./pipeline-selection.component.less']
})
export class PipelineSelectionComponent implements OnInit {
  @Output() pipelines: Pipeline[];

  constructor(private store: Store<AppStore>, private elasticService: PipelineXhrService) {
    this.store.select(store => store.pipelines)
    .subscribe(state => {
      if (state) {
        this.pipelines = state.pipelines;
      }
    });
  }

  ngOnInit() {
    this.elasticService.loadPackages();
  }

}
