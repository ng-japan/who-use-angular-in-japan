import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Organization } from '../../../core/model/organization';

@Component({
  selector: 'app-organization-list',
  templateUrl: './organization-list.component.html',
  styleUrls: ['./organization-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OrganizationListComponent {
  @Input()
  organizations!: Organization[];

  @Input()
  fetching = false;
}
