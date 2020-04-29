import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JugadorActualComponent } from './jugador-actual.component';

describe('JugadorActualComponent', () => {
  let component: JugadorActualComponent;
  let fixture: ComponentFixture<JugadorActualComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JugadorActualComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JugadorActualComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
