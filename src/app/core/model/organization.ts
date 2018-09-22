export interface Organization {
  // Required
  name: string;
  websiteUrl: string;
  description: string;
  logoUrl?: string;
  ngVersions: {
    angularjs?: boolean;
    angular?: boolean;
  };
}
