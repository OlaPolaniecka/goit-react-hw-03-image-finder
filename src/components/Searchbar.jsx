import { useState } from 'react';
import css from './styles.module.css';
import PropTypes from 'prop-types';

const Searchbar = ({ onSubmit }) => {
  const [query, setQuery] = useState('');

  const handleChangeQuery = event => {
    setQuery(event.target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    if (query === '') {
      return;
    }
    onSubmit(query);
    setQuery('');
  };

  return (
    <header className={css.searchbar}>
      <form onSubmit={handleSubmit} class="form">
        <button type="submit" class="button">
          <span class="button-label">Search</span>
        </button>

        <input
          class="input"
          type="text"
          autocomplete="off"
          autofocus
          value={query}
          onChange={handleChangeQuery}
          placeholder="Search images and photos"
        />
      </form>
    </header>
  );
};

Searchbar.propTypes = {
  onSubmit: PropTypes.func,
};
export default Searchbar;
