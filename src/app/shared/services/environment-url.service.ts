import { environment } from '../../../environments/environment.development';
import { Injectable } from '@angular/core';

/**
 * Service for retrieving the environment URL address.
 */
@Injectable({
  providedIn: 'root'
})
export class EnvironmentUrlService {
  urlAddress: string = environment.urlAddress;
  
  constructor() { }
}
