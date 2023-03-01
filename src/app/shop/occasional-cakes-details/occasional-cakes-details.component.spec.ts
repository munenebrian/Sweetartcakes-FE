import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OccasionalCakesDetailsComponent } from './occasional-cakes-details.component';

describe('OccasionalCakesDetailsComponent', () => {
  let component: OccasionalCakesDetailsComponent;
  let fixture: ComponentFixture<OccasionalCakesDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OccasionalCakesDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OccasionalCakesDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
