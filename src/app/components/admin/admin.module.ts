import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';

import { AdminRoutingModule } from './admin-routing.module';
import { HeaderComponent } from './layouts/header/header.component';
import { SidebarComponent } from './layouts/sidebar/sidebar.component';
import { ListaccountComponent } from './pages/account/listaccount/listaccount.component';
import { AddaccountComponent } from './pages/account/addaccount/addaccount.component';
import { UpdateaccountComponent } from './pages/account/updateaccount/updateaccount.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';

@NgModule({
  declarations: [
    DashboardComponent,
    HeaderComponent,
    SidebarComponent,
    ListaccountComponent,
    AddaccountComponent,
    UpdateaccountComponent,
  ],
  imports: [
    NgxPaginationModule,
    CommonModule,
    AdminRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
})
export class AdminModule {}
