import React from 'react';
import PropTypes from 'prop-types';
import { List } from 'immutable';
import moment from 'moment';
import uniqid from 'uniqid';

import styled from 'styled-components';

const propTypes = {
  viewings: PropTypes.instanceOf(List).isRequired
};

const Wrapper = styled.div`
  grid-column: span 3;
  margin: 30px;

  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 30px;
  overflow: hidden;

  color: #fff;
`;

const Display = props => (
  <Wrapper>
    {props.viewings.map(viewing => {
      console.log(viewing);
    })}
  </Wrapper>
);

Display.propTypes = propTypes;

export default Display;
