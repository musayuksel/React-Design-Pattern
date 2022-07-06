import React, { useState } from "react";

export default function UncontrolledOnboardingFlow({ children, onFinish }) {
  //   //take the children and render them
  //   //when the user clicks the finish button, call the onFinish function
  const [onboardingData, setOnboardingData] = useState({});
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToNext = (stepData) => {
    setCurrentIndex(currentIndex + 1);
  };

  const currentChild = React.Children.toArray(children)[currentIndex];
  //   we can add next button to here OR the better way is to add it to the child component
  if (React.isValidElement(currentChild)) {
    return React.cloneElement(currentChild, { goToNext });
  }

  return currentChild;
}
