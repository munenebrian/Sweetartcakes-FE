import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BaptismalCakesComponent } from './baptismal-cakes.component';

describe('BaptismalCakesComponent', () => {
  let component: BaptismalCakesComponent;
  let fixture: ComponentFixture<BaptismalCakesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BaptismalCakesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BaptismalCakesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
