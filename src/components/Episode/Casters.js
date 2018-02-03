import React from 'react';
import PropTypes from 'prop-types';
import { List } from 'immutable';

import styled from 'styled-components';

const propTypes = {
  casters: PropTypes.instanceOf(List).isRequired
};

const Display = props => (
  <Wrapper>
    {props.casters.map(caster => (
      <Caster key={caster.get('username')}>
        <Picture
          url={`https://helloteamcast.s3.amazonaws.com/picutres/${caster
            .get('username')
            .toLowerCase()}.jpg`}
        />
        <Metadata>
          <Name>{caster.get('nickname')}</Name>
          <Handle>{caster.get('username')}</Handle>
          <Oshimen>
            <Header>Oshimen</Header>
            <strong>{caster.get('kamioshi')}</strong>,{' '}
            {caster.get('oshi_overall')}
          </Oshimen>
          <Oshimen>
            <Header>Current H!P Loves</Header>
            {caster.get('oshi_current')}
          </Oshimen>
        </Metadata>
      </Caster>
    ))}
  </Wrapper>
);

Display.propTypes = propTypes;

const Wrapper = styled.div`
  grid-column: span 3;
  margin: 30px;

  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 30px;

  color: #fff;
`;

const Caster = styled.div`
  display: flex;
  ${'' /* padding-top: 10px; */} position: relative;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    width: 30px;
    height: 6px;

    background: #2db0ea;
    ${'' /* border-radius: 6px; */};
  }
`;

const Picture = styled.div`
  width: 130px;
  height: 150px;

  background-color: #062938;
  background-image: url(${props => props.url});
  background-size: cover;
  background-position: center center;
  box-shadow: 2px 2px 0 #09445d;

  img {
    width: 100%;
  }
`;

const Metadata = styled.div`
  flex: 1;
  padding-left: 20px;
`;

const Name = styled.div`
  flex: 1;
  font-family: ${props => props.theme.tungsten};
  font-size: 36px;
`;

const Handle = styled.div`
  display: none;
`;

const Oshimen = styled.div`
  padding: 6px 0;
  font-family: ${props => props.theme.ideal};
  font-size: 13px;
  font-style: italic;
`;

const Header = styled.div`
  margin-bottom: 2px;

  color: #8cd3f3;
  font-family: ${props => props.theme.gotham};
  font-size: 12px;
  font-style: normal;
  text-transform: uppercase;
`;

export default Display;
