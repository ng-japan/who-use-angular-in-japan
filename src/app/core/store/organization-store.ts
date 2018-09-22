import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Organization } from './../model/organization';

@Injectable({ providedIn: 'root' })
export class OrganizationStore {
  private state$ = new BehaviorSubject<Organization[]>([]);

  get allOrganizations$() {
    return this.state$.asObservable();
  }

  setOrganizations(value: Organization[]) {
    this.state$.next(value);
  }
}
