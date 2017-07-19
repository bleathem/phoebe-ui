import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartsModule } from '../../charts/charts.module';
import { PipelineXhrModule } from '../../pipeline/pipeline-xhr/pipeline-xhr.module';
import { TestSuiteBuildsByTimeComponent } from './test-suite-builds-by-time.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CollapsiblePanelComponent } from '../collapsible-panel/collapsible-panel.component';

describe('TestSuiteBuildsByTimeComponent', () => {
  let component: TestSuiteBuildsByTimeComponent;
  let fixture: ComponentFixture<TestSuiteBuildsByTimeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestSuiteBuildsByTimeComponent, CollapsiblePanelComponent ],
      imports: [ BrowserAnimationsModule, ChartsModule, PipelineXhrModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestSuiteBuildsByTimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
