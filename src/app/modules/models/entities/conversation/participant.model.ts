import {StateModel} from './state.model';

export interface ParticipantModel {
  attendeeId: string;
  entityId: string;
  states: StateModel;
  tenantKey: string;
}
