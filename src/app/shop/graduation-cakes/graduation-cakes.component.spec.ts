import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraduationCakesComponent } from './graduation-cakes.component';

describe('GraduationCakesComponent', () => {
  let component: GraduationCakesComponent;
  let fixture: ComponentFixture<GraduationCakesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GraduationCakesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GraduationCakesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
