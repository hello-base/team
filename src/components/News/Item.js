import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Slider from 'react-slick';
import { Map } from 'immutable';
import uniqid from 'uniqid';

import styled from 'styled-components';
import { Image, Link2, X } from 'react-feather';

import Modal from './Modal';

const propTypes = {
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

function Links({ title, list }) {
  return (
    !list.isEmpty() && (
      <LinkList>
        <ListHeader>{title}</ListHeader>
        {list.map(url => (
          <LinkItem key={uniqid()}>
            <a href={url} alt={url} target="_blank">
              <Link2 size={15} />
            </a>
          </LinkItem>
        ))}
      </LinkList>
    )
  );
}

class ImageModal extends Component {
  state = {
    showModal: false
  };

  handleShow = () => this.setState({ showModal: true });

  handleHide = () => this.setState({ showModal: false });

  render() {
    const settings = {
      centerPadding: '0',
      easing: 'cubic-bezier(.62, .28, .23, .99)',
      speed: 300
    };
    const { title, list } = this.props;
    const modal = this.state.showModal ? (
      <Modal title={title}>
        <CloseButton onClick={this.handleHide}>
          <X size={24} />
        </CloseButton>
        <Slider {...settings}>
          {list.map(url => (
            <SliderImage key={uniqid()}>
              <img src={url} alt={url} />
            </SliderImage>
          ))}
        </Slider>
      </Modal>
    ) : null;

    return (
      <div>
        <OpenButton onClick={this.handleShow}>
          <Image size={24} />
        </OpenButton>
        {modal}
      </div>
    );
  }
}

function Item({ item }) {
  return (
    <Wrapper>
      <Headline>{item.get('headline')}</Headline>
      {!item.get('images').isEmpty() && (
        <ImageModal title={item.get('headline')} list={item.get('images')} />
      )}
      <Metadata>
        <Links title="Sources" list={item.get('sources')} />
        <Links title="Refs" list={item.get('references')} />
      </Metadata>
    </Wrapper>
  );
}

Item.propTypes = propTypes;

const SliderImage = styled.div`
  display: flex !important;
  justify-content: center;
  align-items: center;

  img {
    height: 600px;
    margin: 42px 0;
  }
`;

const Button = styled.button`
  padding: 0;

  border: 0;
  background: transparent;
  transition: all 250ms ease;

  &:focus {
    outline: none;
  }
`;

const CloseButton = styled(Button)`
  position: absolute;
  right: 28px;
  top: -54px;
`;

const OpenButton = styled(Button)`
  margin: 20px;
  color: #0b516f;

  &:hover {
    color: #fff;
  }
`;

export default Item;
