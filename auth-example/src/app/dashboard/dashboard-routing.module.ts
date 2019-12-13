//  Core Module
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

// Component
import { LayoutComponent } from "./layout/layout.component";
import { HomeComponent } from "./home/home.component";
import { AdminComponent } from "./admin/admin.component";

const routes: Routes = [
  {
    path: "dashboard",
    component: LayoutComponent,
    children: [
      { path: "", redirectTo: "home", pathMatch: "full" },
      { path: "home", component: HomeComponent },
      { path: "admin", component: AdminComponent }
    ]
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule {}
