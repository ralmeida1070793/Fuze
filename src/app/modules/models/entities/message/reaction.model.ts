import {EmojisModel} from './emojis.model';

export interface ReactionModel {
  reaction: EmojisModel;
  entitys: {
    entityId: string,
    tenantKey: string
  }[];
}
