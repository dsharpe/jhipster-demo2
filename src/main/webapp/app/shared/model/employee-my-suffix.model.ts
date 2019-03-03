import { Moment } from 'moment';
import { IDepartmentMySuffix } from 'app/shared/model/department-my-suffix.model';
import { IJobMySuffix } from 'app/shared/model/job-my-suffix.model';
import { IEmployeeMySuffix } from 'app/shared/model/employee-my-suffix.model';

export interface IEmployeeMySuffix {
  id?: number;
  firstName?: string;
  lastName?: string;
  email?: string;
  phoneNumber?: string;
  hireDate?: Moment;
  salary?: number;
  commissionPct?: number;
  department?: IDepartmentMySuffix;
  jobs?: IJobMySuffix[];
  manager?: IEmployeeMySuffix;
}

export const defaultValue: Readonly<IEmployeeMySuffix> = {};
