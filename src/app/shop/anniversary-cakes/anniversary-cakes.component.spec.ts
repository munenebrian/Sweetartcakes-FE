import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnniversaryCakesComponent } from './anniversary-cakes.component';

describe('AnniversaryCakesComponent', () => {
  let component: AnniversaryCakesComponent;
  let fixture: ComponentFixture<AnniversaryCakesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnniversaryCakesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnniversaryCakesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
