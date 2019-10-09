import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from './reducers';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { DataService } from './data.service';
import { HttpClientModule } from '@angular/common/http';
import { MatTableModule, MatIconModule, MatButtonModule, MatDialog, MatDialogModule, MatFormFieldModule, MatFormField, MatInputModule, MatLabel, MatCheckboxModule } from '@angular/material';
import { PopUpAddComponent } from './pop-up-add/pop-up-add.component';
import { PopUpDetailsComponent } from './pop-up-details/pop-up-details.component';

@NgModule({
  declarations: [
    AppComponent,
    PopUpAddComponent,
    PopUpDetailsComponent  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot(reducers, {
      metaReducers,
      runtimeChecks: {
        strictStateImmutability: true,
        strictActionImmutability: true
      }
    }),
    NoopAnimationsModule,
    InMemoryWebApiModule.forRoot(DataService),
    HttpClientModule,
    MatTableModule,
    MatIconModule,
    MatButtonModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatCheckboxModule    
  ],
  providers: [],
  entryComponents: [
    PopUpAddComponent,
    PopUpDetailsComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
