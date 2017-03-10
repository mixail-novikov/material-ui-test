import React, { Component, PropTypes } from 'react';
import TextField from 'material-ui/TextField';
import { List, ListItem } from 'material-ui/List';

class WebsiteSearch extends Component {
  static propTypes = {
    keywordTag: PropTypes.string,
    sitesList: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string.isRequired,
        url: PropTypes.string.isRequired,
      }).isRequired,
    ).isRequired,
  };

  static defaultProps = {
    keywordTag: '{/keyword}',
  };

  state = {
    searchString: '',
  };

  getSiteUrl(template) {
    return template.replace(this.props.keywordTag, encodeURI(this.state.searchString));
  }

  handleInputChange = (_, value) => {
    this.setState({
      searchString: value,
    });
  };

  renderSearchKeyword() {
    if (this.state.searchString) {
      return (
        <div>
          Search for <strong>{this.state.searchString}</strong> with:
        </div>
      );
    }

    return null;
  }

  renderSearchResults() {
    if (this.state.searchString) {
      return (
        <List>
          {this.props.sitesList.map((site, index) => (
            <a key={index} href={this.getSiteUrl(site.url)} target="_blank" rel="noopener noreferrer">
              <ListItem>{site.name}</ListItem>
            </a>
          ))}
        </List>
      );
    }

    return null;
  }

  render() {
    return (
      <div>
        <TextField
          hintText="Search"
          onChange={this.handleInputChange}
        />
        {this.renderSearchKeyword()}
        {this.renderSearchResults()}
      </div>
    );
  }
}

export default WebsiteSearch;
