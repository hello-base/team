import React from 'react';
import PropTypes from 'prop-types';
import { List } from 'immutable';
import moment from 'moment';
import uniqid from 'uniqid';

import styled from 'styled-components';

const propTypes = {
  birthdays: PropTypes.instanceOf(List).isRequired
};

const Display = props => (
  <Wrapper>
    {props.birthdays.map(member => {
      const birthday = member.get('birthday');
      const withMoment = moment(birthday);
      const thisBirthday = moment()
        .set('month', withMoment.get('month'))
        .set('date', withMoment.get('date'));
      return (
        <Birthday key={uniqid()}>
          <BirthDate>{moment(birthday).format('MMMM Do')}</BirthDate>
          <Name>
            {member.get('name')}
            <Age> ({moment(thisBirthday).diff(birthday, 'years')})</Age>
          </Name>
          {member.get('affiliation') && (
            <Group>
              <strong>{member.get('affiliation')}</strong>
            </Group>
          )}
        </Birthday>
      );
    })}
  </Wrapper>
);

Display.propTypes = propTypes;

const Wrapper = styled.div`
  grid-column: span 3;
  margin: 30px;

  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 30px;
  overflow: hidden;

  color: #fff;
`;

const Birthday = styled.div`
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

const Group = styled.span`
  font-family: ${props => props.theme.ideal};
  font-style: italic;
  font-size: 12px;
`;

const Age = styled.span`
  color: #8cd3f3;
`;

const BirthDate = styled.div`
  padding-bottom: 4px;

  color: #2db0ea;
  font-family: ${props => props.theme.gotham};
  font-size: 12px;
  font-weight: 700;
  text-transform: uppercase;
`;

export default Display;
