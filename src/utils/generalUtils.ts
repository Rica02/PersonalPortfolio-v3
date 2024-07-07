import ReactGA from 'react-ga4';
import { LINK_EVENT_MAP } from '../constants';

export const openExternalLink = (link: string) => {
  window.open(link, '_blank');

  const analyticsEvent = LINK_EVENT_MAP[link];

  if (analyticsEvent) {
    sendAnalyticsEvent(analyticsEvent);
  }
};

export const sendAnalyticsEvent = (
  eventName: string,
  parameters?: {
    [key: string]: string;
  }
) => {
  if (parameters) {
    // console.log(
    //   `Sending analytics event ${eventName} with parameters ${JSON.stringify(
    //     parameters
    //   )}`
    // );
    ReactGA.event(eventName, parameters);
  } else {
    // console.log(`Sending analytics event ${eventName}`);
    ReactGA.event(eventName);
  }
};
