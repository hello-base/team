import React from 'react';
import PropTypes from 'prop-types';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { OrderedMap } from 'immutable';

import styled from 'styled-components';
import { Calendar, Home } from 'react-feather';

import { Display as BirthdayDisplay } from 'components/Birthdays';
import { Item as NewsItem } from 'components/News';

const propTypes = {
  news: PropTypes.instanceOf(OrderedMap).isRequired,
  className: PropTypes.string.isRequired
};

const Wrapper = styled.div`
  grid-column: 5 / span 15;
  grid-row: 1;
  z-index: 10;
`;

const StyledTabs = styled(Tabs)`
  display: grid;
  grid-template-rows: 90px 1fr;
`;

const StyledTabList = styled(TabList)`
  grid-row: 1;

  display: flex;
  align-items: center;
  margin: 0;
  padding: 0;

  font-family: ${props => props.theme.ideal};
  font-style: italic;
  font-size: 18px;
  letter-spacing: -1px;
  list-style: none;
`;
StyledTabList.tabsRole = 'TabList';

const CategoryName = styled.span`
  position: relative;
  font-weight: 500;
  transition: 250ms all ease;
`;

const Corner = styled.div`
  display: block;
  position: absolute;
  transition: 250ms all ease;

  span {
    padding: 3px 6px;

    box-shadow: inset 0 0 0 1px #1495cc;
    border-radius: 2px;
    color: #2db0ea;
    font-family: ${props => props.theme.gotham};
    font-style: normal;
    font-size: 12px;
    font-weight: 600;
    letter-spacing: 0;
    text-transform: uppercase;
  }
`;

const StyledTab = styled(Tab)`
  flex: ${props => (props.iconOnly ? 'none' : 1)};
  align-self: stretch;

  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  overflow: hidden;
  margin: 0 30px 0 0;
  min-width: ${props => (props.iconOnly ? 'auto' : '136px')};

  box-shadow: inset 0 ${props => (props.selected ? 6 : 0)}px 0 #2db0ea;
  color: ${props => (props.selected ? '#ecf8fd' : '#0c3242')};
  transition: 250ms all ease;

  &:focus {
    outline: none;
  }
  &:hover {
    cursor: pointer;
  }

  ${CategoryName} {
    top: ${props => (props.selected ? -12 : 0)}px;
    color: ${props => (props.selected ? '#ecf8fd' : '#0c3242')};
  }
  ${Corner} {
    top: ${props => (props.selected ? 44 : 104)}px;
    opacity: ${props => (props.selected ? 1 : 0)};
  }
`;
StyledTab.tabsRole = 'Tab';

const StyledTabPanel = styled(TabPanel)`
  grid-column: 1;
  grid-row: 2;

  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-auto-flow: row;
  grid-gap: 15px;
`;
StyledTabPanel.tabsRole = 'TabPanel';

const CurrentCorner = () => (
  <Corner>
    <span>Current Corner</span>
  </Corner>
);

function Content(props) {
  const { news } = props;
  return (
    <Wrapper className={props.className}>
      <StyledTabs defaultFocus defaultIndex={1}>
        <StyledTabList>
          <StyledTab iconOnly>
            <Home />
          </StyledTab>
          <StyledTab iconOnly>
            <Calendar />
          </StyledTab>
          {news
            .keySeq()
            .toArray()
            .map(category => (
              <StyledTab>
                <CategoryName>{category}</CategoryName>
                <CurrentCorner />
              </StyledTab>
            ))}
          <StyledTab>
            <CategoryName>Performances</CategoryName>
            <CurrentCorner />
          </StyledTab>
          <StyledTab>
            <CategoryName>Corners</CategoryName>
            <CurrentCorner />
          </StyledTab>
        </StyledTabList>

        <StyledTabPanel />
        <StyledTabPanel>
          <BirthdayDisplay />
        </StyledTabPanel>
        {news
          .entrySeq()
          .map(([category, items]) => (
            <StyledTabPanel>
              {items.map(item => (
                <NewsItem
                  key={item.get('pk')}
                  category={category}
                  item={item}
                />
              ))}
            </StyledTabPanel>
          ))}
        <StyledTabPanel />
        <StyledTabPanel />
      </StyledTabs>
    </Wrapper>
  );
}

Content.propTypes = propTypes;

export default Content;
