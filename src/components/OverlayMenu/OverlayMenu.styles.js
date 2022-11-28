import styled from 'styled-components';

export const Overlay = styled.div`
  width: 75%;
  height: 100%;
  position: fixed;
  opacity: ${props => (props.menuOpen ? '1' : '0')};
  transform: ${props =>
    props.menuOpen ? 'translateX(0%)' : 'translateX(100%)'};
  z-index: 100000;
  background: #a28686;
  right: 0px;
  transition: all 0.3s ease;
  @media (min-width: 650px) {
    width: 60%;
  }
  @media (min-width: 730px) {
    width: 55%;
  }
  @media (min-width: 990px) {
    display: none;
  }

  ul {
    list-style: none;
    margin: 0;
    padding: 1em;
    background-color: #2d2d2d;
    padding-top: 3em;
  }

  ul li a {
    color: #fff;
  }

  h2 {
    color: #000;
    display: block;
    padding: 2em 1em;
    background-color: #000000a8;
    background-color: #cc9966;
  }
  .inner {

    .invertedLogo {
      max-width: 200px;
      margin: 0 0 60px 0;
    }

    .overlayMenu {
      text-align: left;
      list-style-type: none;
      margin: 0;

      li {
        margin: 0 0 20px 0;
      }

      a {
        font-family: 'Teko', Arial, Helvetica, sans-serif;
        font-size: 1.5rem;
        transition: all 0.3s ease;
        text-decoration: none;

        :hover {
          color: #993300;
          color: #cc9966;
        }
      }
      a.overlayActive {
        color: #cc9966;
      }

    }
  }

  .closeButton {
    position: absolute;
    top: 50px;
    right: 50px;
    width: 30px;
    height: 30px;
    cursor: pointer;
    transition: all .25s ease;
    outline: none;

    :hover {
      transform: scale(1.2);
    }
  }
  .overlay-cta {
    text-align: center;
    a {
      display: inline-block;
      color: #fff;
      padding: .5em 1em;
      text-align: center;
      background-color: #333;
      margin: .25em 0;
      border-radius: 2px;
      width: 80%;
      max-width: 400px;
      background-color: #7a4917;
      transition: all .25s;
      :hover {
        background-color: #521d02;
      }
    }
  }
`;
