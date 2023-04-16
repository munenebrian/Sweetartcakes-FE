import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BirthdayDetailsComponent } from './birthday-details.component';

describe('BirthdayDetailsComponent', () => {
  let component: BirthdayDetailsComponent;
  let fixture: ComponentFixture<BirthdayDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BirthdayDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BirthdayDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
