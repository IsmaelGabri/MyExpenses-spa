import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatDialogModule} from '@angular/material/dialog';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { GraphComponent } from './graph/graph.component';
import { UserDataComponent } from './user-data/user-data.component';
import { FilterComponent } from './filter/filter.component';
import { PaginationComponent } from './pagination/pagination.component';
import { AddItemComponent } from './add-item/add-item.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    GraphComponent,
    UserDataComponent,
    FilterComponent,
    PaginationComponent,
    AddItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatDialogModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
