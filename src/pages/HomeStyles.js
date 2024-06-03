import styled from "styled-components";

export const HeadTitle = styled.div`
  display: grid;
  // justify-content: space-around;
  // align-items: center;
  grid-template-columns: 40vw 60vw;
  gap: 1rem;
  padding: 1rem;

  height: 500px;
  background-color: #f1f1f1;

  h2, div {
    position: relative;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
  }
`;