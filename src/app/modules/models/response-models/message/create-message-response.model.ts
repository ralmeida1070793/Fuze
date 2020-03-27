import {MessageModel} from '../../entities/message/message.model';

export interface CreateMessageResponseModel {
  version: string;
  msg: string;
  status:	number;
  data: MessageModel;
  error: {
    code: number;
    domain: string;
    reason: string;
    message: string;
  };
}
