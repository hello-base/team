import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Slider from 'react-slick';
import { List, Map } from 'immutable';
import uniqid from 'uniqid';

import styled from 'styled-components';
import { Image, Link2 } from 'react-feather';

import Modal from 'components/Modal';

const propTypes = {
  item: PropTypes.instanceOf(Map).isRequired
};

const modalPropTypes = {
  title: PropTypes.string.isRequired,
  list: PropTypes.instanceOf(List).isRequired
};

const Links = ({ title, list }) =>
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
  );

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
    const { description, list, title } = this.props;
    const modal = this.state.showModal ? (
      <Modal title={title} description={description} close={this.handleHide}>
        <SliderContainer>
          <Slider {...settings}>
            {list.map(url => (
              <SliderImage key={uniqid()}>
                <img src={url} alt={url} />
              </SliderImage>
            ))}
          </Slider>
        </SliderContainer>
      </Modal>
    ) : null;

    return (
      <div>
        <OpenButton onClick={this.handleShow}>
          <Image size={24} />
          <ImageCounter>{list.size}</ImageCounter>
        </OpenButton>
        {modal}
      </div>
    );
  }
}

function Item({ item }) {
  return (
    <Container>
      <Headline isFeatured={item.get('featured')}>
        {item.get('headline')}
      </Headline>
      {!item.get('images').isEmpty() && (
        <ImageModal
          title={item.get('headline')}
          description={item.get('description')}
          list={item.get('images')}
        />
      )}
      <Metadata>
        <Links title="Sources" list={item.get('sources')} />
        <Links title="Refs" list={item.get('references')} />
      </Metadata>
    </Container>
  );
}

Item.propTypes = propTypes;
Modal.propTypes = modalPropTypes;

const Container = styled.div`
  position: relative;

  display: grid;
  grid-template-columns: 1fr auto;
  grid-template-rows: 1fr auto;
  padding-left: 20px;
  overflow: hidden;

  color: #fff;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    width: 3px;
    height: 100%;

    background: #2db0ea;
    border-radius: 3px;
  }
`;

const Headline = styled.div`
  grid-column: 1;
  padding-bottom: 10px;

  color: ${props => (props.isFeatured ? '#fff' : '#90d6f4')};
  font-family: ${props => props.theme.tungsten};
  font-size: ${props => (props.isFeatured ? 36 : 30)}px;
  line-height: 1em;
`;

const Metadata = styled.div`
  grid-column: 1 / span 2;
  grid-row: 2;

  display: flex;
  justify-content: space-between;
`;

const LinkList = styled.div`
  display: flex;
  margin: 0;
  padding: 0;

  font-size: 12px;
  list-style: none;
`;

const ListHeader = styled.div`
  color: #8cd3f3;
  font-family: ${props => props.theme.gotham};
  font-weight: 700;
  text-transform: uppercase;
`;

const LinkItem = styled.div`
  a {
    color: #8cd3f3;
    padding-left: 5px;
    transition: all 250ms ease;

    &:hover {
      color: #fff;
    }
  }
`;

const SliderContainer = styled.div`
  margin: 0 40px;
`;

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

const OpenButton = styled(Button)`
  color: #0b516f;
  margin: 2px 0 9px 20px;

  &:hover {
    color: #fff;
  }
`;

const ImageCounter = styled.div`
  font-size: 16px;
  font-weight: bold;
`;

export default Item;
