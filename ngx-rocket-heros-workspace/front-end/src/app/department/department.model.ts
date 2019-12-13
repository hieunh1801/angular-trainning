import { DataSource } from "@angular/cdk/table";
import { DepartmentService } from "./department.service";
import { catchError, finalize } from "rxjs/operators";
import { BehaviorSubject, of, Observable } from "rxjs";
import { CollectionViewer } from "@angular/cdk/collections";

export interface Department {
  id?: number;
  code: string;
  name: string;
  status: number;
  created_date?: Date;
  edited_date?: Date;
  created_by?: string;
  edited_by?: string;
}
