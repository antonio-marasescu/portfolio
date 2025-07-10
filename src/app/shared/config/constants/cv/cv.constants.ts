import {
  About,
  Certifications,
  Education,
  Intro,
  Projects,
  Skills,
  StandardCv,
  StandardCvSection,
  Work
} from '../../../types/cv/cv.types';
import { CvAvailableSkills } from './cv-skills.constants';
import { AvailableSkillCategory } from '../../../types/cv/cv-skills.types';

const CvIntro: Intro = {
  id: StandardCvSection.Intro,
  welcome: `Hello, my name is Antonio`,
  title: `Full-Stack Software Engineer`,
  githubUrl: 'https://github.com/antonio-marasescu',
  linkedInUrl: 'https://www.linkedin.com/in/antonio-marasescu-duran-953aa2177/',
  status: 'available'
};

const CvAbout: About = {
  id: StandardCvSection.About,
  content: `Hello! I am Antonio, an IT enthusiast which works full-time as a Full-Stack Software Engineer,
    often taking on the responsibilities of a lead developer. This includes managing DevOps and sometimes overseeing a project architecture.\n
    I have expertise in web development, particularly with Angular and React, while on the backend, I typically use Node.js and Spring. In terms of cloud computing, my expertise lies in utilizing AWS, CDK, and Terraform.`,
  imageUrl: 'profile/me.webp',
  imageUrlAlt: 'Antonio Marasescu-Duran Photo',
  topSkills: [
    CvAvailableSkills.Angular,
    CvAvailableSkills.NodeJS,
    CvAvailableSkills.Terraform,
    CvAvailableSkills.AwsServices
  ]
};

const CvSkills: Skills = {
  id: StandardCvSection.Skills,
  categories: [
    {
      id: AvailableSkillCategory.Frontend,
      label: 'Frontend',
      skills: [
        CvAvailableSkills.Angular,
        CvAvailableSkills.React,
        CvAvailableSkills.CSS,
        CvAvailableSkills.SASS,
        CvAvailableSkills.HTML,
        CvAvailableSkills.Tailwind,
        CvAvailableSkills.Ngrx,
        CvAvailableSkills.Redux,
        CvAvailableSkills.MaterialDesign,
        CvAvailableSkills.Storybook
      ]
    },
    {
      id: AvailableSkillCategory.Backend,
      label: 'Backend',
      skills: [
        CvAvailableSkills.NodeJS,
        CvAvailableSkills.ExpressJs,
        CvAvailableSkills.NestJs,
        CvAvailableSkills.SpringBoot,
        CvAvailableSkills.AwsLambda,
        CvAvailableSkills.GraphQl,
        CvAvailableSkills.PostgreSQL,
        CvAvailableSkills.Dynamodb,
        CvAvailableSkills.Jpa,
        CvAvailableSkills.TypeORM
      ]
    },
    {
      id: AvailableSkillCategory.DevOps,
      label: 'DevOps',
      skills: [
        CvAvailableSkills.Terraform,
        CvAvailableSkills.AwsCdk,
        CvAvailableSkills.AwsServices,
        CvAvailableSkills.Docker,
        CvAvailableSkills.GithubActions
      ]
    },
    {
      id: AvailableSkillCategory.Languages,
      label: 'Languages',
      skills: [
        CvAvailableSkills.TypeScript,
        CvAvailableSkills.JavaScript,
        CvAvailableSkills.Java,
        CvAvailableSkills.Solidity
      ]
    },
    {
      id: AvailableSkillCategory.AI,
      label: 'AI',
      skills: [CvAvailableSkills.OpenAI, CvAvailableSkills.LangChain, CvAvailableSkills.LLM]
    },
    {
      id: AvailableSkillCategory.Testing,
      label: 'Testing',
      skills: [CvAvailableSkills.Jest, CvAvailableSkills.Cypress]
    },
    {
      id: AvailableSkillCategory.Miscellaneous,
      label: 'Miscellaneous',
      skills: [
        CvAvailableSkills.Git,
        CvAvailableSkills.Nx,
        CvAvailableSkills.Esbuild,
        CvAvailableSkills.Ethereum
      ]
    }
  ]
};

const CvWork: Work = {
  id: StandardCvSection.Work,
  history: [
    {
      id: 'msg-systems-romania',
      title: 'MSG Systems Romania',
      logoUrl: 'work/msg-systems-romania.webp',
      timeline: [
        {
          id: 'msg-systems-senior',
          title: 'Senior Software Engineer',
          description: `Worked as a Full-Stack Senior Engineer, focusing on development, architecture, and AWS cloud infrastructure. Designed and built both serverless and container-based applications, deployed using IaC tools like AWS CDK and Terraform. Integrated LLM solutions and delivered scalable, user-focused solutions across diverse projects.`,
          period: 'Mar.2022 - Present',
          achievements: [
            'Developed and maintained web applications for Allianz Switzerland insurance projects to high-quality standards',
            'Engineered and integrated LLM-based features into an OKR management platform using serverless architecture',
            `Led architectural design and research initiatives while managing AWS infrastructure with CDK`,
            `Spearheaded the creation of an internal component library to ensure brand consistency and reusability`,
            `Built a citizen engagement platform for Babeș-Bolyai University, focusing on full-stack development and performance optimization`,
            `Developed a responsive sales lead processing application handling large Excel imports and contributed to AWS architecture`
          ]
        },
        {
          id: 'msg-systems-mid',
          title: 'Software Engineer',
          description: `Contributed to the development of reinsurance automation solutions using the Corda blockchain. Focused on frontend architecture, reusable components, and complex UI logic orchestration. Supported multi-party contract platforms and led company-wide internship initiatives.`,
          period: `Mar.2020 - Mar. 2022 2 yrs`,
          achievements: [
            'Developed frontend architecture for Corda-based reinsurance workflow apps with Redux and Storybook',
            'Engineered complex inter-field logic and validation handling in large-scale forms',
            'Built multi-tenant React applications for a secure contract negotiation platform',
            'Led the internship program as Coordinator, managing mentors and curriculum development',
            'Created an internal roadmap tool for training programs with GitHub-linked visualizations'
          ]
        },
        {
          id: 'msg-systems-junior',
          title: 'Junior Software Engineer',
          description: `Worked on a ticketing and promotions platform for German energy companies. Contributed across the full stack using Node.js, GraphQL, Angular, and AWS. Emphasized quality through E2E testing and mentorship within the internship program.`,
          period: `Sep.2019 - Mar. 2020 7 mos`,
          achievements: [
            'Developed features across backend (Node.js/Express, GraphQL) and frontend (Angular)',
            'Implemented data handling with Postgres and Redis, and deployed services on AWS',
            'Built robust E2E test coverage using Cypress to ensure application reliability',
            'Mentored interns, supporting their growth through hands-on training and feedback'
          ]
        },
        {
          id: 'msg-systems-intern',
          title: 'Summer Intern',
          description: `Worked and developed a full-stack project alongside a small team of fellow interns using Angular, Spring and a SAP backend.`,
          period: `Jul.2019 - Sep. 2019 3 mos`,
          achievements: []
        }
      ]
    },
    {
      id: 'yardi-romania',
      title: 'Yardi Romania',
      logoUrl: 'work/yardi-romania.webp',
      timeline: [
        {
          id: 'yardi-intern',
          title: 'Intern',
          description: `Worked on as a web developer intern in an Agile project focusing of US real estate market.`,
          period: `Oct. 2018 - Feb. 2019 5 mos`,
          achievements: []
        }
      ]
    }
  ]
};

const CvEducation: Education = {
  id: StandardCvSection.Education,
  history: [
    {
      id: 'utcn-master-degree',
      title: 'Technical University of Cluj-Napoca',
      description: "Master's degree, Information Technology in Economy",
      period: 'Jan 2020 - Jul 2023'
    },
    {
      id: 'utcn-bachelor-degree',
      title: 'Technical University of Cluj-Napoca',
      description: "Bachelor's degree, Computer Science",
      period: '2016 - 2020'
    },
    {
      id: 'ion-bratianu-national-college-degree',
      title: 'Ion Bratianu National College, Pitesti',
      description: 'Baccalaureate, Intensive Mathematics-Informatics',
      period: '2012 - 2016'
    }
  ]
};

const CvProjects: Projects = {
  id: StandardCvSection.Projects,
  projects: [
    {
      id: 'codex',
      title: 'Codex',
      period: '2025',
      content: `A personal blog and research notes app designed for clearer presentation, easier access, and seamless sharing, built using Analog and Angular`,
      category: 'Personal',
      isGithub: true,
      url: 'https://github.com/antonio-marasescu/codex',
      tags: ['CDK', 'AWS Services', 'Angular', 'Analog', 'TypeScript', 'Tailwind', 'HTML', 'CSS']
    },
    {
      id: 'allianz',
      title: 'Allianz Insurance Projects',
      period: '2025',
      content: `Developing and maintaining web applications for Allianz Switzerland insurance projects to high-quality standards`,
      category: 'Work',
      tags: [
        'Angular',
        'Docker',
        'Kubernetes',
        'TypeScript',
        'Sass',
        'Aquila',
        'Ngrx',
        'HTML',
        'CSS'
      ]
    },
    {
      id: 'jobcraft',
      title: 'Jobcraft',
      period: '2025',
      content: `An LLM-powered job and interview platform that helps users find jobs and prepares them for interviews. The AI agent takes the role of the interviewer, running realistic, automated interview sessions with candidates.`,
      category: 'Personal',
      tags: [
        'Terraform',
        'AWS Services',
        'LangChain',
        'RAG',
        'AWS Bedrock',
        'Angular',
        'TypeScript',
        'Sass',
        'Ngrx',
        'Tailwind',
        'Nx',
        'HTML',
        'CSS'
      ]
    },

    {
      id: 'sanctumlab',
      title: 'Sanctum Lab',
      period: '2024',
      content: `A flexible homelab software suite for streamlined home content management, designed as a serverless application with the option to run locally or in a Docker container. Primarily intended to explore a template architecture for serverless projects on AWS`,
      category: 'Personal',
      isGithub: true,
      url: 'https://github.com/antonio-marasescu/sanctumlab',
      tags: [
        'CDK',
        'AWS Services',
        'AWS Lambda',
        'DynamoDB',
        'Angular',
        'NgRx',
        'TypeScript',
        'Tailwind',
        'HTML',
        'SCSS',
        'Zod',
        'Docker'
      ]
    },
    {
      id: 'rokr-ai',
      title: 'ROKR AI',
      period: '2024',
      content: `Tech lead on a project exploring LLM integration (OpenAI, Claude, AWS Titan) into an OKR platform. Led architecture, AWS CDK infrastructure, and core research, including a playground app and RAG-focused LLM comparisons.`,
      category: 'Work',
      tags: [
        'AWS Lambda',
        'AWS CDK',
        'AWS Services',
        'Serverless',
        'Angular',
        'JavaScript',
        'TypeScript',
        'Sass',
        'Storybook',
        'Ngrx',
        'Redux',
        'ESBuild',
        'DynamoDB',
        'Nx',
        'LLM',
        'LangChain',
        'OpenAI',
        'HTML',
        'CSS'
      ]
    },
    {
      id: 'corelib',
      title: 'Corelib',
      period: '2024',
      content: `Led the creation of an internal component library to ensure brand consistency and reusability.`,
      category: 'Work',
      tags: ['AWS CDK', 'Angular', 'Sass', 'TypeScript', 'Storybook']
    },
    {
      id: 'ubb-citizen-science',
      title: 'UBB Citizen Science',
      period: '2023-2024',
      content: `Platform by Babeș-Bolyai University to connect citizens with research projects. I supported its release to production with full-stack development, performance optimizations, and code quality improvements.`,
      category: 'Work',
      url: 'https://citizenscience.openscience.ubbcluj.ro/',
      tags: [
        'Spring',
        'Angular',
        'Java',
        'JavaScript',
        'TypeScript',
        'Sass',
        'Storybook',
        'Ngrx',
        'Redux',
        'Docker',
        'Postgres',
        'Nx',
        'Azure',
        'HTML',
        'CSS'
      ]
    },
    {
      id: 'eam-tool',
      title: 'EAM Tool',
      period: '2023',
      content: `Lead frontend developer for a sales lead management platform requiring complex Excel import and hierarchical logic. Contributed to project-wide architecture decisions.`,
      category: 'Work',
      tags: [
        'Spring',
        'Angular',
        'Kotlin',
        'JavaScript',
        'TypeScript',
        'Storybook',
        'Ngrx',
        'Redux',
        'Docker',
        'Nx',
        'AWS Services',
        'Terraform',
        'Github Actions',
        'Postgres',
        'HTML',
        'CSS',
        'Sass',
        'Material Design'
      ]
    },
    {
      id: 'decentralized-freelance-news',
      title: 'Decentralized Freelance News',
      period: '2023',
      content: `Master's thesis: a decentralized news platform verifying writer identities with Zero-Knowledge Proofs. Implemented identity module, Ethereum integration, and decentralized operations.`,
      category: 'Personal',
      url: 'https://github.com/antonio-marasescu/decentralized-freelance-news',
      isGithub: true,
      tags: [
        'NestJs',
        'Angular',
        'Solidity',
        'JavaScript',
        'TypeScript',
        'Ngrx',
        'Redux',
        'Nx',
        'TypeOrm',
        'Ethereum',
        'Zero-Knowledge Proofs',
        'Docker',
        'Postgres',
        'HTML',
        'CSS',
        'Sass',
        'Truffle'
      ]
    },
    {
      id: 'roadmap-architect',
      title: 'Roadmap Architect',
      period: '2022-2023',
      content: `Internal roadmap builder for training programs, showing graph structures with GitHub-hosted markdown integration. Proposed, implemented, deployed, and maintained the app.`,
      category: 'Work',
      tags: [
        'React',
        'JavaScript',
        'TypeScript',
        'Nx',
        'Github Actions',
        'HTML',
        'CSS',
        'Sass',
        'Material Design'
      ]
    },
    {
      id: 'lotus-insurance',
      title: 'Lotus Insurance',
      period: '2023',
      content: `Multi-party contract negotiation platform for insurance/reinsurance with multi-tenancy architecture. Worked as full-stack developer and architect.`,
      category: 'Work',
      tags: [
        'Spring',
        'React',
        'Kotlin',
        'JavaScript',
        'TypeScript',
        'Storybook',
        'Ngrx',
        'Redux',
        'Docker',
        'Nx',
        'AWS Services',
        'Terraform',
        'Github Actions',
        'Cypress',
        'Postgres',
        'Multi-tenancy',
        'HTML',
        'CSS',
        'Sass',
        'Material Design'
      ]
    },
    {
      id: 'b3i-corda-solutions',
      title: 'B3I Corda Projects',
      period: '2021-2023',
      content: `Worked on sub-projects aimed at automating insurance processes using permissioned Corda blockchain. Focused primarily on frontend development and delivery.`,
      category: 'Work',
      tags: [
        'Spring',
        'Angular',
        'NestJs',
        'Kotlin',
        'JavaScript',
        'TypeScript',
        'Storybook',
        'Docker',
        'Nx',
        'Postgres',
        'Cypress',
        'Ngrx',
        'Redux',
        'Gitlab',
        'Corda',
        'HTML',
        'CSS',
        'Sass',
        'Material Design'
      ]
    },
    {
      id: 'edublock',
      title: 'Edublock',
      period: '2021',
      content: `Bachelor's thesis: a blockchain-based platform for inter-university sharing of educational records. Implemented custom proof-of-work, worker node messaging, and transaction validation.`,
      category: 'Personal',
      url: 'https://github.com/antonio-marasescu/EduBlock',
      isGithub: true,
      tags: [
        'ExpressJs',
        'Angular',
        'JavaScript',
        'TypeScript',
        'Ngrx',
        'Redux',
        'TypeOrm',
        'Docker',
        'Postgres',
        'HTML',
        'CSS',
        'Sass',
        'Gulp'
      ]
    },
    {
      id: 'dipko',
      title: 'Dipko',
      period: '2019-2021',
      content: `Ticketing and promotion system for German energy companies. Developed features across the full stack with technologies like GraphQL, Redis, and AWS.`,
      category: 'Work',
      tags: [
        'Angular',
        'ExpressJs',
        'JavaScript',
        'TypeScript',
        'Docker',
        'GraphQl',
        'Ngrx',
        'Redux',
        'TypeORM',
        'Cypress',
        'DynamoDB',
        'Redis',
        'Jest',
        'HTML',
        'CSS',
        'Sass'
      ]
    },
    {
      id: 'ethereum-cv-sharepoint',
      title: 'CV Sharepoint',
      period: '2020',
      content: `Intro to Ethereum dApps: a blockchain CV sharepoint using Truffle, Ganache, and IPFS. Hashes stored on-chain, files on IPFS.`,
      category: 'Personal',
      url: 'https://github.com/antonio-marasescu/Ethereum-CV-Sharepoint',
      isGithub: true,
      tags: [
        'Angular',
        'Solidity',
        'JavaScript',
        'TypeScript',
        'HTML',
        'CSS',
        'Sass',
        'IPFS',
        'Truffle'
      ]
    }
  ]
};

const CvCertifications: Certifications = {
  id: StandardCvSection.Certifications,
  certifications: [
    {
      id: 'aws-certified-developer-associate',
      name: 'AWS Certified Developer Associate',
      url: 'https://www.credly.com/badges/6217b40a-d8d9-4dae-aa1c-6a605db9e9f0/public_url',
      imageUrl: 'certifications/aws-certified-developer-associate.webp'
    },
    {
      id: 'corda-certified-developer',
      name: 'Corda Certified Developer',
      url: 'https://www.credly.com/badges/23b49756-5e7a-40dc-8bf5-3687f4ed1b6a/public_url',
      imageUrl: 'certifications/corda-certified-developer.webp'
    }
  ]
};
export const Cv: StandardCv = {
  intro: CvIntro,
  about: CvAbout,
  skills: CvSkills,
  work: CvWork,
  education: CvEducation,
  projects: CvProjects,
  certifications: CvCertifications
};
