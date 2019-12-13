import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { MaterialModule } from "../material.module";
// Your
import { DepartmentRoutingModule } from "./department-routing.module";
import { DepartmentComponent } from "./department.component";

import { DepartmentService } from "./department.service";
import { DepartmentInsertDialogComponent } from "./department-insert-dialog/department-insert-dialog.component";
import { ReactiveFormsModule } from "@angular/forms";
@NgModule({
  declarations: [DepartmentComponent, DepartmentInsertDialogComponent],
  imports: [CommonModule, DepartmentRoutingModule, MaterialModule, ReactiveFormsModule],
  providers: [DepartmentService],
  entryComponents: [DepartmentInsertDialogComponent]
})
export class DepartmentModule {}
