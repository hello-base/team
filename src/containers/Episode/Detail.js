import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import styled from 'styled-components';

function Detail(props) {
  return <div>{props.match.params.episodeId} Detail</div>;
}

export default Detail;
