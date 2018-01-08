import React from 'react';
import PropTypes from 'prop-types';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { OrderedMap } from 'immutable';
import styled from 'styled-components';

const propTypes = {
  news: PropTypes.instanceOf(OrderedMap).isRequired
};

const Wrapper = styled.div`
  grid-column: 5 / span 11;
  grid-row: 2 / span 10;

  color: #fff;
`;

function Display(props) {
  const { news } = props;
  return (
    <Wrapper>
      <Tabs defaultFocus>
        <TabList>
          {news
            .keySeq()
            .toArray()
            .map(category => <Tab>{category}</Tab>)}
        </TabList>

        {news
          .valueSeq()
          .map(items => (
            <TabPanel>
              {items.map(item => <strong>{item.get('headline')}</strong>)}
            </TabPanel>
          ))}
      </Tabs>
    </Wrapper>
  );
}

Display.propTypes = propTypes;

export default Display;
