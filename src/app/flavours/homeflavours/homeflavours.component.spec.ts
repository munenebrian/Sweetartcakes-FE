import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeflavoursComponent } from './homeflavours.component';

describe('HomeflavoursComponent', () => {
  let component: HomeflavoursComponent;
  let fixture: ComponentFixture<HomeflavoursComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeflavoursComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeflavoursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
