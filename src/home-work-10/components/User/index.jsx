import React from 'react';

import styles from './User.module.scss';

export default function User({ userInfo, visibleUser }) {
  return (
    <div className={!visibleUser ? `${styles.hidden} app-user` : 'app-user'}>
      <div className="app-user_info">
        <div className="app-user_image">
          <img src={userInfo.avatar_url} alt={'avatar'} />
        </div>
        <div className="app-user_data">
          <h1 className="app-user_name">
            {userInfo.name}
            <span>{userInfo.login}</span>
          </h1>
          <p className="app-user_about">{userInfo.bio}</p>
        </div>
      </div>
      <ul className="app-user_stats">
        <li className="app-user_stats-item">
          Репозитории
          <span>{userInfo.public_repos}</span>
        </li>
        <li className="app-user_stats-item">
          Подписчиков
          <span>{userInfo.followers}</span>
        </li>
        <li className="app-user_stats-item">
          Подписок
          <span>{userInfo.following}</span>
        </li>
      </ul>
      <ul className="app-user_location">
        <li className="app-user_location-item">{userInfo.location}</li>
        <li className="app-user_location-item">
          <a href={userInfo.blog}>{userInfo.blog}</a>
        </li>
      </ul>
    </div>
  );
}
