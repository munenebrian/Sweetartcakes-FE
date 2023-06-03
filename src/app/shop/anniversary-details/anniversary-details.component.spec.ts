import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnniversaryDetailsComponent } from './anniversary-details.component';

describe('AnniversaryDetailsComponent', () => {
  let component: AnniversaryDetailsComponent;
  let fixture: ComponentFixture<AnniversaryDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnniversaryDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnniversaryDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
