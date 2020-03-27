import {MeetingEntityStatusModel} from './meeting-entity-status.model';
import {ParticipantModel} from './participant.model';

export interface MeetingModel {
  creationTime: Date;
  endTime: Date;
  meetingId: string;
  instanceId: string;
  participants: ParticipantModel[];
  starterId: string;
  starterAuthSessionId: string;
  participantCount: number;
  participantJoinedCount: number;
  participantInMeetingCount: 3;
  meetingStatus: string;
  entityStatus: MeetingEntityStatusModel;
  startTime: Date;
  title: string;
}
