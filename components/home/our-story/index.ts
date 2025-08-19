import { OurStory as OurStoryHOC } from './OurStory';
import { TimelineEvent } from './TimelineEvent';

const OurStory = Object.assign( OurStoryHOC, {
  timelineEvent: TimelineEvent,
})

export default OurStory;