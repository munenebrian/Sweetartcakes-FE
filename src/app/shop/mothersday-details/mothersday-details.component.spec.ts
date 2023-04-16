import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MothersdayDetailsComponent } from './mothersday-details.component';

describe('MothersdayDetailsComponent', () => {
  let component: MothersdayDetailsComponent;
  let fixture: ComponentFixture<MothersdayDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MothersdayDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MothersdayDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
