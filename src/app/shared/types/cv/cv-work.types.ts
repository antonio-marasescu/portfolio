export type WorkCompanyTimeline = {
  id: string;
  title: string;
  description: string;
  period: string;
  achievements: string[];
};

export type WorkCompany = {
  id: string;
  title: string;
  logoUrl: string;
  timeline: WorkCompanyTimeline[];
};
