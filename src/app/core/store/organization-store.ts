import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { distinctUntilChanged, map } from 'rxjs/operators';
import { Organization } from './../model/organization';

interface State {
  allOrganizations: Organization[];
  fetching: boolean;
}

@Injectable({ providedIn: 'root' })
export class OrganizationStore {
  private state$ = new BehaviorSubject<State>({
    allOrganizations: [],
    fetching: false,
  });

  get value() {
    return this.state$.value;
  }

  select<T>(selector: (state: State) => T) {
    return this.state$.asObservable().pipe(
      map(selector),
      distinctUntilChanged(),
    );
  }

  patchState(patch: Partial<State>) {
    const state = this.state$.value;
    this.state$.next({
      ...state,
      ...patch,
    });
  }
}
