import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotaProntaComponent } from './nota-pronta.component';

describe('NotaProntaComponent', () => {
  let component: NotaProntaComponent;
  let fixture: ComponentFixture<NotaProntaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NotaProntaComponent]
    });
    fixture = TestBed.createComponent(NotaProntaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
