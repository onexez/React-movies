import React, { useState } from 'react';

const Search = (props) => {
  const { searchMovies = Function.prototype } = props;

  const [search, setSearch] = useState('');
  const [type, setType] = useState('all');

  const hendleKey = (e) => {
    if (e.key === 'Enter') {
      searchMovies(search, type);
    }
  };
  const handleFilter = (e) => {
    setType(e.target.dataset.type);
    searchMovies(search, e.target.dataset.type);
  };

  return (
    <div className="row">
      <div className="input-field ">
        <input
          placeholder="Search"
          id="email_inline"
          type="Search"
          className="validate"
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
          }}
          onKeyDown={hendleKey}
        ></input>
        <button
          className="btn search-btn"
          onClick={() => searchMovies(search, type)}
        >
          Search
        </button>
        <div>
          <label>
            <input
              name="group1"
              type="radio"
              data-type="all"
              onChange={handleFilter}
              checked={type === 'all'}
            />
            <span>All</span>
          </label>
          <label>
            <input
              name="group1"
              type="radio"
              data-type="movie"
              onChange={handleFilter}
              checked={type === 'movie'}
            />
            <span>Movies only</span>
          </label>
          <label>
            <input
              name="group1"
              type="radio"
              data-type="series"
              onChange={handleFilter}
              checked={type === 'series'}
            />
            <span>Series only</span>
          </label>
        </div>
      </div>
    </div>
  );
};

export { Search };
