import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CajaGrandeComponent } from './caja-grande.component';

describe('CajaGrandeComponent', () => {
  let component: CajaGrandeComponent;
  let fixture: ComponentFixture<CajaGrandeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CajaGrandeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CajaGrandeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
