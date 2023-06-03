import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MothersdayCakesComponent } from './mothersday-cakes.component';

describe('MothersdayCakesComponent', () => {
  let component: MothersdayCakesComponent;
  let fixture: ComponentFixture<MothersdayCakesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MothersdayCakesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MothersdayCakesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
