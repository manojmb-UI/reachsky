export interface CourseModule {
  title: string;
  topics: string[];
}

export interface Course {
  slug: string;
  title: string;
  desc: string;
  tagline: string;
  level: string;
  hours: string;
  rating: string;
  learners: string;
  price: string;
  emi: string;
  startDate: string;
  brochureUrl: string;
  hot: boolean;
  skills: string[];
  outcomes: string[];
  tools: string[];
  modules: CourseModule[];
}