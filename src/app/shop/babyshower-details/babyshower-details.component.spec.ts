import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BabyshowerDetailsComponent } from './babyshower-details.component';

describe('BabyshowerDetailsComponent', () => {
  let component: BabyshowerDetailsComponent;
  let fixture: ComponentFixture<BabyshowerDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BabyshowerDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BabyshowerDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
