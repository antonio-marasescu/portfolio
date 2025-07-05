import { Injectable } from '@angular/core';
import { Cv } from '../config/constants/cv/cv.constants';
import {
  CleanCertification,
  CleanCv,
  CleanEducation,
  CleanProject,
  CleanSkillCategory,
  CleanWorkCompany,
  CleanWorkPosition
} from '../types/cv/llm/cv-llm.types';
import { transformCvToClean } from '../utils/cv.utils';

@Injectable({ providedIn: 'root' })
export class CvPromptService {
  public retrieveCleanCv(format: 'text' | 'xml'): string {
    const cleanCv = transformCvToClean(Cv);
    return this.formatCvAsString(cleanCv, format);
  }

  public retrieveReviewPrompt(format: 'text' | 'xml' = 'xml'): string {
    const cleanCv = transformCvToClean(Cv);
    const formattedCv = this.formatCvAsString(cleanCv, format);
    let reviewPrompt = `Please review this software developer's CV:\n`;
    reviewPrompt += format === 'text' ? `**CV:**` : `<cv>`;
    reviewPrompt += '\n' + formattedCv + '\n';
    reviewPrompt += format === 'text' ? `` : `</cv>`;
    reviewPrompt +=
      '\nPlease provide specific and concise feedback, that only focuses on the content and experience. Do not offer information about areas to strengthen. \n';

    return reviewPrompt;
  }

  public retrieveSummaryPrompt(format: 'text' | 'xml' = 'xml'): string {
    const cleanCv = transformCvToClean(Cv);
    const formattedCv = this.formatCvAsString(cleanCv, format);
    let reviewPrompt = `Please summarize the following software developer's CV:\n`;
    reviewPrompt += format === 'text' ? `**CV:**` : `<cv>`;
    reviewPrompt += '\n' + formattedCv + '\n';
    reviewPrompt += format === 'text' ? `` : `</cv>`;
    reviewPrompt += '\nPlease be specific and concise.\n';

    return reviewPrompt;
  }

  private formatCvAsString(cleanCv: CleanCv, format: 'text' | 'xml'): string {
    let output = '';
    // About section
    output += format === 'text' ? '**About:**\n' : '<about>\n';
    output += `${cleanCv.about.content}\n`;
    output += `Top Skills: ${cleanCv.about.topSkills.join(', ')}\n`;
    output += format === 'text' ? '' : '</about>';
    output += '\n\n';

    // Skills section
    output += format === 'text' ? '**Skills:**\n' : `<skills>\n`;
    cleanCv.skills.categories.forEach((category: CleanSkillCategory) => {
      output += `${category.label}: ${category.skills.join(', ')}\n`;
    });
    output += format === 'text' ? '' : `</skills>`;
    output += '\n\n';

    // Work experience
    output += format === 'text' ? '**Work Experience:**\n' : `<work-experience>\n`;
    cleanCv.work.history.forEach((company: CleanWorkCompany) => {
      output += `${company.title}:\n`;
      company.timeline.forEach((position: CleanWorkPosition, index) => {
        output += `  ${position.title} (${position.period})\n`;
        output += `  ${position.description}\n`;
        if (position.achievements.length > 0) {
          output += '  Key Achievements:\n';
          position.achievements.forEach((achievement: string) => {
            output += `    • ${achievement}\n`;
          });
        }
        if (index !== company.timeline.length - 1) {
          output += '\n';
        }
      });
    });
    output += format === 'text' ? '' : '</work-experience>';
    output += '\n\n';

    // Education
    output += format === 'text' ? '**Education:**\n' : `<education>\n`;
    cleanCv.education.history.forEach((education: CleanEducation) => {
      output += `${education.title} - ${education.description} (${education.period})\n`;
    });
    output += format === 'text' ? '' : `</education>`;
    output += '\n\n';

    // Projects
    output += format === 'text' ? '**Projects:**\n' : '<projects>\n';
    cleanCv.projects.projects.forEach((project: CleanProject) => {
      output += `${project.title} (${project.period}) - ${project.category}\n`;
      output += `${project.content}\n`;
      output += `Technologies: ${project.tags.join(', ')}\n`;
    });
    output += format === 'text' ? '' : '</projects>';
    output += '\n\n';

    // Certifications
    output += format === 'text' ? '**Certifications:**\n' : '<certifications>\n';
    cleanCv.certifications.certifications.forEach((cert: CleanCertification) => {
      output += `${cert.name}\n`;
    });
    output += format === 'text' ? '\n' : '</certifications>\n';

    return output;
  }
}
