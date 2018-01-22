import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Select from 'react-select';
import { List, Map } from 'immutable';
import uniqid from 'uniqid';

import styled from 'styled-components';

import 'react-select/dist/react-select.css';

const propTypes = {
  list: PropTypes.instanceOf(List).isRequired
};

const cornerPropTypes = {
  corner: PropTypes.instanceOf(Map).isRequired,
  name: PropTypes.string.isRequired,
  selected: PropTypes.string.isRequired
};

const Wrapper = styled.div`
  color: #fff;
`;

const Header = styled.header``;

const CornerWrapper = styled.div`
  display: ${props => (props.name === props.selected ? 'block' : 'none')};
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

const Name = styled.h2`
  font-family: ${props => props.theme.tungsten};
  font-weight: 300;
  text-transform: lowercase;
`;

const Description = styled.div`
  font-family: ${props => props.theme.ideal};
`;

const Corner = ({ corner, name, selected }) => (
  <CornerWrapper name={name} selected={selected}>
    <Header key={uniqid()}>
      <CategoryBubble>
        <CategoryText>{corner.get('category')}</CategoryText>
      </CategoryBubble>
      <Name key={uniqid()}>{corner.get('name')}</Name>
    </Header>
    <Description key={uniqid()}>{corner.get('description')}</Description>
  </CornerWrapper>
);

class Corners extends Component {
  state = {
    selectedCorner: '',
    options: this.props.list.toJS().map(corner => ({
      value: corner.slug,
      label: corner.name
    }))
  };

  handleChange = selectedCorner => {
    this.setState({ selectedCorner });
  };

  render() {
    const { options, selectedCorner } = this.state;
    const value = selectedCorner && selectedCorner.value;
    return (
      <Wrapper>
        <Select
          name="corner-select"
          value={value}
          onChange={this.handleChange}
          options={options}
          clearable={false}
          placeholder="Select a Corner..."
        />
        {this.props.list.map(item => (
          <Corner
            key={item.get('slug')}
            corner={item}
            name={item.get('slug')}
            selected={value}
          />
        ))}
      </Wrapper>
    );
  }
}

Corners.propTypes = propTypes;
Corner.propTypes = cornerPropTypes;

export default Corners;
