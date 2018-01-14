import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import moment from 'moment';

const birthdayList = [
  { birthdate: '1/6/2018', age: '16', name: 'Yanagawa Nanami' },
  {
    birthdate: '1/7/2018',
    age: '22',
    name: 'Satou Ayano',
    group: 'Up Up Girls'
  },
  { birthdate: '1/7/2018', age: '21', name: 'Ishida Ayumi' },
  {
    birthdate: '1/10/2018',
    age: '29',
    name: 'ShenShen',
    group: 'Ice Creamusume'
  },
  { birthdate: '1/11/2018', age: '29', name: 'JunJun' },
  { birthdate: '1/12/2018', age: '24', name: 'Mitsui Aika' },
  {
    birthdate: '1/14/2018',
    age: '19',
    name: 'Mogi Minami',
    group: 'HelloPro Kenshuusei'
  },
  {
    birthdate: '1/16/2018',
    age: '23',
    name: 'ReiRei',
    group: 'Ice Creamusume'
  },
  { birthdate: '1/19/2018', age: '33', name: 'Ishikawa Rika' },
  { birthdate: '1/20/2018', age: '35', name: 'Yaguchi Mari' },
  {
    birthdate: '1/27/2018',
    age: '34',
    name: 'Hirano Tomomi',
    group: 'HelloPro Egg'
  },
  {
    birthdate: '1/30/2018',
    age: '41',
    name: 'Kobayashi Azusa',
    group: 'Country Musume'
  },
  {
    birthdate: '1/31/2018',
    age: '26',
    name: 'Mutou Mika',
    group: 'Ongaku Gatas'
  }
];

const Wrapper = styled.div`
  grid-column: span 3;

  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 30px;
  overflow: hidden;

  color: #fff;
`;

const Birthday = styled.div`
  display: flex;
  align-items: center;
  padding: 20px;

  box-shadow: inset 0 0 0 1px #09445d, inset 0 0 0 3px #062938;
  background-color: rgba(0, 0, 0, 0.1);
  color: #fff;
`;

const Name = styled.div`
  flex: 1;

  font-family: ${props => props.theme.tungsten};
  font-size: 36px;
`;

const Group = styled.span`
  font-family: ${props => props.theme.gotham};
  font-style: italic;
  font-size: 12px;
`;

const Age = styled.div`
  color: #16a3df;
  font-family: ${props => props.theme.gotham};
  font-size: 18px;
  text-align: right;
`;

const BirthDate = styled.div`
  color: #1287ba;
  font-size: 14px;
  font-weight: 700;
  text-transform: uppercase;
`;

function Display() {
  return (
    <Wrapper>
      {birthdayList.map(member => (
        <Birthday>
          <Name>
            {member.name}
            {/* <Group>{member.group}</Group> */}
          </Name>
          <Age>
            turns <strong>{member.age}</strong> on{' '}
            <BirthDate>{moment(member.birthdate).format('MMMM Do')}</BirthDate>
          </Age>
        </Birthday>
      ))}
    </Wrapper>
  );
}

export default Display;
