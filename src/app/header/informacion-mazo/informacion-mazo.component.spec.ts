import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InformacionMazoComponent } from './informacion-mazo.component';

describe('InformacionMazoComponent', () => {
  let component: InformacionMazoComponent;
  let fixture: ComponentFixture<InformacionMazoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InformacionMazoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InformacionMazoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
