import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BaptismalDetailsComponent } from './baptismal-details.component';

describe('BaptismalDetailsComponent', () => {
  let component: BaptismalDetailsComponent;
  let fixture: ComponentFixture<BaptismalDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BaptismalDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BaptismalDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
