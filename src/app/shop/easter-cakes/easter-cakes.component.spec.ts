import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EasterCakesComponent } from './easter-cakes.component';

describe('EasterCakesComponent', () => {
  let component: EasterCakesComponent;
  let fixture: ComponentFixture<EasterCakesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EasterCakesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EasterCakesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
