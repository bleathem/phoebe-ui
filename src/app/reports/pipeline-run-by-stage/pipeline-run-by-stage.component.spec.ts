import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartsModule } from '../../charts/charts.module';
import { DataMockModule } from '../../data-mock/data-mock.module';
import { PipelineRunByStageComponent } from './pipeline-run-by-stage.component';

describe('PipelineRunByStageComponent', () => {
  let component: PipelineRunByStageComponent;
  let fixture: ComponentFixture<PipelineRunByStageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PipelineRunByStageComponent ],
      imports: [ ChartsModule, DataMockModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PipelineRunByStageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
