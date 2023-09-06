import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoresSquareComponent } from './cores-square.component';

describe('CoresSquareComponent', () => {
  let component: CoresSquareComponent;
  let fixture: ComponentFixture<CoresSquareComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CoresSquareComponent]
    });
    fixture = TestBed.createComponent(CoresSquareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
