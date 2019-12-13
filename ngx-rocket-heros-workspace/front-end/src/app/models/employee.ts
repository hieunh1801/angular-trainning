export interface Employee {
  id: number;
  code: string;
  name: string;
  date_of_bird: Date;
  gender: number;
  username: string;
  password: string;
  email: string;
  phonenumber: string;
  status?: number;
  created_date?: Date;
  edited_date?: Date;
  created_by?: string;
  edited_by?: string;
}
