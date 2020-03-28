import {ParticipantModel} from './participant.model';

export interface ConversationModel {
    bookmarked: boolean;
    createdAt: Date;
    creatorId: string;
    deactivated: boolean;
    hidden: boolean;
    id: number;
    kind: string,
    lastActiveAt: Date;
    mutedUntil: Date;
    name: string;
    participants: ParticipantModel[];
    readAt: Date;
    tenantKey: string;
}
