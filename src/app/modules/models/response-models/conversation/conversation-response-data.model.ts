import {ConversationModel} from '../../entities/conversation/conversation.model';

export interface ConversationResponseDataModel {
  restore: {
    ids: string[]
  };
  results: ConversationModel[];
}
