import React from "react";
import FriendListItem from "../friend-list-item/FriendListItem";
import { Friends } from "../../types";
import css from './FriendList.module.css';

const FriendList: React.FC<Friends> = (props: Friends) => {
  const { friends } = props;
  return (
    <ul className={css.friends}>
      {friends.map(friend => {
        return (
          <li key={friend.id} className={css.friendsItem}>
            <FriendListItem {...friend} />
          </li>
        )
      })}
    </ul>
  )
}

export default FriendList;