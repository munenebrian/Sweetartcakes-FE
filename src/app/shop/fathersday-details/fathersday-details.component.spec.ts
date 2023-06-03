import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FathersdayDetailsComponent } from './fathersday-details.component';

describe('FathersdayDetailsComponent', () => {
  let component: FathersdayDetailsComponent;
  let fixture: ComponentFixture<FathersdayDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FathersdayDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FathersdayDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
