import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeComponent } from './employee/employee.component';
import { DepartmentsComponent } from './departments/departments.component';
import { PositionComponent } from './position/position.component';
import { WorkProcessComponent } from './work-process/work-process.component';
import { EmployeeManagerRoutingModule } from './employee-manager-routing.module';

@NgModule({
  declarations: [EmployeeComponent, DepartmentsComponent, PositionComponent, WorkProcessComponent],
  imports: [
    CommonModule,
    EmployeeManagerRoutingModule
  ]
})
export class EmployeeManagerModule { }
