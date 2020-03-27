import {ConversationResponseDataModel} from './conversation-response-data.model';

export interface GetConversationsResponseModel {
  version: string;
  msg: string;
  status: number;
  data: ConversationResponseDataModel;
  error: {
    code: number;
    domain: string;
    reason: string;
    message: string;
  };
}
