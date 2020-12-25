import { Model } from '../models/Model';
import { User, UserProps } from '../models/User';
import { CollectionView } from './CollectionView';
import { UserEdit } from './UserEdit';
import { UserShow } from './UserShow';

export class UserList extends CollectionView<User, UserProps> {
  renderItem(model: User, itemParent: Element) {
    new UserEdit(itemParent, model).render();
  }
}
