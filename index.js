let every_inputs = document.querySelectorAll("input");

every_inputs.forEach(input => {
  input.addEventListener('input', () => {
    if (input.type === 'text') {
      if (/[^a-zA-Z]/.test(input.value)) {
        input.style.border = '2px solid red';
        input.style.color = 'red';
      } else {
        input.style.border = '';
        input.style.color = 'black';
      }
    } else if (input.type === 'number') {
      if (/[a-zA-Z]/.test(input.value)) {
        input.style.border = '2px solid red';
        input.style.color = 'red';
      } else {
        input.style.border = '';
        input.style.color = 'black';
      }
    }
  });
});
