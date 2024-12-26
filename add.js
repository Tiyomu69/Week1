const readline = require("readline");

// Function to perform the desired operation on multiple numbers
function calculator() {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
    });

    // Helper function to ask a question and return a promise
    const askQuestion = (query) =>
        new Promise((resolve) => rl.question(query, resolve));

    // Main async function
    (async function() {
        try {
            const totalNumbers = parseInt(await askQuestion("Enter the total number of numbers: "));
            if (isNaN(totalNumbers) || totalNumbers < 2) {
                console.log("Please enter a valid number greater than or equal to 2.");
                rl.close();
                return;
            }

            let numbers = [];
            for (let i = 0; i < totalNumbers; i++) {
                const num = parseFloat(await askQuestion(`Enter number ${i + 1}: `));
                if (isNaN(num)) {
                    console.log("Invalid input. Please enter a valid number.");
                    rl.close();
                    return;
                }
                numbers.push(num);
            }

            const operation = await askQuestion("Enter the operation you want to perform: +, -, *, or /: ");

            let result;
            switch (operation) {
                case "+":
                    result = numbers.reduce((a, b) => a + b, 0);
                    console.log(`The sum of the numbers is: ${result}`);
                    break;
                case "-":
                    result = numbers.reduce((a, b) => a - b);
                    console.log(`The result of subtraction is: ${result}`);
                    break;
                case "*":
                    result = numbers.reduce((a, b) => a * b, 1);
                    console.log(`The product of the numbers is: ${result}`);
                    break;
                case "/":
                    result = numbers.reduce((a, b) => a / b);
                    console.log(`The result of division is: ${result}`);
                    break;
                default:
                    console.log("Invalid operation. Please enter +, -, *, or /.");
                    break;
            }
        } catch (error) {
            console.error("An error occurred:", error);
        } finally {
            rl.close();
        }
    })();
}

// Run the calculator function
calculator();