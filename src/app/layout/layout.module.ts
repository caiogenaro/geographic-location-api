import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FooterComponent } from './footer/footer.component';
import { MenuComponent } from './menu/menu.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


@NgModule({
  imports: [
    RouterModule,
    CommonModule,
    FormsModule,
  ],
  declarations: [
    DashboardComponent,
    MenuComponent,
    NavbarComponent,
    FooterComponent
  ],
  exports: [
    DashboardComponent,
    MenuComponent,
    NavbarComponent,
    FooterComponent
  ],
  providers: [],
})
export class LayoutModule { }
