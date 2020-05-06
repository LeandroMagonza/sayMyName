import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PuntajeEquipoComponent } from './puntaje-equipo.component';

describe('PuntajeEquipoComponent', () => {
  let component: PuntajeEquipoComponent;
  let fixture: ComponentFixture<PuntajeEquipoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PuntajeEquipoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PuntajeEquipoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
