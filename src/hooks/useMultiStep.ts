import { ReactElement, useState } from "react";

export function useMultiStep(steps: ReactElement[]) {
  const [currentStep, setCurrentStep] = useState(0);

  function next() {
    setCurrentStep(i => {
      // don't go out of bound
      if (i >= steps.length - 1) return i;
      return i + 1;
    })
  }

  function back() {
    setCurrentStep(i => {
      // don't go back: inx[0]
      if (i <= 0) return i;
      return i - 1;
    })
  }

  function goTo(index: number) {
    setCurrentStep(index);
  }

  return {
    currentStep,
    step: steps[currentStep],
    goTo,
    next,
    back,
    isFistStep: currentStep === 0,
    isLastStep: currentStep === steps.length - 1,
  }
}