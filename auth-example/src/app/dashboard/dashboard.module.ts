import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { DashboardRoutingModule } from "./dashboard-routing.module";
import { LayoutComponent } from "./layout/layout.component";
import { HomeComponent } from "./home/home.component";
import { AdminComponent } from "./admin/admin.component";

@NgModule({
  declarations: [LayoutComponent, HomeComponent, AdminComponent],
  imports: [CommonModule, DashboardRoutingModule]
})
export class DashboardModule {}
