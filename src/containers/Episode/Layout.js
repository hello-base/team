import React from 'react';
import PropTypes from 'prop-types';
import { List, OrderedMap } from 'immutable';

import styled from 'styled-components';
import Particles from 'react-particles-js';
import { size } from 'polished';

import { Header, Content } from 'components/Episode';
import configuration from 'helpers/particles';

const propTypes = {
  date: PropTypes.string,
  birthdays: PropTypes.instanceOf(List),
  corners: PropTypes.instanceOf(List),
  news: PropTypes.instanceOf(OrderedMap),
  viewings: PropTypes.instanceOf(List),
  match: PropTypes.shape({
    params: PropTypes.object
  }).isRequired
};

const defaultProps = {
  birthdays: List(),
  corners: List(),
  date: '',
  news: OrderedMap(),
  viewings: List()
};

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(20, 80px);
  grid-template-rows: 1fr;

  box-shadow: inset 0 0 0 3px #09445d, inset 0 0 0 6px #062938;
`;

const StyledHeader = styled(Header)`
  z-index: 100;
`;

const StyledContent = styled(Content)`
  z-index: 100;
`;

const StyledParticles = styled(Particles)`
  position: absolute;
  z-index: 1;

  ${size('1600px', '900px')};
`;

function Layout(props) {
  const { episodeId } = props.match.params;
  return (
    <Container>
      <StyledHeader episode={episodeId} date={props.date} />
      <StyledContent {...props} />
      <StyledParticles params={configuration} />
    </Container>
  );
}

Layout.propTypes = propTypes;
Layout.defaultProps = defaultProps;

export default Layout;
