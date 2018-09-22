import { Component, OnInit } from '@angular/core';
import { Organization } from './core/model/organization';
import { OrganizationRepository } from './core/repository/organization-repository';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  organizations: Organization[] = [];

  constructor(private organizationRepository: OrganizationRepository) {}

  async ngOnInit() {
    const organizations = await this.organizationRepository.getAllCompanies();

    this.organizations = organizations;
  }
}
