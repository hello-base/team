import React from 'react';
import PropTypes from 'prop-types';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { OrderedMap } from 'immutable';
import styled from 'styled-components';

import Item from './Item';

const propTypes = {
  news: PropTypes.instanceOf(OrderedMap).isRequired
};

const Wrapper = styled.div`
  grid-column: 5 / span 12;
  grid-row: 2;

  color: #fff;
`;

const StyledTabs = styled(Tabs)`
  display: grid;
  grid-template-rows: 90px 1fr;
  overflow: hidden;

  .react-tabs__tab-list {
    grid-row: 1;

    display: flex;
    align-items: center;
    margin: 0;
    padding: 0;

    font-family: ${props => props.theme.ideal};
    font-style: italic;
    font-size: 18px;
    list-style: none;
  }
`;

const StyledTab = styled(Tab)`
  flex: 1;
`;
StyledTab.tabsRole = 'Tab';

const StyledTabPanel = styled(TabPanel)`
  grid-column: 1;
  grid-row: 2;
`;
StyledTabPanel.tabsRole = 'TabPanel';

const Corner = styled.div`
  display: block;

  span {
    padding: 3px 6px;

    background: #2db0ea;
    border-radius: 2px;
    font-family: ${props => props.theme.gotham};
    font-style: normal;
    font-size: 12px;
    font-weight: 600;
    text-transform: uppercase;
  }
`;

function CurrentCorner() {
  return (
    <Corner>
      <span>Current Corner</span>
    </Corner>
  );
}

function Display(props) {
  const { news } = props;
  return (
    <Wrapper>
      <StyledTabs defaultFocus>
        <TabList>
          {news
            .keySeq()
            .toArray()
            .map(category => (
              <StyledTab>
                {category}
                <CurrentCorner />
              </StyledTab>
            ))}
        </TabList>

        {news
          .valueSeq()
          .map(items => (
            <StyledTabPanel>
              {items.map(item => <Item key={item.get('pk')} item={item} />)}
            </StyledTabPanel>
          ))}
      </StyledTabs>
    </Wrapper>
  );
}

Display.propTypes = propTypes;

export default Display;
