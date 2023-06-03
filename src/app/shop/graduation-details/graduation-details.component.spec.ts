import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraduationDetailsComponent } from './graduation-details.component';

describe('GraduationDetailsComponent', () => {
  let component: GraduationDetailsComponent;
  let fixture: ComponentFixture<GraduationDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GraduationDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GraduationDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
