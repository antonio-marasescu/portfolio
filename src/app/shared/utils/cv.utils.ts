import { StandardCv } from '../types/cv/cv.types';
import { CleanCv } from '../types/cv/llm/cv-llm.types';

export function transformCvToClean(cv: StandardCv): CleanCv {
  return {
    about: {
      content: cv.about.content,
      topSkills: cv.about.topSkills.map(skill => skill.label)
    },
    skills: {
      categories: cv.skills.categories.map(category => ({
        label: category.label,
        skills: category.skills.map(skill => skill.label)
      }))
    },
    work: {
      history: cv.work.history.map(company => ({
        title: company.title,
        timeline: company.timeline.map(position => ({
          title: position.title,
          description: position.description,
          period: position.period,
          achievements: position.achievements
        }))
      }))
    },
    education: {
      history: cv.education.history.map(education => ({
        title: education.title,
        description: education.description,
        period: education.period
      }))
    },
    projects: {
      projects: cv.projects.projects.map(project => ({
        title: project.title,
        period: project.period,
        content: project.content,
        category: project.category,
        tags: project.tags
      }))
    },
    certifications: {
      certifications: cv.certifications.certifications.map(cert => ({
        name: cert.name
      }))
    }
  };
}
