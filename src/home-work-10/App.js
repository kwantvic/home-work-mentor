import axios from 'axios';
import React from 'react';

import Search from './components/Search/index';
import User from './components/User/index';
import CustomizedProgressBars from './components/CustomizedProgressBars';

export default function App() {
  const [visibleUser, setVisibleUser] = React.useState(false);
  const [loadingSearch, setLoadingSearch] = React.useState(false);
  const [valueSearch, setValueSearch] = React.useState('');
  const [userInfo, setUserInfo] = React.useState({
    login: '',
    avatar_url: '',
    url: '',
    html_url: '',
    name: '',
    blog: '',
    location: '',
    bio: '',
    public_repos: '',
    public_gists: '',
    followers: '',
    following: '',
  });

  function handleInputSearch(value) {
    setValueSearch(value);
  }

  async function handleSearch(event) {
    event.preventDefault();
    try {
      setVisibleUser(false);
      setLoadingSearch(true);
      const { data } = await axios.get(`https://api.github.com/users/${valueSearch}`);
      setValueSearch('');
      setUserInfo({
        login: data.login,
        avatar_url: data.avatar_url,
        url: data.url,
        html_url: data.html_url,
        name: data.name,
        blog: data.blog,
        location: data.location,
        bio: data.bio,
        public_repos: data.public_repos,
        public_gists: data.public_gists,
        followers: data.followers,
        following: data.following,
      });
      setLoadingSearch(false);
      setVisibleUser(true);
      // history.push
    } catch (err) {
      setVisibleUser(false);
      setLoadingSearch(false);
      setUserInfo(null);
      alert('❌ Данный юзер не найден, повторите попытку❗️');
      setValueSearch('');
    }
  }

  // useEffect
  // парсинг из урл параметра login
  // если есть, то вызывать handleSearch

  // useEffect
  // useRef (timerRef)
  // clearInterval(timerRef.current)
  // setTimeout
  // deps: [valueSearch]

  return (
    <div id="app">
      <div className="app-container">
        <Search
          valueSearch={valueSearch}
          handleInputSearch={handleInputSearch}
          handleSearch={handleSearch}
          loadingSearch={loadingSearch}
        />
        {loadingSearch ? (
          <center>
            <CustomizedProgressBars />
          </center>
        ) : (
          <User userInfo={userInfo} visibleUser={visibleUser} />
        )}
      </div>
    </div>
  );
}
