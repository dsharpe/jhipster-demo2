import { ICountryMySuffix } from 'app/shared/model/country-my-suffix.model';

export interface ILocationMySuffix {
  id?: number;
  streetAddress?: string;
  postalCode?: string;
  city?: string;
  stateProvince?: string;
  country?: ICountryMySuffix;
}

export const defaultValue: Readonly<ILocationMySuffix> = {};
