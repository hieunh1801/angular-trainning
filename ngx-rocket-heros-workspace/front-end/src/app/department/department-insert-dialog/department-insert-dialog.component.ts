import { Component, OnInit } from "@angular/core";
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
import { FormBuilder, FormGroup } from "@angular/forms";
import { Department } from "../department.model";

@Component({
  selector: "app-department-insert-dialog",
  templateUrl: "./department-insert-dialog.component.html",
  styleUrls: ["./department-insert-dialog.component.scss"]
})
export class DepartmentInsertDialogComponent implements OnInit {
  rfDepartment: FormGroup;
  department: Department;

  constructor(public dialogRef: MatDialogRef<DepartmentInsertDialogComponent>, private fb: FormBuilder) {}
  ngOnInit() {
    this.createForm();
  }
  onNoClick(): void {
    this.dialogRef.close(null);
  }
  addDepartment(): void {
    const newDepartment: Department = {
      code: this.rfDepartment.value.code,
      name: this.rfDepartment.value.name,
      status: this.rfDepartment.value.status
    };
    this.dialogRef.close(newDepartment);
  }
  createForm(): void {
    this.rfDepartment = this.fb.group({
      code: [""],
      name: [""],
      status: [null]
    });
  }
}
