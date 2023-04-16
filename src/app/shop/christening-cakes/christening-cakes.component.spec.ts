import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChristeningCakesComponent } from './christening-cakes.component';

describe('ChristeningCakesComponent', () => {
  let component: ChristeningCakesComponent;
  let fixture: ComponentFixture<ChristeningCakesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChristeningCakesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChristeningCakesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
