export const WeightCalculator = ({ sliderValue, radioValue }) =>
  Math.round(sliderValue * 0.01 * radioValue)
