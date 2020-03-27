import {MessageKindModel} from '../../entities/message/message-kind.model';
import {AttachmentModel} from '../../entities/message/attachment.model';

export interface CreateMessageRequestModel {
  content: string;
  kind: MessageKindModel;
  attachments: AttachmentModel[];
  xmppId: string;
  xmppFrom: string;
}
