import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BabyshowerCakesComponent } from './babyshower-cakes.component';

describe('BabyshowerCakesComponent', () => {
  let component: BabyshowerCakesComponent;
  let fixture: ComponentFixture<BabyshowerCakesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BabyshowerCakesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BabyshowerCakesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
