import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

import styled from 'styled-components';
import { position, rgba, transparentize } from 'polished';
import { X } from 'react-feather';

const propTypes = {
  title: PropTypes.string.isRequired
};

const Modal = ({ children, close, description, title }) =>
  ReactDOM.createPortal(
    <ModalOverlay data-modal>
      <ModalBox>
        <ModalHeader>
          <ModalTitle>{title}</ModalTitle>
          <CloseButton onClick={close}>
            <X size={24} />
          </CloseButton>
        </ModalHeader>
        <ModalContentWrapper>
          <ModalContentContainer>
            {description && <ModalDescription>{description}</ModalDescription>}
            <ModalContent>{children}</ModalContent>
          </ModalContentContainer>
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
  width: 1280px;
  overflow: hidden;

  background: #020e13;
  border-radius: 4px;
  box-shadow: 0 19px 38px ${rgba('#000', 0.3)},
    0 15px 12px ${rgba('#000', 0.22)};
`;

const ModalHeader = styled.div`
  position: relative;
  padding: 20px;
  background: #2db0ea;
`;

const ModalTitle = styled.div`
  color: #fff;
  font-family: ${props => props.theme.gotham};
  font-size: 14px;
  font-weight: bold;
  text-transform: uppercase;
`;

const ModalContentWrapper = styled.div`
  display: block;
  position: relative;
  width: 100%;
  padding-top: ${9 / 16 * 100}%;

  ${'' /* background: #fff; */} border-radius: 4px;
`;

const ModalContentContainer = styled.div`
  position: absolute;
  ${position(0, 0, 0, 0)};

  display: flex;

  * {
    min-height: 0;
    min-width: 0;
  }
`;

const ModalDescription = styled.div`
  width: 300px;
  padding: 20px;

  background: #062938;
  color: #90d6f4;
  font-family: ${props => props.theme.ideal};
  font-weight: 300;
  font-size: 18px;
  font-style: italic;
`;

const ModalContent = styled.div`
  flex: 1;
  align-self: center;
`;

const Button = styled.button`
  padding: 0;

  border: 0;
  background: transparent;
  transition: all 250ms ease;

  &:focus {
    outline: none;
  }
  &:hover {
    cursor: pointer;
  }
`;

const CloseButton = styled(Button)`
  position: absolute;
  top: 16px;
  right: 16px;

  color: #fff;
`;

export default Modal;
