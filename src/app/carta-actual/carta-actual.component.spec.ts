import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CartaActualComponent } from './carta-actual.component';

describe('CartaActualComponent', () => {
  let component: CartaActualComponent;
  let fixture: ComponentFixture<CartaActualComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CartaActualComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CartaActualComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
