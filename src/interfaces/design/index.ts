import { CommentInterface } from 'interfaces/comment';
import { LikeInterface } from 'interfaces/like';
import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface DesignInterface {
  id?: string;
  title: string;
  image: string;
  user_id: string;
  created_at?: any;
  updated_at?: any;
  comment?: CommentInterface[];
  like?: LikeInterface[];
  user?: UserInterface;
  _count?: {
    comment?: number;
    like?: number;
  };
}

export interface DesignGetQueryInterface extends GetQueryInterface {
  id?: string;
  title?: string;
  image?: string;
  user_id?: string;
}
