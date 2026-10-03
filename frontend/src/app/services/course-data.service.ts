import { Injectable } from '@angular/core';
import { Course, CourseModule } from '../course-page/course.model';

export interface CourseMetadata {
  title: string;
  description: string;
  keywords: string;
  ogDescription: string;
}

@Injectable({
  providedIn: 'root'
})
export class CourseDataService {
  private courses: Map<string, Course> = new Map();
  private courseMetadata: Map<string, CourseMetadata> = new Map();

  constructor() {
    this.initializeCourses();
  }

  private initializeCourses(): void {
    // Full Stack Development
    const fullStackCourse: Course = {
      slug: 'full-stack-development',
      title: 'Full Stack Development',
      desc: 'Become a Professional Full Stack Developer',
      tagline: 'Master HTML, CSS, JavaScript, Python, Django & MySQL',
      level: 'Beginner to Advanced',
      hours: '180 hrs',
      rating: '4.9',
      learners: '15k+',
      price: '₹59,999',
      emi: '₹4,999/mo',
      startDate: 'Starts August 1',
      brochureUrl: 'assets/full-stack-development.pdf',
      hot: true,
      skills: [
        'HTML5', 'CSS3', 'JavaScript', 'Bootstrap', 'Python', 'Django',
        'REST API', 'MySQL', 'Git & GitHub', 'Deployment'
      ],
      outcomes: [
        'Build responsive websites',
        'Develop dynamic web applications',
        'Create REST APIs using Django',
        'Design and manage MySQL databases',
        'Connect frontend with backend',
        'Deploy applications to cloud servers',
        'Work with Git & GitHub',
        'Build real-world projects',
        'Prepare for developer interviews',
        'Become job-ready as a Full Stack Developer'
      ],
      tools: [
        'VS Code', 'HTML5', 'CSS3', 'JavaScript', 'Bootstrap', 'Python',
        'Django', 'MySQL', 'Git', 'GitHub', 'Postman', 'Render'
      ],
      modules: [
        { title: 'HTML5 Fundamentals', topics: ['HTML Structure', 'Forms', 'Tables', 'Semantic Elements'] },
        { title: 'CSS3', topics: ['Selectors', 'Flexbox', 'Grid', 'Animations', 'Responsive Design'] },
        { title: 'JavaScript', topics: ['Variables', 'Functions', 'DOM', 'ES6', 'Async JavaScript'] },
        { title: 'Bootstrap', topics: ['Grid System', 'Components', 'Utilities', 'Responsive Layouts'] },
        { title: 'Python Programming', topics: ['Data Types', 'Functions', 'OOP', 'File Handling', 'Modules'] },
        { title: 'Django Framework', topics: ['MVC Architecture', 'Models', 'Views', 'Templates', 'Authentication'] },
        { title: 'REST API Development', topics: ['Django REST Framework', 'CRUD APIs', 'Authentication', 'JSON'] },
        { title: 'MySQL Database', topics: ['Database Design', 'Queries', 'Joins', 'Relationships'] },
        { title: 'Git & GitHub', topics: ['Repositories', 'Branches', 'Pull Requests', 'Version Control'] },
        { title: 'Deployment', topics: ['Hosting', 'Domain', 'Render', 'Production Deployment'] },
        { title: 'Capstone Project', topics: ['Authentication', 'CRUD Application', 'REST API', 'Deployment'] }
      ]
    };

    this.courses.set('full-stack-development', fullStackCourse);
    this.courseMetadata.set('full-stack-development', {
      title: 'Full Stack Development Course in India | Learn HTML, CSS, JavaScript, Django & MySQL | Reach Sky',
      description: 'Master Full Stack Development with HTML5, CSS3, JavaScript, Python, Django, and MySQL. Build real-world projects and become job-ready. Enroll now for industry-focused training.',
      keywords: 'Full Stack Development course, HTML CSS JavaScript course, Python Django course, MySQL course, Web development training India',
      ogDescription: 'Learn Full Stack Development from basics to advanced. Master HTML, CSS, JavaScript, Python, Django, and MySQL with hands-on projects.'
    });

    // Digital Marketing Mastery
    const digitalMarketingCourse: Course = {
      slug: 'digital-marketing-mastery',
      title: 'Digital Marketing Mastery',
      desc: 'Become a Complete Digital Marketing Expert',
      tagline: 'Master SEO, Social Media, Performance Marketing & AI Tools',
      level: 'Beginner to Advanced',
      hours: '120 hrs',
      rating: '4.9',
      learners: '25k+',
      price: '₹49,999',
      emi: '₹4,199/mo',
      startDate: 'Starts August 1',
      brochureUrl: 'assets/Digital marketing.pdf',
      hot: true,
      skills: [
        'SEO', 'Google Ads', 'Meta Ads', 'Social Media Marketing', 'Content Marketing',
        'Email Marketing', 'Google Analytics', 'Performance Marketing', 'Affiliate Marketing', 'AI Marketing Tools'
      ],
      outcomes: [
        'Create and execute digital marketing campaigns',
        'Rank websites on Google using SEO',
        'Generate leads through Google & Meta Ads',
        'Build high-converting landing pages',
        'Analyze campaign performance using GA4',
        'Manage social media accounts professionally',
        'Create content strategies for brands',
        'Run eCommerce marketing campaigns',
        'Automate marketing workflows',
        'Become job-ready as a Digital Marketing Specialist'
      ],
      tools: [
        'Google Analytics 4', 'Google Search Console', 'Google Ads', 'Meta Ads Manager',
        'Canva', 'SEMrush', 'Ahrefs', 'Mailchimp', 'HubSpot', 'ChatGPT', 'Gemini', 'WordPress'
      ],
      modules: [
        { title: 'Digital Marketing Fundamentals', topics: ['Introduction to Digital Marketing', 'Marketing Funnel', 'Customer Journey', 'Digital Marketing Channels'] },
        { title: 'Website Planning & WordPress', topics: ['Domain & Hosting', 'WordPress Setup', 'Website Design', 'Landing Page Creation'] },
        { title: 'Search Engine Optimization (SEO)', topics: ['Keyword Research', 'On-Page SEO', 'Technical SEO', 'Off-Page SEO', 'Link Building', 'Local SEO'] },
        { title: 'Google Search Console', topics: ['Website Verification', 'Indexing', 'Performance Reports', 'Core Web Vitals'] },
        { title: 'Google Analytics 4 (GA4)', topics: ['GA4 Setup', 'Events & Conversions', 'Audience Reports', 'Traffic Analysis'] },
        { title: 'Content Marketing', topics: ['Content Strategy', 'Blog Writing', 'Copywriting', 'Content Calendar'] },
        { title: 'Social Media Marketing', topics: ['Facebook Marketing', 'Instagram Marketing', 'LinkedIn Marketing', 'YouTube Marketing', 'Social Media Strategy'] },
        { title: 'Meta Ads (Facebook & Instagram Ads)', topics: ['Ads Manager', 'Campaign Objectives', 'Audience Targeting', 'Lead Generation Ads', 'Remarketing Campaigns'] },
        { title: 'Google Ads', topics: ['Search Campaigns', 'Display Campaigns', 'Video Campaigns', 'Performance Max', 'Conversion Tracking'] },
        { title: 'Email Marketing', topics: ['Email List Building', 'Email Automation', 'Newsletter Campaigns', 'A/B Testing'] },
        { title: 'Affiliate Marketing', topics: ['Affiliate Networks', 'Commission Models', 'Traffic Generation', 'Affiliate Strategy'] },
        { title: 'eCommerce Marketing', topics: ['Shopify Basics', 'Product Marketing', 'Shopping Ads', 'Conversion Optimization'] },
        { title: 'Marketing Automation', topics: ['Lead Nurturing', 'CRM Integration', 'Workflow Automation', 'Customer Segmentation'] },
        { title: 'AI for Digital Marketing', topics: ['ChatGPT for Marketing', 'AI Content Creation', 'AI Ad Copy Generation', 'Marketing Automation with AI'] },
        { title: 'Freelancing & Career Preparation', topics: ['Portfolio Building', 'Client Acquisition', 'Interview Preparation', 'Resume Optimization'] },
        { title: 'Capstone Project', topics: ['SEO Project', 'Google Ads Campaign', 'Social Media Strategy', 'Complete Marketing Plan'] }
      ]
    };

    this.courses.set('digital-marketing-mastery', digitalMarketingCourse);
    this.courseMetadata.set('digital-marketing-mastery', {
      title: 'Digital Marketing Course in India | SEO, Google Ads, Social Media, GA4 | Reach Sky',
      description: 'Complete Digital Marketing training covering SEO, Google Ads, Meta Ads, Social Media Marketing, GA4, Content Marketing, and AI tools. Become a certified Digital Marketer.',
      keywords: 'Digital Marketing course, SEO course, Google Ads training, Social Media Marketing, Digital Marketing certification India',
      ogDescription: 'Master Digital Marketing from scratch. Learn SEO, Google Ads, Meta Ads, Social Media, GA4, Content Marketing, and AI-powered strategies.'
    });

    // Data Analyst
    const dataAnalystCourse: Course = {
      slug: 'data-analyst',
      title: 'Data Analyst',
      desc: 'Become a Job-Ready Data Analyst',
      tagline: 'Master Excel, SQL, Python, Power BI & Data Analytics',
      level: 'Beginner to Advanced',
      hours: '150 hrs',
      rating: '4.9',
      learners: '20k+',
      price: '₹39,999',
      emi: '₹3,499/mo',
      startDate: 'Starts August 1',
      brochureUrl: 'assets/data-analyst-brochure.pdf',
      hot: true,
      skills: [
        'Advanced Excel', 'SQL', 'Python', 'Pandas', 'NumPy', 'Power BI',
        'Data Visualization', 'Statistics', 'Power Query', 'DAX'
      ],
      outcomes: [
        'Analyze and clean real-world datasets',
        'Perform advanced data analysis using Excel',
        'Write SQL queries for business data',
        'Analyze data using Python, Pandas and NumPy',
        'Create interactive dashboards using Power BI',
        'Build data visualizations and reports',
        'Apply statistics for business analysis',
        'Perform data cleaning and transformation',
        'Work on real-world data analytics projects',
        'Prepare for Data Analyst interviews',
        'Build a professional Data Analyst portfolio',
        'Become job-ready as a Data Analyst'
      ],
      tools: [
        'Microsoft Excel', 'SQL', 'Python', 'Pandas', 'NumPy', 'Power BI',
        'Power Query', 'DAX', 'Jupyter Notebook', 'Git & GitHub'
      ],
      modules: [
        { title: 'Excel for Data Analysis', topics: ['Excel Fundamentals', 'Advanced Formulas', 'Lookup Functions', 'Pivot Tables', 'Charts & Dashboards', 'Data Cleaning'] },
        { title: 'Statistics Fundamentals', topics: ['Descriptive Statistics', 'Mean, Median & Mode', 'Variance & Standard Deviation', 'Probability Basics', 'Correlation', 'Hypothesis Testing'] },
        { title: 'SQL Fundamentals', topics: ['Database Fundamentals', 'SELECT Queries', 'Filtering & Sorting', 'GROUP BY & HAVING', 'Joins', 'Subqueries', 'CTEs', 'Window Functions'] },
        { title: 'Python Programming', topics: ['Python Basics', 'Variables & Data Types', 'Conditions & Loops', 'Functions', 'Lists & Dictionaries', 'File Handling'] },
        { title: 'NumPy & Pandas', topics: ['NumPy Arrays', 'Pandas Series', 'DataFrames', 'Data Filtering', 'Data Transformation', 'GroupBy & Aggregation'] },
        { title: 'Data Cleaning', topics: ['Handling Missing Values', 'Removing Duplicates', 'Data Type Conversion', 'Outlier Detection', 'Data Standardization', 'Data Validation'] },
        { title: 'Exploratory Data Analysis', topics: ['EDA Fundamentals', 'Data Exploration', 'Pattern Identification', 'Trend Analysis', 'Correlation Analysis', 'Business Insights'] },
        { title: 'Power BI', topics: ['Power BI Fundamentals', 'Data Import', 'Data Modeling', 'Relationships', 'Interactive Dashboards', 'Reports'] },
        { title: 'Power Query', topics: ['Data Import', 'Data Transformation', 'Data Cleaning', 'Merge Queries', 'Append Queries', 'ETL Workflows'] },
        { title: 'DAX', topics: ['DAX Fundamentals', 'Calculated Columns', 'Measures', 'Aggregation Functions', 'Time Intelligence', 'Advanced DAX'] },
        { title: 'Data Visualization', topics: ['Chart Selection', 'Dashboard Design', 'KPIs', 'Interactive Visualizations', 'Business Reporting', 'Data Storytelling'] },
        { title: 'Business Analytics', topics: ['Business Problems', 'KPI Analysis', 'Sales Analysis', 'Customer Analysis', 'Financial Analysis', 'Business Recommendations'] },
        { title: 'Real-World Projects', topics: ['Sales Analytics Project', 'Customer Analytics Project', 'Business Dashboard', 'Data Cleaning Project'] },
        { title: 'Career & Interview Preparation', topics: ['Resume Building', 'Portfolio Development', 'SQL Interview Questions', 'Python Interview Questions', 'Power BI Interview Questions', 'Mock Interviews'] },
        { title: 'Capstone Project', topics: ['End-to-End Data Analysis', 'Data Cleaning', 'SQL Analysis', 'Python Analysis', 'Power BI Dashboard', 'Business Insights'] }
      ]
    };

    this.courses.set('data-analyst', dataAnalystCourse);
    this.courseMetadata.set('data-analyst', {
      title: 'Data Analyst Course in India | Excel, SQL, Python, Power BI Training | Reach Sky',
      description: 'Become a Data Analyst with comprehensive training in Excel, SQL, Python, Pandas, Power BI, and data visualization. Build a professional portfolio and land your dream job.',
      keywords: 'Data Analyst course, Excel SQL Python course, Power BI training, Data Analytics course India, Business Analytics',
      ogDescription: 'Master Data Analysis with Excel, SQL, Python, Power BI, and advanced statistics. Real-world projects and placement-focused training.'
    });
  }

  getCourse(slug: string): Course | undefined {
    return this.courses.get(slug);
  }

  getCourseMetadata(slug: string): CourseMetadata | undefined {
    return this.courseMetadata.get(slug);
  }

  getAllCourses(): Course[] {
    return Array.from(this.courses.values());
  }

  getAllCourseSlugs(): string[] {
    return Array.from(this.courses.keys());
  }
}
