import {AttachmentModel} from './attachment.model';
import {ConversationKindModel} from './conversation-kind.model';
import {ConversationUnreadModel} from './conversation-unread.model';
import {ParticipantModel} from './participant.model';

export interface ConversationModel {
    attachments: AttachmentModel[];
    bookmarked: boolean;
    createdAt: Date;
    creatorId: string;
    deactivated: boolean;
    hidden: boolean;
    id: string;
    kind: ConversationKindModel,
    lastActiveAt: Date;
    mutedUntil: Date;
    name: string;
    participants: ParticipantModel[];
    readAt: Date;
    tenantKey: string;
    unread: ConversationUnreadModel;
}
