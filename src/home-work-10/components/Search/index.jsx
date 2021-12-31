import React from 'react';

export default function Search({ valueSearch, handleInputSearch, handleSearch, loadingSearch }) {
  return (
    <form className="app-form" style={{ marginTop: '5px' }}>
      <input
        onChange={(e) => handleInputSearch(e.target.value)}
        type="text"
        className="app-input"
        placeholder="Укажите GitHub-аккаунт"
        value={valueSearch}
      />
      <button
        disabled={loadingSearch ? 'disabled' : false}
        onClick={(event) => handleSearch(event)}
        className="app-form_btn">
        Найти
      </button>
    </form>
  );
}
