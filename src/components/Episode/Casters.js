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
        <Name>{caster.get('nickname')}</Name>
        <Handle>{caster.get('username')}</Handle>
        {caster.get('biography')}
        <Oshimen>
          <Header>Oshimen</Header>
          <strong>{caster.get('kamioshi')}</strong>,{' '}
          {caster.get('oshi_overall')}
        </Oshimen>
        <Oshimen>
          <Header>Current H!P Loves</Header>
          {caster.get('oshi_current')}
        </Oshimen>
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
  overflow: hidden;

  color: #fff;
`;

const Caster = styled.div`
  padding-top: 10px;
  position: relative;

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
  font-style: italic;
`;

const Header = styled.div`
  color: #8cd3f3;
  font-family: ${props => props.theme.gotham};
  font-size: 13px;
  font-style: normal;
  text-transform: uppercase;
`;

export default Display;
