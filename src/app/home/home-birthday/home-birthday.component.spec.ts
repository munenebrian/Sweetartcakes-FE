import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeBirthdayComponent } from './home-birthday.component';

describe('HomeBirthdayComponent', () => {
  let component: HomeBirthdayComponent;
  let fixture: ComponentFixture<HomeBirthdayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeBirthdayComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeBirthdayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
