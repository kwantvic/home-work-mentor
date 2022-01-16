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
  const isMountedRef = React.useRef(false);

  let locationSearch = window.location.search.slice(7);

  function handleInputSearch(value) {
    setValueSearch(value);
  }

  async function searchUser(value) {
    setLoadingSearch(true);
    try {
      const { data } = await axios.get(`https://api.github.com/users/${value}`);
      window.history.pushState(null, null, `/?login=${value}`);
      setUserInfo(data);
      setVisibleUser(true);
    } catch (err) {
      window.history.pushState(null, null, `/`);
      setUserInfo(emptyUser);
      setValueSearch('');
      alert(`❌ Юзер "${value}" не найден❗️`);
      setVisibleUser(false);
    }
    setLoadingSearch(false);
  }

  function handleClickSearch(event) {
    event.preventDefault();
    searchUser(valueSearch);
  }

  // React.useEffect(() => {
  //   if (locationSearch.trim()) {
  //     setValueSearch(locationSearch);
  //     searchUser(locationSearch);
  //   }
  // }, [locationSearch]);

  React.useEffect(() => {
    if (valueSearch.trim() && isMountedRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = setTimeout(() => {
        searchUser(valueSearch);
      }, 1000);
    }
    isMountedRef.current = true;
  }, [valueSearch]);

  React.useEffect(() => {
    if (!valueSearch) {
      window.history.replaceState(null, null, `/`);
    }
  }, [valueSearch]);

  console.log('🩸myTest🧩RELOAD');

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
