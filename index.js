let saveChangesButton = document.getElementById("save_changes");
let important_inputs = document.getElementById("important");

saveChangesButton.onclick = () => {
  let emptyInputCount = 0;

  for (let input of important_inputs) {
    if (input.value === "") {
      input.style.border = "2px solid red";
      input.parentElement.querySelector(".texting").style.color = "red";
      emptyInputCount++;
    } 
    else {
      input.style.border = "";
      input.parentElement.querySelector(".texting").style.color = "";
    }
  }

  let fourthNumber = document.getElementById("fourth");
  fourthNumber.textContent = `${emptyInputCount}/12`;
};
