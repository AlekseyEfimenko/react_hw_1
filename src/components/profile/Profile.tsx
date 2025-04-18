import React from "react";
import css from './Profile.module.css';

type Props = {
  name: string;
  tag: string;
  location: string;
  image: string;
  stats: {
    followers: number;
    views: number;
    likes: number;
  }
}

const Profile: React.FC<Props> = (props: Props) => {
  const { name, tag, location, image, stats } = props;
  const { followers, views, likes } = stats;

  return (
    <div className={css.profile}>
      <div>
        <img
          src={image}
          alt="User avatar"
          className={css.profileImage}
        />
        <p className={css.profileName}>{name}</p>
        <p>@{tag}</p>
        <p>{location}</p>
      </div>

      <ul className={css.info}>
        <li>
          <span className={css.infoName}>Followers</span>
          <span className={css.infoValue}>{followers}</span>
        </li>
        <li>
          <span className={css.infoName}>Views</span>
          <span className={css.infoValue}>{views}</span>
        </li>
        <li>
          <span className={css.infoName}>Likes</span>
          <span className={css.infoValue}>{likes}</span>
        </li>
      </ul>
    </div>
  )
}

export default Profile;