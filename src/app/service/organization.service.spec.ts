import { async, inject, TestBed } from '@angular/core/testing';
import { OrganizationRepository } from '../core/repository/organization-repository';
import { generateOrganization } from '../testing/generator/generate-organization';
import { OrganizationStore } from './../core/store/organization-store';
import { OrganizationService } from './organization.service';

describe('OrganizationService', () => {
  let service: OrganizationService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
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
    }).compileComponents();
  }));

  beforeEach(inject([OrganizationService], (_service_: OrganizationService) => {
    service = _service_;
  }));

  test('build state correctly', async(
    inject([OrganizationStore], async (store: OrganizationStore) => {
      expect(store.value).toEqual({
        fetching: false,
        allOrganizations: [],
      });

      await service.fetchAllOrganizations();

      expect(store.value.fetching).toEqual(false);
      expect(store.value.allOrganizations.length).toEqual(3);
    }),
  ));
});
