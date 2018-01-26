import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import styled from 'styled-components';

import { casterFetch } from 'actions/casters';
import { cornerFetch } from 'actions/corners';
import { episodeFetch } from 'actions/episodes';
import { newsFetch } from 'actions/news';
import { viewingsFetch } from 'actions/viewings';
import * as selectors from 'selectors';

import Error from './Error';
import Layout from './Layout';

const propTypes = {
  isFetching: PropTypes.bool.isRequired,
  error: PropTypes.bool.isRequired,
  match: PropTypes.shape({
    params: PropTypes.object
  }).isRequired,
  casterRequest: PropTypes.func.isRequired,
  cornerRequest: PropTypes.func.isRequired,
  episodeRequest: PropTypes.func.isRequired,
  newsRequest: PropTypes.func.isRequired,
  viewingsRequest: PropTypes.func.isRequired
};

const Wrapper = styled.div`
  display: grid;

  position: absolute;
  overflow: hidden;
  width: 1600px;
  height: 900px;

  background: linear-gradient(#020e13, #041b25);
`;

class Detail extends Component {
  componentDidMount() {
    const { episodeId } = this.props.match.params;
    this.props.casterRequest();
    this.props.cornerRequest();
    this.props.episodeRequest(episodeId);
    this.props.newsRequest(episodeId);
    this.props.viewingsRequest(episodeId);
  }

  render() {
    const { error, isFetching } = this.props;
    return (
      !isFetching && (
        <Wrapper>
          {error ? <Error {...this.props} /> : <Layout {...this.props} />}
        </Wrapper>
      )
    );
  }
}

Detail.propTypes = propTypes;

function mapStateToProps(state) {
  return {
    isFetching: selectors.isEpisodeFetching(state),
    error: selectors.errorFetchingEpisode(state),
    birthdays: selectors.getBirthdays(state),
    casters: selectors.getCasters(state),
    corners: selectors.getCorners(state),
    date: selectors.getEpisodeDate(state),
    news: selectors.getEpisodeNewsByCategory(state),
    viewings: selectors.getEpisodeViewings(state)
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      casterRequest: () => dispatch(casterFetch.request()),
      cornerRequest: () => dispatch(cornerFetch.request()),
      episodeRequest: id => dispatch(episodeFetch.request(id)),
      newsRequest: id => dispatch(newsFetch.request(id)),
      viewingsRequest: id => dispatch(viewingsFetch.request(id))
    },
    dispatch
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(Detail);
