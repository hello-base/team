import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { List } from 'immutable';

import styled from 'styled-components';
import { Airplay } from 'react-feather';

import Modal from 'components/Modal';

const propTypes = {
  viewings: PropTypes.instanceOf(List).isRequired
};

const embed = (rawURL, width = 1280, height = 720) => {
  const url = new URL(rawURL);
  url.searchParams.append('rel', 0);
  url.searchParams.append('showinfo', 0);
  return (
    <iframe
      title="embed"
      width={width}
      height={height}
      src={url}
      frameBorder="0"
      allow="autoplay; encrypted-media"
      allowFullScreen
    />
  );
};

class ViewingModal extends Component {
  state = {
    showModal: false
  };

  handleShow = () => this.setState({ showModal: true });

  handleHide = () => this.setState({ showModal: false });

  render() {
    const { embedURL, title, url } = this.props;
    const modal = this.state.showModal ? (
      <Modal title={title} close={this.handleHide}>
        {embed(embedURL)}
      </Modal>
    ) : null;

    return (
      <div>
        <OpenButton onClick={this.handleShow}>
          <Airplay size={24} />
        </OpenButton>
        {modal}
      </div>
    );
  }
}

const Display = props => (
  <Wrapper>
    {props.viewings.map(viewing => (
      <Container key={viewing.get('pk')}>
        <Headline>
          <Description>{viewing.get('headline')}</Description>
          <Song>{viewing.get('song')}</Song>
          <Performer>
            performed by <strong>{viewing.get('performer')}</strong>
          </Performer>
        </Headline>
        <ViewingModal
          title={viewing.get('song')}
          url={viewing.get('url')}
          embedURL={viewing.get('embed_url')}
        />
      </Container>
    ))}
  </Wrapper>
);

const Wrapper = styled.div`
  grid-column: span 3;
  margin: 30px;

  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 30px;
  overflow: hidden;

  color: #fff;
`;

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
`;

const Description = styled.div`
  padding-bottom: 4px;

  color: #2db0ea;
  font-family: ${props => props.theme.gotham};
  font-size: 12px;
  font-weight: 700;
  text-transform: uppercase;
`;

const Song = styled.div`
  grid-column: 1;

  color: #fff;
  font-family: ${props => props.theme.tungsten};
  font-size: 42px;
  line-height: 1em;
`;

const Performer = styled.div`
  padding: 6px 0;
  font-family: ${props => props.theme.ideal};
  font-style: italic;
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

Display.propTypes = propTypes;

export default Display;
