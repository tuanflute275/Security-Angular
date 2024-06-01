import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ListaccountComponent } from './pages/account/listaccount/listaccount.component';
import { AddaccountComponent } from './pages/account/addaccount/addaccount.component';
import { UpdateaccountComponent } from './pages/account/updateaccount/updateaccount.component';



const routes: Routes = [
  { path: '', component: DashboardComponent },


  { path: 'account', component: ListaccountComponent},
  { path: 'account/add', component: AddaccountComponent },
  { path: 'account/edit/:username', component: UpdateaccountComponent },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
exports: [RouterModule]
})
export class AdminRoutingModule { }
