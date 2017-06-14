import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PipelineSelectionComponent } from './pipeline-selection.component';

describe('PipelineSelectionComponent', () => {
  let component: PipelineSelectionComponent;
  let fixture: ComponentFixture<PipelineSelectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
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
