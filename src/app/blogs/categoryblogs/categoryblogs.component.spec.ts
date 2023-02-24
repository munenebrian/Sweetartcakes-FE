import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryblogsComponent } from './categoryblogs.component';

describe('CategoryblogsComponent', () => {
  let component: CategoryblogsComponent;
  let fixture: ComponentFixture<CategoryblogsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CategoryblogsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CategoryblogsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
