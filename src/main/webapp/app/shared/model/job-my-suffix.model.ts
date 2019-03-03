import { IEmployeeMySuffix } from 'app/shared/model/employee-my-suffix.model';
import { ITaskMySuffix } from 'app/shared/model/task-my-suffix.model';

export interface IJobMySuffix {
  id?: number;
  jobTitle?: string;
  minSalary?: number;
  maxSalary?: number;
  employee?: IEmployeeMySuffix;
  tasks?: ITaskMySuffix[];
}

export const defaultValue: Readonly<IJobMySuffix> = {};
