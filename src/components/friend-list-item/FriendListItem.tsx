import React from "react";
import { Friend } from "../../types";
import css from './FriendListItem.module.css';
import clsx from "clsx";

const FriendListItem: React.FC<Friend> = (props: Friend) => {
  const { avatar, name, isOnline } = props;

  return (
    <div>
      <img src={avatar} alt="Avatar" width="48" />
      <p>{name}</p>
      <p className={clsx(isOnline ? css.online : css.offline)} >
        {isOnline ? ('Online') : ('Offline')}
      </p>
    </div>
  )
}

export default FriendListItem;