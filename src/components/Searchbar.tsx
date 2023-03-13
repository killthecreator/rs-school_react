import React, { Component } from 'react';

import searchIcon from './../assets/search-icon.svg';

class SearchBar extends Component {
  state = {
    inputValue: localStorage.getItem('searchValue') ? localStorage.getItem('searchValue') : '',
  };

  componentWillUnmount() {
    localStorage.setItem('searchValue', this.state.inputValue as string);
  }

  saveInputValue(e: React.SyntheticEvent) {
    const input = e.target as HTMLInputElement;
    this.setState({
      inputValue: input.value,
    });
  }

  render() {
    return (
      <form action="#" className="search" aria-label="form">
        <button className="search__btn" type="submit">
          <img src={searchIcon} alt="search-icon" className="search__icon" />
        </button>

        <input
          type="search"
          className="search__input"
          aria-label="input"
          value={this.state.inputValue as string}
          onInput={this.saveInputValue.bind(this)}
          onKeyDown={this.saveInputValue.bind(this)}
        />
      </form>
    );
  }
}

export default SearchBar;
