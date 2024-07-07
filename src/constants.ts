import resumeFile from './assets/resume.pdf';

export const EXTERNAL_LINKS = {
  RESUME: resumeFile,
  LINKEDIN: 'https://www.linkedin.com/in/ricamaeaverion/',
  GITHUB: 'https://github.com/Rica02',
  EMAIL: 'mailto:ricamaeaverion22@gmail.com',
};

export const ANALYTICS_EVENTS = {
  VIEWED_RESUME: 'Viewed_Resume',
  VIEWED_LINKEDIN: 'Viewed_Linkedin',
  VIEWED_GITHUB: 'Viewed_Github',
  VIEWED_EMAIL: 'Viewed_Email',
  OPENED_PROJECT: 'Opened_Project',
  CONTACT_FORM_SUCCESS: 'Contact_Form_Success',
  CONTACT_FORM_ERROR: 'Contact_Form_Error',
};

export const LINK_EVENT_MAP = {
  [EXTERNAL_LINKS.RESUME]: ANALYTICS_EVENTS.VIEWED_RESUME,
  [EXTERNAL_LINKS.LINKEDIN]: ANALYTICS_EVENTS.VIEWED_LINKEDIN,
  [EXTERNAL_LINKS.GITHUB]: ANALYTICS_EVENTS.VIEWED_GITHUB,
  [EXTERNAL_LINKS.EMAIL]: ANALYTICS_EVENTS.VIEWED_EMAIL,
};
