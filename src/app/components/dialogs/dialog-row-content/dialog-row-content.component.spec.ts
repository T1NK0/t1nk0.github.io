import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogRowContentComponent } from './dialog-row-content.component';

describe('DialogRowContentComponent', () => {
  let component: DialogRowContentComponent;
  let fixture: ComponentFixture<DialogRowContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogRowContentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogRowContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
