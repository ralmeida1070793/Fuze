export interface MessageModel {
  authorId: string;
  authorName: string;
  avatarUrl: string;
  fromApplication: boolean;
  content: string;
  editedAt: Date;
  id: string;
  kind: string;
  postedAt: Date;
  clientMessageId: string;
}
