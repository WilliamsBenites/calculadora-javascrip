## Input 
    Aquí seleccionamos el campo de texto (input) con el ID display, que es donde se mostrará el resultado de las operaciones de la calculadora

## buttons
    buttons: Seleccionamos todos los botones en la página usando querySelectorAll("button"). Esto nos devuelve una lista de todos los botones del HTML

    forEach: Usamos forEach para iterar sobre todos los botones.

    addEventListener: A cada botón le asignamos un evento de clic (click), de modo que cuando el usuario haga clic en un botón, se ejecute la función interna.

## Logica matematica
    Si el ID del botón es =, evaluamos la expresión matemática que está escrita en el display usando eval().
    eval(): 
    Evalúa la cadena que aparece en el display como si fuera código JavaScript. Esto permite realizar las operaciones matemáticas.

    try-catch: 
    Si la expresión es inválida (por ejemplo, una división por cero o una operación mal escrita), el bloque catch captura el error y muestra "Error" en el display.

## El boton DE
    Si el botón tiene el ID de, eliminamos el último carácter ingresado en el display usando slice(0, -1). Esto toma todos los caracteres de la cadena, excepto el último.  