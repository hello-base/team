import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import moment from 'moment';

import logo from './logo.svg';

const propTypes = {
  episode: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired
};

const Wrapper = styled.div`
  grid-column: 1 / span 20;
  grid-row: 1;

  position: relative;
  display: flex;
  align-items: center;
  padding: 0 20px 0 136px;

  ${'' /* background: #090a0c; */} color: #fff;
  font-family: ${props => props.theme.gotham};
  font-size: 18px;
  text-transform: uppercase;

  user-select: none;
`;

const Logomark = styled.div`
  position: absolute;
  left: 0;
  align-self: flex-start;
  z-index: 100;
`;

const Logotype = styled.span`
  flex: 1;

  color: #4f5c69;
  font-size: 18px;
  letter-spacing: 1em;
`;

const Metadata = styled.div`
  font-weight: 500;
`;

const Date = styled.span`
  padding-right: 12px;
  color: #4f5c69;
`;

const Episode = styled.span`
  color: #e8ebed;
`;

function Header(props) {
  return (
    <Wrapper>
      <Logomark>
        <img src={logo} alt="hello!teamcast" />
      </Logomark>
      <Logotype>hello!teamcast</Logotype>
      <Metadata>
        <Date>{moment(props.date).format('MMMM Do, YYYY')}</Date>
        <Episode>Episode {props.episode}</Episode>
      </Metadata>
    </Wrapper>
  );
}

Header.propTypes = propTypes;

export default Header;
