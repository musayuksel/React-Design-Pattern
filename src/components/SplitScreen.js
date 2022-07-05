import React from "react";
import styled from "styled-components";
const Container = styled.section`
  display: flex;
`;
const Pane = styled.section`
  flex: ${(props) => props.weight};
`;
export default function SplitScreen({
  //   left: Left,
  //   right: Right,
  children,
  leftWeight = 1,
  rightWeight = 1,
}) {
  const [left, right] = children;
  //Elements, not components
  return (
    <>
      <Container>
        <Pane weight={leftWeight}>
          {/* <Left /> */}
          {left}
        </Pane>
        <Pane weight={rightWeight}>
          {/* <Right /> */}
          {right}
        </Pane>
      </Container>
    </>
  );
}
