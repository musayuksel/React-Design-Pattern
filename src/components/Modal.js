import React from "react";
import { useState } from "react";
import styled from "styled-components";
const ModalBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1;
`;
const ModalBody = styled.div`
  background-color: white;
  margin: 10% auto;
  padding: 20px;
  width: 80%;
`;
export default function Modal({ children }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <button onClick={() => setIsOpen(true)}>Show Modal</button>
      {isOpen && (
        <ModalBackground onClick={() => setIsOpen(false)}>
          <ModalBody onClick={(e) => e.stopPropagation()}>
            <button onClick={() => setIsOpen(false)}>Hide Modal</button>
            {children}
          </ModalBody>
        </ModalBackground>
      )}
    </>
  );
}
