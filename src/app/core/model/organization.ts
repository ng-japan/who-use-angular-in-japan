export interface Organization {
  // Required
  name: string;
  websiteUrl: string;
  publicUrl?: string;
  description: string;
  ngVersions: {
    angularjs?: boolean;
    angular?: boolean;
    ionic?: boolean;
  };
}
