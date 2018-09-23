import { Component, OnInit } from '@angular/core';
import { OrganizationService } from './service/organization.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  organizations$ = this.organizationService.allOrganizations$;
  fetching$ = this.organizationService.fetching$;

  constructor(private organizationService: OrganizationService) {}

  ngOnInit() {
    this.organizationService.fetchAllOrganizations();
  }
}
