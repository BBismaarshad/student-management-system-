import inquirer from "inquirer";
const randomNumber = Math.floor(10000 + Math.random() * 90000);
let myBalance = 0;
let answer = await inquirer.prompt([
    {
        type: "input",
        name: "students",
        message: " Kindly enter student name:",
        validate: function (value) {
            if (value.trim() !== "") {
                return true;
            }
            return "Please enter a non-empty value.";
        },
    },
    {
        type: "list",
        name: "courses",
        message: "Select the course to enorlled",
        choices: ["HTML", "CSS", "Javascript", "Typescript", "Python"],
    },
]);
const courseFees = {
    HTML: 1500,
    CSS: 2000,
    Javascript: 3000,
    Typescript: 3000,
    Python: 6000,
};
console.log(`\ncourses Fees:${courseFees[answer.courses]}/-`);
console.log(`Balance: ${myBalance}`);
let paymentMethod = await inquirer.prompt([
    {
        type: "list",
        name: "payment",
        message: "Please select payment method",
        choices: ["Easypaisa", "Jazzcash", "Bank Transfer"],
    },
    {
        type: "input",
        name: "Amount",
        message: "Fees Transfer",
        validate: function (value) {
            if (value.trim() !== "") {
                return true;
            }
            return "enter a non-empty value.";
        },
    },
]);
console.log(`\n Select your payment method ${paymentMethod.payment}`);
const coursesFees = courseFees[answer.courses];
const paymentAmount = parseFloat(paymentMethod.Amount);
if (coursesFees === paymentAmount) {
    console.log(`You have successfully enrolled in ${answer.courses}.`);
    let message = await inquirer.prompt([
        {
            type: "list",
            name: "Choose",
            message: "What would you like to do next step?",
            choices: ["View details", "Exit"],
        },
    ]);
    if (message.Choose === "View details") {
        console.log("\ndetails\n");
        console.log(`Student Name: ${answer.students}`);
        console.log(`Student Id: ${randomNumber} `);
        console.log(`Course: ${answer.courses}`);
        console.log(`Courses Fees paid: ${paymentAmount}`);
        console.log(`Balance: ${(myBalance += paymentAmount)}`);
    }
    else {
        console.log("\nExiting Out\n");
    }
}
else {
    console.log("Invalid amount due to course");
}
