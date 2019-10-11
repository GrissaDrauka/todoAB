import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PopUpDetailsComponent } from './pop-up-details.component';
import { MatFormFieldModule, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { HttpClient, HttpClientModule } from '@angular/common/http';

describe('PopUpDetailsComponent', () => {
  let component: PopUpDetailsComponent;
  let fixture: ComponentFixture<PopUpDetailsComponent>;
  
  const mockDialogRef = {
    close: jasmine.createSpy('close')
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopUpDetailsComponent ],
      imports: [
        MatFormFieldModule,
        HttpClientModule
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
    fixture = TestBed.createComponent(PopUpDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
