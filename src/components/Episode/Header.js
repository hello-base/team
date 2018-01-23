import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

import styled from 'styled-components';
import { rgba } from 'polished';

import logomark from './logomark.svg';

const propTypes = {
  episode: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired
};

const Wrapper = styled.div`
  grid-column: span 4;
  grid-row: span 2;

  position: relative;
  margin: 6px 0 6px 6px;
  padding: 30px;
  overflow: hidden;

  background-color: ${rgba('#020e13', 0.7)};
  box-shadow: 1px 0 0 #062938;
  color: #fff;
  font-family: ${props => props.theme.gotham};
  font-size: 18px;
  user-select: none;
`;

const Logomark = styled.div`
  img {
    width: 120px;
  }
`;

const Metadata = styled.div`
  margin: 30px 0;
  font-weight: 500;
`;

const Date = styled.div`
  color: #90d6f4;
  font-weight: 100;
  text-transform: uppercase;
`;

const Episode = styled.div`
  font-family: ${props => props.theme.ideal};
  font-size: 54px;
  font-style: italic;
  font-weight: 100;
  letter-spacing: -0.02em;
`;

const SectionHeader = styled.div`
  padding-top: 10px;
  position: relative;

  font-size: 14px;
  text-transform: uppercase;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    width: 30px;
    height: 3px;

    background: #2db0ea;
    border-radius: 3px;
  }
`;

function Header(props) {
  return (
    <Wrapper className={props.className}>
      <Logomark>
        <img src={logomark} alt="hello!teamcast" />
      </Logomark>
      <Metadata>
        <Date>{moment(props.date).format('MMMM Do, YYYY')}</Date>
        <Episode>episode {props.episode}</Episode>
      </Metadata>
      <SectionHeader>Hello! Team</SectionHeader>
      {/* <SectionHeader>Twitch Chat</SectionHeader> */}
    </Wrapper>
  );
}

Header.propTypes = propTypes;

export default Header;
