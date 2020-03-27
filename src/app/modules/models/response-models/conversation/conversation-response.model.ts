import {ConversationModel} from '../../entities/conversation/conversation.model';

export interface ConversationResponseModel {
  version: string;
  msg: string;
  status:	number;
  data: ConversationModel;
  error: {
    code: number;
    domain: string;
    reason: string;
    message: string;
  };
}
