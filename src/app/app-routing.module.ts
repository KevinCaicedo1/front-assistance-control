import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AssistControlComponent } from './components/assist-control/assist-control.component';
import { CapturePersonComponent } from './components/capture-person/capture-person.component';
import { HomeComponent } from './components/home/home.component';
import { ReportComponent } from './components/report/report.component';
import { UserReportComponent } from './components/user-report/user-report.component';

const routes: Routes = [
  { path: '', redirectTo: '/', pathMatch: 'full' },
  { path: 'agregar-rostro', component: CapturePersonComponent},
  { path: 'reporte', component: ReportComponent},
  { path: 'marcar-asistencia', component: AssistControlComponent},
  { path: 'usuarios', component: UserReportComponent},
  { path: 'inicio', component: HomeComponent},
  { path: '**', redirectTo: '/inicio', pathMatch: 'full' }];


  export const routing = RouterModule.forRoot(routes);

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
