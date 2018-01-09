import React from 'react';
import PropTypes from 'prop-types';
import { Map } from 'immutable';
import styled from 'styled-components';

const propTypes = {
  item: PropTypes.instanceOf(Map).isRequired
};

const Wrapper = styled.div``;

const Headline = styled.div`
  font-family: ${props => props.theme.gotham};
  font-weight: 700;
`;

const Description = styled.div`
  font-family: ${props => props.theme.ideal};
`;

function Item({ item }) {
  return (
    <Wrapper>
      <Headline>{item.get('headline')}</Headline>
      <Description>{item.get('description')}</Description>
    </Wrapper>
  );
}

Item.propTypes = propTypes;

export default Item;
