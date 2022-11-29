import styled from 'styled-components';

export const HamburgerButton = styled.div`
  position: fixed;
    right: 0.5em;
    top: 1.25em;
    right: 1.5em;

div {
  border-radius: 2px;
  padding: 2px;
  width: 30px;
  margin: 3px;
  transition: all 0.6s;
  background-color: ${props => (props.menuOpen ? '#fff' : '#000')};
}

#one {
  transform: rotate(0deg);
  transform-origin: 100%;
  opacity: ${props => (props.menuOpen ? '0' : '1')};
}
#two {
  margin-top: 0;
  margin-bottom: 0;
  transform-origin: 100%;
  transform: translateY(3px);
  transform: ${props => (props.menuOpen ? 'rotate(-45deg) translateX(2px) translateY(-10px)' : 'rotate(0deg) translateX(0px) translateY(2px)')};
}
#three {
  margin-top: 0;
  margin-bottom: 0;
  transform-origin: 100%;
  transform: translateY(-4px);
  transform: ${props => (props.menuOpen ? 'rotate(45deg) translateX(2px) translateY(10px)' : 'rotate(0deg) translateX(0px) translateY(-2px)')};
}
#four {
  margin-bottom: 0;
  transform-origin: 100%;
  opacity: ${props => (props.menuOpen ? '0' : '1')};
}
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

    @media (min-width: 992px) {
      display: none;
    }
  }

  @media (min-width: 300px) {
    right: 1.5em;
  }

  @media screen and (min-width: 990px) {
    display: none;
  }

`;