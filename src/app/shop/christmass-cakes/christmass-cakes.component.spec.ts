import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChristmassCakesComponent } from './christmass-cakes.component';

describe('ChristmassCakesComponent', () => {
  let component: ChristmassCakesComponent;
  let fixture: ComponentFixture<ChristmassCakesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChristmassCakesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChristmassCakesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
