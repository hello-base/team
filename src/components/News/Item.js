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
  grid-template-columns: auto 1fr;
  grid-template-rows: 1fr auto;
  overflow: hidden;

  color: #fff;

  box-shadow: inset 0 0 0 1px #09445d, inset 0 0 0 3px #062938;
  background-color: rgba(0, 0, 0, 0.1);
  border-radius: 0;
`;

const Headline = styled.div`
  grid-column: 2;
  padding: 20px;

  color: #fff;
  font-family: ${props => props.theme.tungsten};
  font-size: 36px;
  font-weight: 300;
  line-height: 1.05em;
`;

const Metadata = styled.div`
  grid-column: 2;
  grid-row: 2;

  display: flex;
  padding: 12px 20px 10px;
  margin: 3px;

  background: #020e13;
  border-top: 1px solid #062938;
`;

const Category = styled.div`
  font-family: ${props => props.theme.gotham};
  font-size: 12px;
  font-weight: 700;
  text-transform: uppercase;
`;

const Description = styled.div`
  font-family: ${props => props.theme.ideal};
  font-size: 16px;
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

const ImageList = styled.ul`
  margin: 0;
  padding: 0;
  height: 60px;
  overflow: hidden;

  display: flex;
  align-items: center;

  li {
    flex: 1;
  }
  img {
    width: 100%;
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

// function Images({ list }) {
//   return (
//     !list.isEmpty() && (
//       <ImageList>
//         {list.map(url => <li><img src={url} alt="references" /></li>)}
//       </ImageList>
//     )
//   );
// }

function Item({ category, item }) {
  return (
    <Wrapper>
      {/* <Images list={item.get('images')} /> */}
      {/* <Category><Folder size={16} /> {category}</Category> */}
      <Headline>{item.get('headline')}</Headline>
      {/* <Description>{item.get('description')}</Description> */}
      <Metadata>
        <Links title="Sources" list={item.get('sources')} />
        <Links title="Refs" list={item.get('references')} />
      </Metadata>
    </Wrapper>
  );
}

Item.propTypes = propTypes;

export default Item;
