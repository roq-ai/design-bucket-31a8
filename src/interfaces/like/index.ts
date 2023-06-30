import { UserInterface } from 'interfaces/user';
import { DesignInterface } from 'interfaces/design';
import { GetQueryInterface } from 'interfaces';

export interface LikeInterface {
  id?: string;
  user_id: string;
  design_id: string;
  created_at?: any;
  updated_at?: any;

  user?: UserInterface;
  design?: DesignInterface;
  _count?: {};
}

export interface LikeGetQueryInterface extends GetQueryInterface {
  id?: string;
  user_id?: string;
  design_id?: string;
}
