import React, {Component} from 'react';
import {connect} from 'react-redux';
import {
  showsRequest,
  showsSuccess,
  showsFailure
} from '../actions';
import styled from 'styled-components';
import {getShows} from '../reducers/shows';

const PersonsContainer = styled.div`
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

class ShowPage extends Component {
  
  constructor(props) {
    super(props);
    const {match: {params: { id }}} = props;
    this.props.fetchRequest(id);
  }

  render() {
    const {shows: { isFetching, response }, match: {params: { id }}} = this.props;
    if (isFetching) return <div>Выполняется поиск...</div>;
    return (
      <div>
        <p>{response.name}</p>
        { response.image && <img src={response.image.medium} alt={response.name} /> }
        <div dangerouslySetInnerHTML={{__html: response.summary}} />
        <PersonsContainer>
          {
            response._embedded && response._embedded.cast && response._embedded.cast.map((item, index) => {
              console.log(item);
              return (
                <div key={item.character.id} className='t-person'>
                  <p>{item.person.name}</p>
                  { item.person.image && <img src={item.person.image.medium} alt={item.person.name} /> }
                </div>
              );
            })
          }
        </PersonsContainer>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  shows: getShows(state)
});

const mapDispatchToProps = dispatch =>  ({
  fetchRequest: (payload) => dispatch(showsRequest(payload)),
  fetchSuccess: (payload) => dispatch(showsSuccess(payload)),
  fetchFailure: (payload) => dispatch(showsFailure(payload))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ShowPage);
