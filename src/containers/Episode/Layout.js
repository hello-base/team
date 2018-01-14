import React from 'react';
import PropTypes from 'prop-types';
import { OrderedMap } from 'immutable';
import styled from 'styled-components';
import Particles from 'react-particles-js';

import { Header } from 'components/Episode';
import { Display as NewsDisplay } from 'components/News';
import configuration from 'helpers/particles';

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
  grid-template-rows: 1fr;

  box-shadow: inset 0 0 0 3px #09445d, inset 0 0 0 6px #062938;
`;

const StyledHeader = styled(Header)`
  z-index: 100;
`;

const StyledNewsDisplay = styled(NewsDisplay)`
  z-index: 100;
`;

const StyledParticles = styled(Particles)`
  position: absolute;
  width: 1600px;
  height: 900px;
  z-index: 1;
`;

function Layout(props) {
  const { episodeId } = props.match.params;
  return (
    <Container>
      <StyledHeader episode={episodeId} date={props.date} />
      <StyledNewsDisplay news={props.news} />
      <StyledParticles params={configuration} />
    </Container>
  );
}

Layout.propTypes = propTypes;
Layout.defaultProps = defaultProps;

export default Layout;
