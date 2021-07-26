import React, { Component } from 'react';
import { toast, Zoom } from 'react-toastify';
// import PropTypes from 'prop-types';

class Searchbar extends Component {
  state = {
    searchQuery: '',
  };

  handleChange = e => {
    const { value } = e.target;
    this.setState({ searchQuery: value.toLowerCase() });
  };

  handleSubmit = e => {
    e.preventDefault();

    const { searchQuery } = this.state;

    if (searchQuery.trim() === '') {
      return toast.warn('Enter your request', {
        position: 'top-center',
        transition: Zoom,
        style: { top: 60, textAlign: 'center' },
      });
    }
  };

  reset = () => {
    this.setState({ searchQuery: '' });
  };

  render() {
    const { searchQuery } = this.state;

    return (
      <header className="Searchbar">
        <form className="SearchForm" onSubmit={this.handleSubmit}>
          <input
            className="SearchForm-input"
            type="text"
            value={searchQuery}
            onChange={this.handleChange}
            // autocomplete="off"
            // autofocus
            placeholder="Search images and photos"
          />

          <button type="submit" className="SearchForm-button">
            <span className="SearchForm-button-label">Search</span>
          </button>
        </form>
      </header>
    );
  }

  //   static propTypes = {
  //     onSubmit: PropTypes.func.isRequired,
  //   };
}

export default Searchbar;
