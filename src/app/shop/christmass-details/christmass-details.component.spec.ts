import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChristmassDetailsComponent } from './christmass-details.component';

describe('ChristmassDetailsComponent', () => {
  let component: ChristmassDetailsComponent;
  let fixture: ComponentFixture<ChristmassDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChristmassDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChristmassDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
