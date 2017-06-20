import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestSuiteBuildsByTimeComponent } from './test-suite-builds-by-time.component';

describe('TestSuiteBuildsByTimeComponent', () => {
  let component: TestSuiteBuildsByTimeComponent;
  let fixture: ComponentFixture<TestSuiteBuildsByTimeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestSuiteBuildsByTimeComponent ]
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
