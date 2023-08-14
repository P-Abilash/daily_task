import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngmetComponent } from './angmet.component';

describe('AngmetComponent', () => {
  let component: AngmetComponent;
  let fixture: ComponentFixture<AngmetComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AngmetComponent]
    });
    fixture = TestBed.createComponent(AngmetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
