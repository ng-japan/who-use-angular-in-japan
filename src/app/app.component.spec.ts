import { NO_ERRORS_SCHEMA } from '@angular/core';
import { async, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { OrganizationRepository } from './core/repository/organization-repository';
import { generateOrganization } from './testing/generator/generate-organization';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AppComponent],
      providers: [
        {
          provide: OrganizationRepository,
          useClass: class {
            async getAllOrganizations() {
              return await [generateOrganization(), generateOrganization(), generateOrganization()];
            }
          },
        },
      ],
      schemas: [NO_ERRORS_SCHEMA],
    }).compileComponents();
  }));

  test('matching snapshot', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();

    expect(fixture).toMatchSnapshot();
  }));
});
