import { Moment } from 'moment';
import { IJobMySuffix } from 'app/shared/model/job-my-suffix.model';
import { IDepartmentMySuffix } from 'app/shared/model/department-my-suffix.model';
import { IEmployeeMySuffix } from 'app/shared/model/employee-my-suffix.model';

export const enum Language {
  FRENCH = 'FRENCH',
  ENGLISH = 'ENGLISH',
  SPANISH = 'SPANISH'
}

export interface IJobHistoryMySuffix {
  id?: number;
  startDate?: Moment;
  endDate?: Moment;
  language?: Language;
  job?: IJobMySuffix;
  department?: IDepartmentMySuffix;
  employee?: IEmployeeMySuffix;
}

export const defaultValue: Readonly<IJobHistoryMySuffix> = {};
