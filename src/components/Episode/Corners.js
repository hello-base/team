import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Select from 'react-select';
import { List, Map } from 'immutable';
import uniqid from 'uniqid';

import styled from 'styled-components';
import { rgba } from 'polished';

import 'react-select/dist/react-select.css';

const propTypes = {
  list: PropTypes.instanceOf(List).isRequired
};

const cornerPropTypes = {
  corner: PropTypes.instanceOf(Map).isRequired,
  name: PropTypes.string.isRequired,
  selected: PropTypes.string.isRequired
};

const Corner = ({ corner, name, selected }) => (
  <CornerWrapper name={name} selected={selected}>
    <Header key={uniqid()}>
      <Name key={uniqid()}>{corner.get('name')}</Name>
      <CategoryBubble>
        <CategoryText>SPECIAL {corner.get('category')} CORNER</CategoryText>
      </CategoryBubble>
    </Header>
    <Description key={uniqid()}>{corner.get('description')}</Description>
  </CornerWrapper>
);

class Corners extends Component {
  state = {
    options: this.props.list.toJS().map(corner => ({
      value: corner.slug,
      label: corner.name
    })),
    selectedCorner: ''
  };

  handleChange = selectedCorner => {
    this.setState({ selectedCorner });
  };

  render() {
    const { options, selectedCorner } = this.state;
    const value = selectedCorner && selectedCorner.value;
    return (
      <Wrapper>
        <SelectContainer>
          <StyledSelect
            name="corner-select"
            value={value}
            onChange={this.handleChange}
            options={options}
            clearable={false}
            placeholder="Select a Corner..."
            searchable={false}
          />
        </SelectContainer>
        <CornerContainer>
          {this.props.list.map(item => (
            <Corner
              key={item.get('slug')}
              corner={item}
              name={item.get('slug')}
              selected={value}
            />
          ))}
        </CornerContainer>
      </Wrapper>
    );
  }
}

Corners.propTypes = propTypes;
Corner.propTypes = cornerPropTypes;

const Wrapper = styled.div`
  display: grid;
  grid-template-rows: auto 1fr;
  height: 100%;

  color: #fff;
`;

const SelectContainer = styled.div`
  grid-row: 1;

  box-shadow: inset 0 -1px 0 ${rgba('#062938', 0.5)};
`;

const StyledSelect = styled(Select)`
  font-family: ${props => props.theme.gotham};
  font-size: 12px;
  text-transform: uppercase;

  .Select-control {
    background: transparent !important;
    border-radius: 0;
    border: none;
    box-shadow: none !important;
    color: #fff !important;
  }
  .Select-control > *:last-child {
    padding-right: 30px;
  }
  .Select-input {
    background: transparent !important;
  }
  .Select-placeholder {
    padding-left: 30px;
    padding-right: 30px;

    color: #0c3242;
  }
  .Select-value {
    padding-left: 30px !important;
    padding-right: 30px !important;
  }
  .Select-value-label {
    color: #2db0ea !important;
  }
  .Select-value-label:focus {
    background: transparent !important;
  }

  .Select-arrow {
    border-color: #0c3242 transparent transparent;
  }
  &.is-open > .Select-control .Select-arrow {
    border-color: transparent transparent #0c3242 !important;
  }

  .Select-menu-outer {
    background-color: #1495cc;
    border: none;
    border-radius: 0;
  }
  .Select-option {
    background: #062938;
    color: #fff !important;
    padding-left: 30px;
    padding-right: 30px;
  }
  .Select-option:last-child {
    border-radius: 0;
  }
`;

const CornerContainer = styled.div`
  grid-row: 2;

  display: grid;
  grid-template-columns: 0.5fr 1fr 0.5fr;
  grid-template-rows: 0.5fr 1fr 0.5fr;
`;

const CornerWrapper = styled.div`
  grid-column: 2;
  grid-row: 2;
  align-self: center;

  display: ${props => (props.name === props.selected ? 'block' : 'none')};
`;

const Header = styled.header`
  margin-bottom: 48px;
`;

const Name = styled.div`
  font-family: ${props => props.theme.tungsten};
  font-size: 78px;
  font-weight: 100;
`;

const CategoryBubble = styled.div`
  display: block;
  position: absolute;
  transition: 250ms all ease;
`;

const CategoryText = styled.span`
  padding: 3px 6px;

  box-shadow: inset 0 0 0 1px #1495cc;
  border-radius: 2px;
  color: #2db0ea;
  font-family: ${props => props.theme.gotham};
  font-style: normal;
  font-size: 12px;
  text-transform: uppercase;
`;

const Description = styled.div`
  color: #90d6f4;
  font-family: ${props => props.theme.ideal};
  font-size: 30px;
  font-weight: 100;
  font-style: italic;
`;

export default Corners;
