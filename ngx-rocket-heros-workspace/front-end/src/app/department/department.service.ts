import { Injectable } from "@angular/core";

import { HttpClient, HttpHeaders } from "@angular/common/http";

import { Department } from "./department.model";
import { Observable } from "rxjs";

@Injectable()
export class DepartmentService {
  private departmentUrl = "http://localhost:3000/department";
  constructor(private httpClient: HttpClient) {}

  getDepartments(page_number: number = 1, page_size: number = 20): Observable<Department[]> {
    console.log(`${this.departmentUrl}?_limit=${page_size}&_page=${page_number}`);
    return this.httpClient.get<Department[]>(`${this.departmentUrl}?_limit=${page_size}&_page=${page_number}`);
  }

  insertDepartments(department: Department): Observable<Department> {
    return this.httpClient.post<Department>(this.departmentUrl, department);
  }

  deleteDepartment(department: Department): Observable<Department> {
    return this.httpClient.delete<Department>(`${this.departmentUrl}\\${department.id}`);
  }
}
