import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeAnniversaryComponent } from './home-anniversary.component';

describe('HomeAnniversaryComponent', () => {
  let component: HomeAnniversaryComponent;
  let fixture: ComponentFixture<HomeAnniversaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeAnniversaryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeAnniversaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
