import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { extract } from "@app/core";
import { Shell } from "@app/shell/shell.service";

import { DepartmentComponent } from "./department.component";
const routes: Routes = [
  Shell.childRoutes([
    { path: "", redirectTo: "/department", pathMatch: "full" },
    { path: "department", component: DepartmentComponent, data: { title: extract("Department") } }
  ])
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DepartmentRoutingModule {}
