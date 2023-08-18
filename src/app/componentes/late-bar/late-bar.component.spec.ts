import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LateBarComponent } from './late-bar.component';

describe('LateBarComponent', () => {
  let component: LateBarComponent;
  let fixture: ComponentFixture<LateBarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LateBarComponent]
    });
    fixture = TestBed.createComponent(LateBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
