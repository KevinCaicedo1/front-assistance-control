import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavMenuComponent } from './components/nav-menu/nav-menu.component';
import { MatIconModule } from '@angular/material/icon';
import { CapturePersonComponent } from './components/capture-person/capture-person.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { RoutePanelService } from './services/routes.services';
import { CardModelComponent } from './molecule/card-model/card-model.component';
import { HomeComponent } from './components/home/home.component';
import { ReportComponent } from './components/report/report.component';
import { AssistControlComponent } from './components/assist-control/assist-control.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UserReportComponent } from './components/user-report/user-report.component';
@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    CapturePersonComponent,
    CardModelComponent,
    HomeComponent,
    ReportComponent,
    AssistControlComponent,
    UserReportComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatIconModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    BrowserAnimationsModule
  ],
  providers: [
    RoutePanelService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
