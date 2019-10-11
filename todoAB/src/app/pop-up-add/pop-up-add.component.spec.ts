import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PopUpAddComponent } from './pop-up-add.component';
import { MatFormFieldModule, MatDialogModule, MAT_DIALOG_DATA, MatDialog, MatDialogRef, MatFormFieldControl, MatInputModule } from '@angular/material';
import { HttpClientModule } from '@angular/common/http';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { By } from '@angular/platform-browser';

describe('PopUpAddComponent', () => {
  let dialog : MatDialog;
  let component: PopUpAddComponent;
  let fixture: ComponentFixture<PopUpAddComponent>;

  const mockDialogRef = {
    close: jasmine.createSpy('close')
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopUpAddComponent ],
      imports: [ 
        MatFormFieldModule,
        MatDialogModule,
        HttpClientModule,
        MatInputModule,
        NoopAnimationsModule
      ],
      providers: [
        {
          provide: MatDialogRef,
          useValue: mockDialogRef
        },
        { 
          provide: MAT_DIALOG_DATA,
          useValue: {}
        }
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
    expect(component).toBeTruthy();
  });

  it('should show a mat-form-field with two inputs', () => {
    const compiled = fixture.debugElement.nativeElement;
    var fields = compiled.querySelectorAll('mat-form-field');
    expect(fields.length).toEqual(2);
  })

  it('should show two buttons', () => {
    const compiled = fixture.debugElement.nativeElement;
    var buttons = compiled.querySelectorAll('button');
    expect(buttons.length).toEqual(2);
  })
});
