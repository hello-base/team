import React from 'react';
import PropTypes from 'prop-types';
import { List } from 'immutable';
import moment from 'moment';
import uniqid from 'uniqid';

import styled from 'styled-components';

const propTypes = {
  casters: PropTypes.instanceOf(List).isRequired
};

const Wrapper = styled.div`
  grid-column: span 3;
  margin: 30px;

  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 30px;
  overflow: hidden;

  color: #fff;
`;

const Name = styled.div`
  flex: 1;
  font-family: ${props => props.theme.tungsten};
  font-size: 36px;
`;

const Handle = styled.div``;

const Oshi = styled.div``;

const Display = props => (
  <Wrapper>
    {props.casters.map(caster => (
      <div key={caster.get('username')}>
        <Name>{caster.get('nickname')}</Name>
        <Handle>{caster.get('username')}</Handle>
        <Oshi>
          <strong>{caster.get('kamioshi')}</strong>,{' '}
          {caster.get('oshi_overall')}
          Current H!P Loves {caster.get('oshi_current')}
        </Oshi>
      </div>
    ))}
  </Wrapper>
);

Display.propTypes = propTypes;

export default Display;
