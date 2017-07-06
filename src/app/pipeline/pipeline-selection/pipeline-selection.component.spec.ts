import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { StoreModule } from '@ngrx/store';
import { PipelineXhrModule } from '../pipeline-xhr/pipeline-xhr.module';

import { PipelineSelectionComponent } from './pipeline-selection.component';

describe('PipelineSelectionComponent', () => {
  let component: PipelineSelectionComponent;
  let fixture: ComponentFixture<PipelineSelectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ PipelineXhrModule, StoreModule.provideStore({}) ],
      declarations: [ PipelineSelectionComponent ]
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
