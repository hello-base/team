import React from 'react';
import PropTypes from 'prop-types';
import { Map } from 'immutable';
import styled from 'styled-components';
import { Folder, Image, Link2 } from 'react-feather';

const propTypes = {
  category: PropTypes.string.isRequired,
  item: PropTypes.instanceOf(Map).isRequired
};

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr auto;
  grid-template-rows: 1fr auto;
  overflow: hidden;

  color: #fff;

  box-shadow: inset 0 0 0 1px #09445d, inset 0 0 0 3px #062938;
  background-color: rgba(0, 0, 0, 0.1);
  border-radius: 0;
`;

const Headline = styled.div`
  grid-column: 1;
  padding: 20px;

  color: #fff;
  font-family: ${props => props.theme.tungsten};
  font-size: 36px;
  font-weight: 300;
  line-height: 1.05em;
`;

const Metadata = styled.div`
  grid-column: 1 / span 2;
  grid-row: 2;

  display: flex;
  padding: 12px 20px 10px;
  margin: 3px;

  background: #020e13;
  border-top: 1px solid #062938;
`;

const LinkList = styled.div`
  flex: 1;

  display: flex;
  margin: 0;
  padding: 0;

  font-size: 12px;
  list-style: none;
`;

const ListHeader = styled.div`
  color: #0b516f;
  font-family: ${props => props.theme.gotham};
  font-weight: 700;
  text-transform: uppercase;
`;

const LinkItem = styled.div`
  a {
    color: #0b516f;
    padding-left: 5px;
    transition: all 250ms ease;

    &:hover {
      color: #fff;
    }
  }
`;

const ImageList = styled.div`
  grid-column: 2;
  margin-left: -5px;
  padding: 20px;
  overflow: hidden;

  align-items: center;
`;

const ImageItem = styled.div`
  a {
    color: #0b516f;
    transition: all 250ms ease;

    &:hover {
      color: #fff;
    }
  }
`;

function Links({ title, list }) {
  return (
    !list.isEmpty() && (
      <LinkList>
        <ListHeader>{title}</ListHeader>
        {list.map(url => (
          <LinkItem>
            <a href={url} alt={url} target="_blank">
              <Link2 size={15} />
            </a>
          </LinkItem>
        ))}
      </LinkList>
    )
  );
}

function Images({ list }) {
  return (
    !list.isEmpty() && (
      <ImageList>
        {list.map(url => (
          <ImageItem>
            <a href={url} alt={url} target="_blank">
              <Image size={24} />
            </a>
          </ImageItem>
        ))}
      </ImageList>
    )
  );
}

function Item({ item }) {
  return (
    <Wrapper>
      <Headline>{item.get('headline')}</Headline>
      <Images list={item.get('images')} />
      <Metadata>
        <Links title="Sources" list={item.get('sources')} />
        <Links title="Refs" list={item.get('references')} />
      </Metadata>
    </Wrapper>
  );
}

Item.propTypes = propTypes;

export default Item;
