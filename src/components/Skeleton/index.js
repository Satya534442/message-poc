import React from 'react';
import styled from 'styled-components';

const WrappedComponent = styled.div`
  display: ${props => (!props.isGiftCard ? 'inline-block' : 'none')};
  height: ${props => (props.height ? props.height : '100%')};
  width: ${props => (props.width ? props.width : '100%')};
  min-height: ${props => (props.height ? props.height : '15px')};
  background-color: #f0f8ff;
  overflow: hidden;
  position: relative;
  &:before {
    content: '';
    position: absolute;
    height: 100%;
    width: 100%;
    top: 0;
    left: -500px;
    background-image: linear-gradient(
      90deg,
      rgba(255, 255, 210, 0),
      rgba(255, 255, 210, 0.6),
      rgba(255, 255, 210, 0)
    );
    animation: progress 0.5s ease-in-out infinite;
    @keyframes progress {
      0% {
        left: -500px;
      }
      100% {
        left: 500px;
      }
    }
  }
  ${props => (props.inheritedStyles ? props.inheritedStyles : '')};
`;

const SkeletonLine = props => <WrappedComponent {...props} />;

export default SkeletonLine;