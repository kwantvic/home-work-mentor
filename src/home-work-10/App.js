import axios from 'axios';
import React from 'react';

import Search from './components/Search/index';
import User from './components/User/index';
import CustomizedProgressBars from './components/CustomizedProgressBars';

const emptyUser = {
  login: '',
  avatar_url: '',
  url: '',
  html_url: '',
  name: '',
  blog: '',
  location: '',
  bio: '',
  public_repos: '',
  followers: '',
  following: '',
};

export default function App() {
  const [visibleUser, setVisibleUser] = React.useState(false);
  const [loadingSearch, setLoadingSearch] = React.useState(false);
  const [valueSearch, setValueSearch] = React.useState('');
  const [userInfo, setUserInfo] = React.useState(emptyUser);
  const timerRef = React.useRef();

  let locationSearch = window.location.search.slice(7);

  function handleInputSearch(value) {
    setValueSearch(value);
  }

  async function searchUser(value) {
    setLoadingSearch(false);
    setLoadingSearch(true);
    try {
      const { data } = await axios.get(`https://api.github.com/users/${value}`);
      window.history.pushState(null, null, `/?login=${valueSearch}`);
      setUserInfo(data);
    } catch (err) {
      setUserInfo(emptyUser);
      window.location.href = window.location.origin;
      alert(`❌ Юзер "${value}" не найден❗️`);
    }
    setValueSearch('');
    setLoadingSearch(false);
    setVisibleUser(true);
  }

  function handleClickSearch(event) {
    event.preventDefault();
    searchUser(valueSearch);
  }

  // React.useEffect(() => {
  //   if (locationSearch.trim() && visibleUser) {
  //     setValueSearch(locationSearch);
  //     searchUser(locationSearch);
  //   } else {
  //     return null;
  //   }
  // }, [locationSearch]);

  React.useEffect(() => {
    if (valueSearch.trim()) {
      clearInterval(timerRef.current);
      timerRef.current = setTimeout(() => {
        searchUser(valueSearch);
      }, 1000);
    } else {
      window.history.replaceState(null, null, `/?login=`);
    }
  }, [valueSearch]);

  return (
    <div id="app">
      <div className="app-container">
        <Search
          valueSearch={valueSearch}
          handleInputSearch={handleInputSearch}
          handleClickSearch={handleClickSearch}
          loadingSearch={loadingSearch}
        />
        {loadingSearch && (
          <center>
            <CustomizedProgressBars />
          </center>
        )}
        {visibleUser && <User userInfo={userInfo} />}
      </div>
    </div>
  );
}
