import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomegalleryComponent } from './homegallery.component';

describe('HomegalleryComponent', () => {
  let component: HomegalleryComponent;
  let fixture: ComponentFixture<HomegalleryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomegalleryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomegalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
