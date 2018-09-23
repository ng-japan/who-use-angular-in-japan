import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { Organization } from '../model/organization';

@Injectable({
  providedIn: 'root',
})
export class OrganizationRepository {
  constructor(private httpClient: HttpClient) {}

  async getAllOrganizations(): Promise<Organization[]> {
    return await this.httpClient
      .get<{ data: Organization[] }>('/data/organizations.json')
      .pipe(map(resp => resp.data))
      .toPromise();
  }
}
