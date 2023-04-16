import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValentinesDetailsComponent } from './valentines-details.component';

describe('ValentinesDetailsComponent', () => {
  let component: ValentinesDetailsComponent;
  let fixture: ComponentFixture<ValentinesDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ValentinesDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ValentinesDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
