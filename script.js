// Change text content dynamically
function changeText() {
    const textElement = document.getElementById("dynamic-text");
    if (textElement) {
      textElement.textContent = "The text has been changed!";
    }
  }
  
  // Modify CSS styles
  function changeStyle() {
    const styleElement = document.getElementById("style-text");
    if (styleElement) {
      styleElement.classList.toggle("highlight");
    }
  }
  
  // Add an element to the DOM
  function addElement() {
    const container = document.getElementById("element-container");
    const existing = document.getElementById("new-element");
  
    if (container && !existing) {
      const newDiv = document.createElement("div");
      newDiv.id = "new-element";
      newDiv.textContent = "I am a new element!";
      container.appendChild(newDiv);
    }
  }
  
  // Remove an element from the DOM
  function removeElement() {
    const existingElement = document.getElementById("new-element");
    if (existingElement) {
      existingElement.remove();
    }
  }
  