import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeblogsComponent } from './homeblogs.component';

describe('HomeblogsComponent', () => {
  let component: HomeblogsComponent;
  let fixture: ComponentFixture<HomeblogsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeblogsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeblogsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
