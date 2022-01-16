import React from 'react';

export default function Search({
  valueSearch,
  handleInputSearch,
  handleClickSearch,
  loadingSearch,
}) {
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
        onClick={handleClickSearch}
        type="submit"
        className="app-form_btn">
        Найти
      </button>
    </form>
  );
}
