import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResetmessageComponent } from './resetmessage.component';

describe('ResetmessageComponent', () => {
  let component: ResetmessageComponent;
  let fixture: ComponentFixture<ResetmessageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResetmessageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResetmessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
