import React, { Component } from 'react';

import searchIcon from './../../assets/search-icon.svg';

class Searchbar extends Component<SearchbarProps> {
  state = {
    inputValue: localStorage.getItem('searchValue') ? localStorage.getItem('searchValue') : '',
  };

  componentWillUnmount() {
    localStorage.setItem('searchValue', this.state.inputValue as string);
  }

  componentDidMount() {
    this.props.filterCards(this.state.inputValue as string);
  }

  async saveInputValue(e: React.SyntheticEvent) {
    const input = e.target as HTMLInputElement;
    await this.setState({ inputValue: input.value });
  }

  async handleInput(e: React.SyntheticEvent) {
    await this.saveInputValue(e);
    this.props.filterCards(this.state.inputValue as string);
  }

  render() {
    return (
      <>
        <form action="#" className="search" data-testid="form">
          <button className="search__btn" type="submit">
            <img src={searchIcon} alt="search-icon" className="search__icon" />
          </button>

          <input
            type="search"
            className="search__input"
            data-testid="search"
            value={this.state.inputValue as string}
            onInput={this.handleInput.bind(this)}
            onKeyDown={this.handleInput.bind(this)}
          />
        </form>
      </>
    );
  }
}

export default Searchbar;
