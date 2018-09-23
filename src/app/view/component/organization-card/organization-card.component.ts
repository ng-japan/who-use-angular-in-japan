import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Organization } from './../../../core/model/organization';

@Component({
  selector: 'app-organization-card',
  templateUrl: './organization-card.component.html',
  styleUrls: ['./organization-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OrganizationCardComponent {
  @Input()
  organization!: Organization;

  @Input()
  index!: number;
}
