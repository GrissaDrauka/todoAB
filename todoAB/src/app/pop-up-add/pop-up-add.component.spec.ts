import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PopUpAddComponent } from './pop-up-add.component';
import { MatFormFieldModule, MatDialogModule, MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material';

describe('PopUpAddComponent', () => {
  let dialog : MatDialog;
  let component: PopUpAddComponent;
  let fixture: ComponentFixture<PopUpAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopUpAddComponent ],
      imports: [ 
        MatFormFieldModule,
        MatDialogModule
      ],
      providers: [
        MatDialogRef
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PopUpAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the popup to add', () => {

    dialog.open(PopUpAddComponent, {
      width: '50%',
      height: '50%',
      data : {id : 5}
    });


    expect(component.id).toBe(5);
  });
});
