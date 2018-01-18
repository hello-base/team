import React from 'react';
import PropTypes from 'prop-types';
import { List } from 'immutable';
import uniqid from 'uniqid';

import styled from 'styled-components';

const propTypes = {
  list: PropTypes.instanceOf(List).isRequired
};

const Wrapper = styled.div`
  color: #fff;
`;

const Corners = props => (
  <Wrapper>
    {props.list.map(corner => [
      <div key={uniqid()}>{corner.get('name')}</div>,
      <div key={uniqid()}>{corner.get('category')}</div>,
      <div key={uniqid()}>{corner.get('description')}</div>
    ])}
  </Wrapper>
);

Corners.propTypes = propTypes;

export default Corners;
