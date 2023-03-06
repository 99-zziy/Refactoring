export function adjustedCapital(instrument) {
  if (isEligibleForAdjustedCapital(instrument)) {
    return (instrument.income / instrument.duration) * instrument.adjustmentFactor;
  }
  return 0;
}

function isEligibleForAdjustedCapital(instrument) {
  return instrument.capital > 0 && instrument.interestRate > 0 && instrument.duration > 0
}
