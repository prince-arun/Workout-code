const fieldValues = [];

function handleInputChange() {
  const inputValue = document.getElementById("inputField").value.trim();

  if (inputValue.length > 0) {
    const category = inputValue.split(" ")[0].toLowerCase();
    const outputContainer = document.getElementById("outputContainer");

    // Check if a div with the category already exists
    const existingDiv = document.getElementById(`${category}Container`);

    if (existingDiv) {
      // If it exists, append the value to the existing div
      const valueDiv = document.createElement("div");
      valueDiv.textContent = inputValue;
      existingDiv.appendChild(valueDiv);
    } else {
      // If it doesn't exist, create a new div container
      const newDiv = document.createElement("div");
      newDiv.id = `${category}Container`;

      const heading = document.createElement("h3");
      heading.textContent = `${category} Fields`;
      newDiv.appendChild(heading);

      const valueDiv = document.createElement("div");
      valueDiv.textContent = inputValue;
      newDiv.appendChild(valueDiv);

      outputContainer.appendChild(newDiv);
    }
  }
}
