import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeWeddingComponent } from './home-wedding.component';

describe('HomeWeddingComponent', () => {
  let component: HomeWeddingComponent;
  let fixture: ComponentFixture<HomeWeddingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeWeddingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeWeddingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
