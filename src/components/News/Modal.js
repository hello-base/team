import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

import styled from 'styled-components';
import { position, rgba, transparentize } from 'polished';

const propTypes = {
  title: PropTypes.string.isRequired
};

const Modal = ({ title, children }) =>
  ReactDOM.createPortal(
    <ModalOverlay data-modal>
      <ModalBox>
        <ModalTitle>{title}</ModalTitle>
        <ModalContentWrapper>
          <ModalContent>{children}</ModalContent>
        </ModalContentWrapper>
      </ModalBox>
    </ModalOverlay>,
    document.querySelector('#modal-root')
  );

Modal.propTypes = propTypes;

const ModalOverlay = styled.div`
  position: fixed;
  ${position(0, 0, 0, 0)};

  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;

  background-color: ${transparentize(0.6, '#000')};
`;

const ModalBox = styled.div`
  width: 1216px;

  background: #fff;
  box-shadow: 0 19px 38px ${rgba('#000', 0.3)},
    0 15px 12px ${rgba('#000', 0.22)};
`;

const ModalTitle = styled.div`
  padding: 20px 30px;

  color: #15536e;
  font-family: ${props => props.theme.tungsten};
  font-size: 36px;
`;

const ModalContentWrapper = styled.div`
  display: block;
  position: relative;
  width: 100%;
  padding-top: ${9 / 16 * 100}%;

  background: #fff;
`;

const ModalContent = styled.div`
  position: absolute;
  ${position(0, 0, 0, 0)};
`;

export default Modal;
