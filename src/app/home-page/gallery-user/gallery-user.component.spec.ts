import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GalleryUserComponent } from './gallery-user.component';

describe('GalleryUserComponent', () => {
  let component: GalleryUserComponent;
  let fixture: ComponentFixture<GalleryUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GalleryUserComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GalleryUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
