import styled, { css } from "styled-components";

const Container = styled.div`
  background-color: teal;
  padding: 20px;
  border-radius: 5px;
`;

const Title = styled.h1`
  color: white;
  font-size: 2rem;
`;

const Button = styled.button.attrs(({ $primary }) => ({
  className: $primary ? "btn-primary" : "btn"
}))`
  background: transparent;
  border-radius: 3px;
  border: 2px solid #bf4f74;
  color: #bf4f74;
  margin: 0.5em 1em;
  padding: 0.25em 1em;

  &:hover {
    background: #bf4f74;
    color: white;
    cursor: pointer;
  }

  &:active {
    background: #a13b5d;
    border: 2px solid #a13b5d;
    color: white;
  }

  ${(props) =>
    props.$primary &&
    css`
      background: #bf4f74;
      color: white;

      &:hover {
        background: #a13b5d;
        border: 2px solid #a13b5d;
      }

      &:active {
        background: #8f3152;
        border: 2px solid #8f3152;
      }
    `}
`;


function StyledComponent() {
  return (
    <>
      <Container>
        <Title>Styled Components</Title>
      </Container>

      <Button>Normal Button</Button>
      <Button $primary>Primary Button</Button>
    </>
  );
}

export default StyledComponent;
