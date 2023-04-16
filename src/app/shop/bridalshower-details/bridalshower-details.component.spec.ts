import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BridalshowerDetailsComponent } from './bridalshower-details.component';

describe('BridalshowerDetailsComponent', () => {
  let component: BridalshowerDetailsComponent;
  let fixture: ComponentFixture<BridalshowerDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BridalshowerDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BridalshowerDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
