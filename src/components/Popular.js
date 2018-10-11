import React from 'react';
import PropTypes from 'prop-types';
import api from '../utils/api';

function SelectLanguage (props) {
    var languages = ['All', 'JavaScript', 'Python', 'Ruby', 'Java', 'C++','CSS'];
    return (
      <ul className='languages'>
        {languages.map(function (lang) {
          return (
            <li
              style={lang === props.selectedLanguage ? {color: '#d0021b'} : null}
              onClick={props.onSelect.bind(null, lang)}
              key={lang}>
                {lang}
            </li>
          )
        })}
      </ul>
    )
  }
  
  SelectLanguage.propTypes = {
    selectedLanguage: PropTypes.string.isRequired,
    onSelect: PropTypes.func.isRequired,
  };
  
  class Popular extends React.Component {
    constructor(props) {
      super();
      this.state = {
        selectedLanguage: 'All',
        repos: null,
      };
  
      this.updateLanguage = this.updateLanguage.bind(this);
    }
    componentDidMount() {
      this.updateLanguage(this.state.selectedLanguage);
    }
    updateLanguage(lang) {
      this.setState(function () {
        return {
          selectedLanguage: lang,
          repos: null
        }
      });

      api.fetchPopularRepos(lang)
        .then(function (repos) {
          this.setState(function () {
            return {
              repos: repos
            }
          })
        }.bind(this));
    }
    render() {
      return (
        <div>
          <SelectLanguage
            selectedLanguage={this.state.selectedLanguage}
            onSelect={this.updateLanguage} />
        </div>
      )
    }
  }
  
  export default Popular;