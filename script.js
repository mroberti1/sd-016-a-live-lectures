const numeratorInput = document.querySelector('#numerator');
const denominatorInput = document.querySelector('#denominator');
const spanResult = document.querySelector('#result');

function divideTwoNumbers(numerator, denominator) {
  // Se numerator e denominator são números
  // Se numerator ou denominator não forem números, eu quero que isso seja tratado como um erro
  if (Number.isNaN(numerator) || Number.isNaN(denominator)) {
    // Código lance uma exceção
    throw new Error('Apenas números são permitidos');
  }
  return numerator / denominator;
}

function handleCalculateButtonClick() {
  const numeratorValue = Number(numeratorInput.value);
  const denominatorValue = Number(denominatorInput.value);
  // Try Catch
  try {
    const result = divideTwoNumbers(numeratorValue, denominatorValue);
    spanResult.innerHTML = result;
  } catch (error) {
    spanResult.innerHTML = '';
    alert(error);
  }
}

window.onload = () => {
  const calculateButton = document.querySelector('#calculateDivision');
  calculateButton.addEventListener('click', handleCalculateButtonClick);
}