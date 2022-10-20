import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CajaPComponent } from './caja-p.component';

describe('CajaPComponent', () => {
  let component: CajaPComponent;
  let fixture: ComponentFixture<CajaPComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CajaPComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CajaPComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
