import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OccasionalCakesComponent } from './occasional-cakes.component';

describe('OccasionalCakesComponent', () => {
  let component: OccasionalCakesComponent;
  let fixture: ComponentFixture<OccasionalCakesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OccasionalCakesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OccasionalCakesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
