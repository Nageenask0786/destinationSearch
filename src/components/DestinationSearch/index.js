import {Component} from 'react'

import './index.css'

import DestinationItem from '../DestinationItem'

class DestinationSearch extends Component {
  state = {searchInput: ''}

  onChangeSearchInput = event => {
    this.setState({
      searchInput: event.target.value,
    })
  }

  render() {
    const {searchInput} = this.state
    const {destinationsList} = this.props

    const SearchResults = destinationsList.filter(each =>
      each.name.toLowerCase().includes(searchInput.toLowerCase()),
    )

    return (
      <div className="main-container">
        <div className="images-container">
          <h1 className="heading">Destination Search</h1>
          <input
            type="search"
            value={searchInput}
            onChange={this.onChangeSearchInput}
          />
          <img
            src="https://assets.ccbp.in/frontend/react-js/destinations-search-icon-img.png"
            alt="search icon"
          />
          <ul className="ul-container">
            {SearchResults.map(each => (
              <DestinationItem key={each.id} destinationDetails={each} />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default DestinationSearch
