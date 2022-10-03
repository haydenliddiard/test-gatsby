import styled from 'styled-components';

export const HamburgerButton = styled.div`
  img {
    position: fixed;
    display: block;
    z-index: 100000;
    right: 30px;
    top: 20px;
    width: 40px;
    height: 40px;
    cursor: pointer;
    transition: all 0.5s ease;
    padding: 3px;
    border-radius: 3px;
    
    :hover {
      background-color: #cc9966;
      border-top: 1px solid;
      border-left: 1px solid;
    }
    @media (min-width: 992px) {
      display: none;
    }
  }

`;