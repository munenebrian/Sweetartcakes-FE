import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpehomeComponent } from './expehome.component';

describe('ExpehomeComponent', () => {
  let component: ExpehomeComponent;
  let fixture: ComponentFixture<ExpehomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExpehomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExpehomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
