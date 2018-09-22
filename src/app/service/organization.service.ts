import { Injectable } from '@angular/core';
import { OrganizationRepository } from './../core/repository/organization-repository';
import { OrganizationStore } from './../core/store/organization-store';

@Injectable({
  providedIn: 'root'
})
export class OrganizationService {
  constructor(
    private organizationStore: OrganizationStore,
    private organizationRepository: OrganizationRepository
  ) {}

  get allOrganization$() {
    return this.organizationStore.allOrganizations$;
  }

  async fetchAllOrganizations() {
    const organizations = await this.organizationRepository.getAllCompanies();
    this.organizationStore.setOrganizations(organizations);
  }
}
