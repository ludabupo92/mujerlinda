import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TarjetaMascotaComponent } from './tarjeta-mascota.component';

describe('TarjetaMascotaComponent', () => {
  let component: TarjetaMascotaComponent;
  let fixture: ComponentFixture<TarjetaMascotaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TarjetaMascotaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TarjetaMascotaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
