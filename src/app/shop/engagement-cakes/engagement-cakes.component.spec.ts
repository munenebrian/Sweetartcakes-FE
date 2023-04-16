import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EngagementCakesComponent } from './engagement-cakes.component';

describe('EngagementCakesComponent', () => {
  let component: EngagementCakesComponent;
  let fixture: ComponentFixture<EngagementCakesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EngagementCakesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EngagementCakesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
