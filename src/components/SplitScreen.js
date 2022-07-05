import React from "react";
import styled from "styled-components";
const Container = styled.section`
  display: flex;
`;
const Pane = styled.section`
  flex: ${(props) => props.weight};
`;
export default function SplitScreen({
  left: Left,
  right: Right,
  leftWeight = 1,
  rightWeight = 1,
}) {
  return (
    <>
      <Container>
        <Pane weight={leftWeight}>
          <Left />
        </Pane>
        <Pane weight={rightWeight}>
          <Right />
        </Pane>
      </Container>
    </>
  );
}
