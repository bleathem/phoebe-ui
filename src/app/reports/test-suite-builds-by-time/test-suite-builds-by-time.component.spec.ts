import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartsModule } from '../../charts/charts.module';
import { DataMockModule } from '../../data-mock/data-mock.module';
import { TestSuiteBuildsByTimeComponent } from './test-suite-builds-by-time.component';

describe('TestSuiteBuildsByTimeComponent', () => {
  let component: TestSuiteBuildsByTimeComponent;
  let fixture: ComponentFixture<TestSuiteBuildsByTimeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestSuiteBuildsByTimeComponent ],
      imports: [ ChartsModule, DataMockModule ]
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
