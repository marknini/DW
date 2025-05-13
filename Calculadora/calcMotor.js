const appendToDisplay = (value) => {
    document.getElementById('display').value += value;
  };
  
  const clearDisplay = () => {
    document.getElementById('display').value = '';
  };
  
  const calculate = () => {
    try {
      const result = eval(document.getElementById('display').value);
      document.getElementById('display').value = result;
    } catch (error) {
      document.getElementById('display').value = 'Erro';
    }
  };