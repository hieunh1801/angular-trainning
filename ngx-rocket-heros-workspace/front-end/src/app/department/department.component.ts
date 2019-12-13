import { Component, OnInit, ViewChild } from "@angular/core";

import { DepartmentService } from "./department.service";
import { Department } from "./department.model";
import { MatPaginator } from "@angular/material/paginator";
import { MatTableDataSource } from "@angular/material/table";
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
import { DepartmentInsertDialogComponent } from "./department-insert-dialog/department-insert-dialog.component";
import { finalize, catchError } from "rxjs/operators";

@Component({
  selector: "app-department",
  templateUrl: "./department.component.html",
  styleUrls: ["./department.component.scss"]
})
export class DepartmentComponent implements OnInit {
  departments: Department[] = [];
  displayedDepartmentColumns: string[] = ["id", "code", "name", "status", "created_date", "edited_date", "_feature"];
  selectedDepartment: Department;
  page_number: number = 1;
  page_size: number = 5;
  constructor(private departmentService: DepartmentService, public dialog: MatDialog) {}

  ngOnInit() {
    this.getDepartmentsFromService();
  }

  selectDepartment(department: Department): void {
    this.selectedDepartment = department;
    console.log("selectDepartment: ", this.selectedDepartment);
  }

  getDepartmentsFromService(): void {
    console.log(`get department ${this.page_number} - ${this.page_size}`);
    this.departmentService.getDepartments(this.page_number, this.page_size).subscribe((data: Department[]) => {
      this.departments = data;
      console.log("new data", this.departments);
    });
  }
  nextPage(): void {
    if (this.departments.length < this.page_size) {
      return;
    }
    this.page_number = this.page_number + 1;
    this.getDepartmentsFromService();
  }
  prevPage(): void {
    if (this.page_number == 1) {
      return;
    }
    this.page_number = this.page_number - 1;
    this.getDepartmentsFromService();
  }

  editDepartment(department: Department): void {
    this.selectDepartment(department);
  }

  deleteDepartment(department: Department) {
    console.log("delete: ", department);
  }

  // Handling Insert dialog
  openAddDepartmentDialog(): void {
    const dialogRef = this.dialog.open(DepartmentInsertDialogComponent, {
      width: "500"
    });

    dialogRef.afterClosed().subscribe((department: Department) => {
      if (department == null) {
        return;
      }
      this.departmentService.insertDepartments(department).subscribe(
        (department: Department) => {
          console.log("Insert success", department);
          this.getDepartmentsFromService();
        },
        error => {
          console.log(error);
        }
      );
    });
  }
}
