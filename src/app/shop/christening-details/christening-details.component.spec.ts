import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChristeningDetailsComponent } from './christening-details.component';

describe('ChristeningDetailsComponent', () => {
  let component: ChristeningDetailsComponent;
  let fixture: ComponentFixture<ChristeningDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChristeningDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChristeningDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
