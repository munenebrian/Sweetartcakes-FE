import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValentinesCakesComponent } from './valentines-cakes.component';

describe('ValentinesCakesComponent', () => {
  let component: ValentinesCakesComponent;
  let fixture: ComponentFixture<ValentinesCakesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ValentinesCakesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ValentinesCakesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
