import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RuracioCakesComponent } from './ruracio-cakes.component';

describe('RuracioCakesComponent', () => {
  let component: RuracioCakesComponent;
  let fixture: ComponentFixture<RuracioCakesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RuracioCakesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RuracioCakesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
