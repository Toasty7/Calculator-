
    let apple1 = Number(prompt("Enter a number..."))
    operation = prompt("+,-,*,/")
    let apple2 = Number(prompt("Enter a number..."))
    result = ""
    if (operation === "+") {
        result = apple1 + apple2;

    }
    else if (operation === "*") {
        result = apple1 * apple2;
    }

    else if (operation === "/") {
        result = apple1 / apple2;
    }

    else if (operation === "-") {
        result = apple1 - apple2;
    }
    else (
        result = "error"
    )
document.open()
document.write(
    `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
        <script src="calculator.js"></script>
    </head>
    <body>
        <p>` + result + `</p>
    </body>
    </html>`
    )
document.close

