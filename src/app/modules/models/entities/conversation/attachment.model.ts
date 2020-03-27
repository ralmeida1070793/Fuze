import {MeetingModel} from './meeting.model.js';

export interface AttachmentModel {
  id: string;
  kind: string;
  meeting: MeetingModel;
}
