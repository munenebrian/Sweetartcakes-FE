import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RuracioDetailsComponent } from './ruracio-details.component';

describe('RuracioDetailsComponent', () => {
  let component: RuracioDetailsComponent;
  let fixture: ComponentFixture<RuracioDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RuracioDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RuracioDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
