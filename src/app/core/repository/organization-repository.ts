import { Injectable } from '@angular/core';

import { company, lorem, image } from 'faker';
import { Organization } from '../model/organization';

@Injectable({
  providedIn: 'root'
})
export class OrganizationRepository {
  async getAllCompanies(): Promise<Organization[]> {
    return await new Array(10).fill(null).map(() => {
      return {
        name: company.companyName(),
        websiteUrl: 'http://example.com',
        description: lorem.paragraph(),
        logoUrl: image.avatar(),
        ngVersions: {
          angularjs: true,
          angular: true
        }
      };
    });
  }
}
