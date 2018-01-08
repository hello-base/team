import React from 'react';
import PropTypes from 'prop-types';
import { OrderedMap } from 'immutable';
import styled from 'styled-components';

import { Header } from 'components/Episode';
import { Display } from 'components/News';

const propTypes = {
  date: PropTypes.string,
  news: PropTypes.instanceOf(OrderedMap),
  match: PropTypes.shape({
    params: PropTypes.object
  }).isRequired
};

const defaultProps = {
  date: '',
  news: OrderedMap()
};

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(20, 80px);
  grid-template-rows: repeat(15, 60px);
`;

function Layout(props) {
  const { episodeId } = props.match.params;
  return (
    <Container>
      <Header episode={episodeId} date={props.date} />
      <Display news={props.news} />
    </Container>
  );
}

Layout.propTypes = propTypes;
Layout.defaultProps = defaultProps;

export default Layout;
