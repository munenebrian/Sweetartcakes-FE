import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeenquireComponent } from './homeenquire.component';

describe('HomeenquireComponent', () => {
  let component: HomeenquireComponent;
  let fixture: ComponentFixture<HomeenquireComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeenquireComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeenquireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
