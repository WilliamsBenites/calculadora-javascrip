

const display = document.querySelector("#display");
const buttons = document.querySelectorAll("button");

buttons.forEach(button => {
    button.addEventListener("click", () => {
        const buttonId = button.id;

        
        if (buttonId === "=") {
            try {
                display.value = eval(display.value);
            } catch {
                display.value = "Error"; 
            }
        }
       
        else if (buttonId === "ac") {
            display.value = "";
        }
      
        else if (buttonId === "de") {
            display.value = display.value.slice(0, -1);
        }
      
        else {
            display.value += buttonId;
        }
    });
});
