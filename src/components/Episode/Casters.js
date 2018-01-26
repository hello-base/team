import React from 'react';
import PropTypes from 'prop-types';
import { List } from 'immutable';
import moment from 'moment';
import uniqid from 'uniqid';

import styled from 'styled-components';

const propTypes = {
  casters: PropTypes.instanceOf(List).isRequired
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
    {props.casters.map(caster => (
      <div key={caster.get('username')}>{caster.get('nickname')}</div>
    ))}
  </Wrapper>
);

Display.propTypes = propTypes;

export default Display;
