import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AuthGuard } from 'src/app/auth/auth.guard';
import { BlogComponent } from './pages/blog/blog.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'checkout/:amount',
    component: BlogComponent,
    canActivate: [AuthGuard],
    data: {
      roles:["User"],
    },
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomerRoutingModule { }
