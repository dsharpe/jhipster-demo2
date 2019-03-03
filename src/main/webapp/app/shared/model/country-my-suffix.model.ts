import { IRegionMySuffix } from 'app/shared/model/region-my-suffix.model';

export interface ICountryMySuffix {
  id?: number;
  countryName?: string;
  region?: IRegionMySuffix;
}

export const defaultValue: Readonly<ICountryMySuffix> = {};
