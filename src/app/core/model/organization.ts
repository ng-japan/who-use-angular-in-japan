export interface Organization {
  // Required
  name: string;
  websiteUrl: string;
  productUrl?: string;
  description: string;
  ngVersions: {
    angularjs?: boolean;
    angular?: boolean;
  };
}
