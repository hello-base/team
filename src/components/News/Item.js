import React from 'react';
import PropTypes from 'prop-types';
import { Map } from 'immutable';
import styled from 'styled-components';

const propTypes = {
  item: PropTypes.instanceOf(Map).isRequired
};

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  overflow: hidden;

  border-radius: 4px;
  color: #fff;
`;

const Headline = styled.div`
  background-color: #1a1f23;
  color: #fff;
  font-family: ${props => props.theme.gotham};
  font-size: 16px;
  font-weight: 500;
  padding: 20px;
`;

const Description = styled.div`
  font-family: ${props => props.theme.ideal};
  font-size: 16px;
`;

const Metadata = styled.div`
  background-color: #1a1f23;
  color: #738596;
  padding: 20px 0;
`;

const LinkList = styled.ul`
  margin: 0;
  padding: 0;

  font-family: ${props => props.theme.gotham};
  font-size: 12px;

  span {
    font-weight: 700;
    text-transform: uppercase;
  }
`;

function Sources({ list }) {
  return (
    !list.isEmpty() && (
      <LinkList>
        <span>Sources </span>
        {list.map((url, i) => <a href={url}>{`${i + 1} `}</a>)}
      </LinkList>
    )
  );
}

function References({ list }) {
  return (
    !list.isEmpty() && (
      <LinkList>
        <span>References </span>
        {list.map((url, i) => <a href={url}>{`${i + 1}`}</a>)}
      </LinkList>
    )
  );
}

function Item({ item }) {
  return (
    <Wrapper>
      {/* {item.get('images')} */}
      <Headline>{item.get('headline')}</Headline>
      {/* <Description>{item.get('description')}</Description> */}
      {item.get('images')}
      <Metadata>
        <Sources list={item.get('sources')} />
        <References list={item.get('references')} />
      </Metadata>
    </Wrapper>
  );
}

Item.propTypes = propTypes;

export default Item;
