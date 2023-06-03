import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FathersdayCakesComponent } from './fathersday-cakes.component';

describe('FathersdayCakesComponent', () => {
  let component: FathersdayCakesComponent;
  let fixture: ComponentFixture<FathersdayCakesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FathersdayCakesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FathersdayCakesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
