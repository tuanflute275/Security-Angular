import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';

import { CustomerRoutingModule } from './customer-routing.module';
import { HeaderComponent } from './layouts/header/header.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { SidebarComponent } from './layouts/sidebar/sidebar.component';
import { BlogComponent } from './pages/blog/blog.component';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    SidebarComponent,
    BlogComponent,
  ],
  imports: [
    CommonModule,
    CustomerRoutingModule,
    NgxPaginationModule,
    FormsModule,
    ReactiveFormsModule,
  ],
})
export class CustomerModule {}
