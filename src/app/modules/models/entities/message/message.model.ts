import {MessageKindModel} from './message-kind.model';
import {ReactionModel} from './reaction.model';
import {AttachmentModel} from './attachment.model';

export interface MessageModel {
  authorId: string;
  authorName: string;
  avatarUrl: string;
  fromApplication: boolean;
  content: string;
  editedAt: Date;
  id: string;
  kind: MessageKindModel;
  postedAt: Date;
  clientMessageId: string;
  reactions: ReactionModel[];
  attachments: AttachmentModel[];
}
