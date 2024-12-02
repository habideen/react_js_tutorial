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

const Button = styled.button`
  background: transparent;
  border-radius: 3px;
  border: 2px solid #bf4f74;
  color: #bf4f74;
  margin: 0.5em 1em;
  padding: 0.25em 1em;

  ${(props) =>
    props.$primary &&
    css`
      background: #bf4f74;
      color: white;
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
