import React, {Component} from 'react';
import {connect} from 'react-redux';
import {
  searchRequest,
  searchSuccess,
  searchFailure
} from '../actions';
import styled from 'styled-components';
import {getSearch} from '../reducers/search';

const SearchContainer = styled.div`
  padding-bottom: 20px;
`;

const SearchResultContainer = styled.div`
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-flex-direction: row;
  -ms-flex-direction: row;
  flex-direction: row;
  -webkit-flex-wrap: wrap;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
`;

const SerialContainer = styled.div`
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-flex-direction: column;
  -ms-flex-direction: column;
  flex-direction: column;
  max-width: 300px;
`;

class Search extends Component { 

  state = {
    value: ''
  };

  handleChange = (e) => {
    const {target:{value}} = e;
    this.setState({
      value
    });
  };

  clickHandle = () => {
    const {fetchRequest} = this.props;
    fetchRequest(this.state.value);
  };

  render() {
    const {value} = this.state;
    const {search: {serials, isFetching}} = this.props;
    return (
      <div>
        <SearchContainer>
          <input value={value} placeholder='Название сериала' onChange={this.handleChange}/><button onClick={this.clickHandle}>Найти</button>
          { isFetching && <div>Выполняется поиск...</div> }
        </SearchContainer>
        <SearchResultContainer className='t-search-result'>
          {
            serials.map((item, index) => {
              return (
                <SerialContainer key={item.id} className='t-preview'>
                  <div>
                    <a className='t-link' href={`/shows/${item.id}`}>
                      <h3>{item.name}</h3>
                    </a>
                    { item.image && <img src={item.image.medium} alt={item.name}/> }
                  </div>
                  <div dangerouslySetInnerHTML={{__html: item.summary}} />
                </SerialContainer>
              );
            })
          }
        </SearchResultContainer>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  search: getSearch(state)
});

const mapDispatchToProps = dispatch =>  ({
  fetchRequest: (payload) => dispatch(searchRequest(payload)),
  fetchSuccess: (payload) => dispatch(searchSuccess(payload)),
  fetchFailure: (payload) => dispatch(searchFailure(payload))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Search);
