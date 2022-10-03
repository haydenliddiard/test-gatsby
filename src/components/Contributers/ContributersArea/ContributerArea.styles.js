import styled from "styled-components";

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 20px;
  max-width: 1180px;
  margin: 0 auto;
  margin-bottom: 2em;
  padding: 0 20px;
  padding-top: 2em;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-columns: 1fr 1fr;
    max-width: 1000px;
  }
`;