import { Injectable } from '@angular/core';
import { OrganizationRepository } from './../core/repository/organization-repository';
import { OrganizationStore } from './../core/store/organization-store';

@Injectable({
  providedIn: 'root',
})
export class OrganizationService {
  constructor(private organizationStore: OrganizationStore, private organizationRepository: OrganizationRepository) {}

  get allOrganizations$() {
    return this.organizationStore.select(state => state.allOrganizations);
  }

  get fetching$() {
    return this.organizationStore.select(state => state.fetching);
  }

  async fetchAllOrganizations() {
    this.organizationStore.patchState({
      fetching: true,
    });
    const organizations = await this.organizationRepository.getAllOrganizations();
    this.organizationStore.patchState({
      fetching: false,
      allOrganizations: organizations,
    });
  }
}
