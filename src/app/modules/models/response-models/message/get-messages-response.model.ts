import {MessageModel} from '../../entities/message/message.model';

export interface GetMessagesResponseModel {
  version: string;
  msg; string;
  status: number;
  data: {
    pagination: {
      limit: number;
      nextCursor: string;
    };
    restore: {
      ids: string[]
    };
    results: MessageModel[];
  };
}
