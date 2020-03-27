import {ConversationKindModel} from '../../entities/conversation/conversation-kind.model';

export interface CreateConversationRequestModel {
  kind: ConversationKindModel;
  name: string;
  invites: string[];
}
