import { Organization } from '../../core/model/organization';

export function generateOrganization(overrides: Partial<Organization> = {}): Organization {
  return {
    name: 'Dummy Company',
    websiteUrl: 'http://example.com',
    description: 'This company is dummy.',
    ngVersions: {
      angular: true,
      angularjs: true,
      ionic: false,
    },
    publicUrl: '',
    ...overrides,
  };
}
