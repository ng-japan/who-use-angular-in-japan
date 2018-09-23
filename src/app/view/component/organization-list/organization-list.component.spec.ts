import { NO_ERRORS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { generateOrganization } from '../../../testing/generator/generate-organization';
import { ToHtmlPipe } from '../../pipe/to-html.pipe';
import { OrganizationCardComponent } from '../organization-card/organization-card.component';
import { SafeHtmlPipe } from './../../pipe/safe-html.pipe';
import { OrganizationListComponent } from './organization-list.component';

describe('OrganizationListComponent', () => {
  let component: OrganizationListComponent;
  let fixture: ComponentFixture<OrganizationListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [OrganizationListComponent, OrganizationCardComponent, SafeHtmlPipe, ToHtmlPipe],
      schemas: [NO_ERRORS_SCHEMA],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrganizationListComponent);
    component = fixture.componentInstance;

    component.fetching = false;
    component.organizations = [generateOrganization(), generateOrganization(), generateOrganization()];

    fixture.detectChanges();
  });

  test('should be created', () => {
    expect(component).toBeTruthy();
  });

  test('matching snapshot', () => {
    expect(fixture).toMatchSnapshot();
  });
});
