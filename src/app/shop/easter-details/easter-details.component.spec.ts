import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EasterDetailsComponent } from './easter-details.component';

describe('EasterDetailsComponent', () => {
  let component: EasterDetailsComponent;
  let fixture: ComponentFixture<EasterDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EasterDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EasterDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
