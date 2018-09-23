import { NO_ERRORS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { generateOrganization } from '../../../testing/generator/generate-organization';
import { SafeHtmlPipe } from '../../pipe/safe-html.pipe';
import { ToHtmlPipe } from './../../pipe/to-html.pipe';
import { OrganizationCardComponent } from './organization-card.component';

describe('OrganizationCardComponent', () => {
  let component: OrganizationCardComponent;
  let fixture: ComponentFixture<OrganizationCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [OrganizationCardComponent, ToHtmlPipe, SafeHtmlPipe],
      schemas: [NO_ERRORS_SCHEMA],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrganizationCardComponent);
    component = fixture.componentInstance;

    component.index = 1;
    component.organization = generateOrganization();

    fixture.detectChanges();
  });

  test('should create', () => {
    expect(component).toBeTruthy();
  });

  test('matching snapshot', () => {
    expect(fixture).toMatchSnapshot();
  });
});
