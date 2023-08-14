import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BehavioursubComponent } from './behavioursub.component';

describe('BehavioursubComponent', () => {
  let component: BehavioursubComponent;
  let fixture: ComponentFixture<BehavioursubComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BehavioursubComponent]
    });
    fixture = TestBed.createComponent(BehavioursubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
