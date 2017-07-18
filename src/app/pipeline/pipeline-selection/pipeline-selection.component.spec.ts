import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { StoreModule } from '@ngrx/store';
import { PipelineXhrModule } from '../pipeline-xhr/pipeline-xhr.module';
import { pipelineReducer } from '../pipeline.reducer'
import { FormsModule } from '@angular/forms';

import { PipelineSelectionComponent } from './pipeline-selection.component';
import { KeySortPipe } from '../key-sort.pipe';

describe('PipelineSelectionComponent', () => {
  let component: PipelineSelectionComponent;
  let fixture: ComponentFixture<PipelineSelectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ FormsModule, PipelineXhrModule, StoreModule.provideStore({pipelineReducer}) ],
      declarations: [ PipelineSelectionComponent, KeySortPipe ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PipelineSelectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
