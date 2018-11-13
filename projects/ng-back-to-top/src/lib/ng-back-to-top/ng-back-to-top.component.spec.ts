import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgBackToTopComponent } from './ng-back-to-top.component';

describe('NgBackToTopComponent', () => {
  let component: NgBackToTopComponent;
  let fixture: ComponentFixture<NgBackToTopComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgBackToTopComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgBackToTopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
