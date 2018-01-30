import React from 'react';
import PropTypes from 'prop-types';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { List, OrderedMap } from 'immutable';
import uniqid from 'uniqid';

import styled from 'styled-components';
import { rgba } from 'polished';
import { Calendar, Home } from 'react-feather';

import { Item as NewsItem } from 'components/News';

import Birthdays from './Birthdays';
import Casters from './Casters';
import Corners from './Corners';
import Viewings from './Viewings';

const propTypes = {
  className: PropTypes.string.isRequired
};

const tabsPropTypes = {
  news: PropTypes.instanceOf(OrderedMap).isRequired
};

const panelsPropTypes = {
  casters: PropTypes.instanceOf(List).isRequired,
  birthdays: PropTypes.instanceOf(List).isRequired,
  corners: PropTypes.instanceOf(List).isRequired,
  news: PropTypes.instanceOf(OrderedMap).isRequired
};

const Wrapper = styled.div`
  grid-column: 5 / span 16;
  grid-row: 1;
  z-index: 10;
`;

const StyledTabs = styled(Tabs)`
  display: grid;
  grid-template-rows: 90px 1fr;
  height: 100%;
  margin-right: 6px;
`;

const StyledTabList = styled(TabList)`
  grid-row: 1;

  display: flex;
  align-items: center;
  margin: 0;
  padding: 0 30px;
  overflow: hidden;

  box-shadow: inset 0 -1px 0 ${rgba('#062938', 0.5)};
  font-family: ${props => props.theme.ideal};
  font-style: italic;
  font-size: 18px;
`;
StyledTabList.tabsRole = 'TabList';

const CategoryName = styled.span`
  position: relative;
  font-weight: 500;
  transition: 250ms all ease;
`;

const CurrentBubble = styled.div`
  display: block;
  position: absolute;
  transition: 250ms all ease;
`;

const CurrentText = styled.span`
  padding: 3px 6px;

  box-shadow: inset 0 0 0 1px #1495cc;
  border-radius: 2px;
  color: #2db0ea;
  font-family: ${props => props.theme.gotham};
  font-style: normal;
  font-size: 12px;
`;

const StyledTab = styled(Tab)`
  flex: ${props => (props.icononly ? 'none' : 1)};
  align-self: stretch;

  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 30px 0 0;
  min-width: ${props => (props.icononly ? 'auto' : '136px')};

  box-shadow: inset 0 ${props => (props.selected ? 6 : 0)}px 0 #2db0ea;
  color: ${props => (props.selected ? '#ecf8fd' : '#0c3242')};
  transition: 250ms all ease;

  &:last-child {
    margin-right: 0;
  }
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
  ${CurrentBubble} {
    top: ${props => (props.selected ? 44 : 104)}px;
    opacity: ${props => (props.selected ? 1 : 0)};
  }
`;
StyledTab.tabsRole = 'Tab';

const StyledTabPanel = styled(TabPanel)`
  grid-column: 1;
  grid-row: 2;
`;
StyledTabPanel.tabsRole = 'TabPanel';

const NewsWrapper = styled.div`
  padding: 30px;

  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-auto-flow: row;
  grid-gap: 30px;
`;

const CategoryTab = ({ icon, name, showCurrent }) => [
  icon && icon,
  name && <CategoryName key={uniqid()}>{name}</CategoryName>,
  showCurrent && (
    <CurrentBubble key={uniqid()}>
      <CurrentText>CURRENT CORNER</CurrentText>
    </CurrentBubble>
  )
];

const renderTabs = props => (
  <StyledTabList>
    <StyledTab icononly="true">
      <CategoryTab icon={<Home key={uniqid()} />} />
    </StyledTab>
    <StyledTab icononly="true">
      <CategoryTab icon={<Calendar key={uniqid()} />} />
    </StyledTab>
    {props.news
      .keySeq()
      .toArray()
      .map(category => (
        <StyledTab key={uniqid()}>
          <CategoryTab name={category} showCurrent />
        </StyledTab>
      ))}
    <StyledTab>
      <CategoryTab name="Viewings" showCurrent />
    </StyledTab>
    <StyledTab>
      <CategoryTab name="Special Corners" showCurrent />
    </StyledTab>
  </StyledTabList>
);

const renderPanels = props => [
  <StyledTabPanel key={uniqid()}>
    <Casters casters={props.casters} />
  </StyledTabPanel>,
  <StyledTabPanel key={uniqid()}>
    <Birthdays birthdays={props.birthdays} />
  </StyledTabPanel>,
  props.news.valueSeq().map(items => (
    <StyledTabPanel key={uniqid()}>
      <NewsWrapper>
        {items.map(item => <NewsItem key={item.get('pk')} item={item} />)}
      </NewsWrapper>
    </StyledTabPanel>
  )),
  <StyledTabPanel key={uniqid()}>
    <Viewings viewings={props.viewings} />
  </StyledTabPanel>,
  <StyledTabPanel key={uniqid()}>
    <Corners list={props.corners} />
  </StyledTabPanel>
];

const Content = props => (
  <Wrapper className={props.className}>
    <StyledTabs defaultFocus defaultIndex={3}>
      {renderTabs(props)}
      {renderPanels(props)}
    </StyledTabs>
  </Wrapper>
);

Content.propTypes = propTypes;
renderTabs.propTypes = tabsPropTypes;
renderPanels.propTypes = panelsPropTypes;

export default Content;
