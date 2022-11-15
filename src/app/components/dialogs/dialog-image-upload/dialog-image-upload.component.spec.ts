import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogImageUploadComponent } from './dialog-image-upload.component';

describe('DialogImageUploadComponent', () => {
  let component: DialogImageUploadComponent;
  let fixture: ComponentFixture<DialogImageUploadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogImageUploadComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogImageUploadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
