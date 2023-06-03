import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BridalshowerCakesComponent } from './bridalshower-cakes.component';

describe('BridalshowerCakesComponent', () => {
  let component: BridalshowerCakesComponent;
  let fixture: ComponentFixture<BridalshowerCakesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BridalshowerCakesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BridalshowerCakesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
