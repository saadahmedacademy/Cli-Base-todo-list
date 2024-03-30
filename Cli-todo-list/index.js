#! /usr/bin/env node
// This is a simple todo-list project:
import inquirer from 'inquirer';
// main list to store data
let todosData = ['\nMy name is saad ahmed', '\nToday I will have to attend zoom class.', '\nToday I will create a todo-list project.', '\nThen I will Push this project on github. ', '\nThen I will submit my project tomorrow.'];
// To repeat the process
let toRepeat = true;
while (toRepeat) {
    let todoOptions = await inquirer.prompt({
        name: 'options',
        type: "list",
        message: "\nWhat do you want to do ?",
        choices: ["Show TodoList", "Add Todos", "Delete Last items", "Delete All"]
    });
    // Condition to select todo Options
    if (todoOptions.options == "Show TodoList") {
        console.log(`Here are your todo items:\n${todosData.join('')}`);
    }
    else if (todoOptions.options == "Add Todos") {
        let addTodo = await inquirer.prompt([
            {
                name: 'input1',
                type: "input",
                message: "\nWhat do you want to add in list?",
            },
            {
                name: 'addMore',
                type: 'confirm',
                message: "\nDo you want to do add anything else ?",
            }
        ]);
        if (addTodo.addMore) {
            let addMoreInput = await inquirer.prompt({
                name: 'input2',
                type: "input",
                message: "\nWhat do you want to add more?",
            });
            todosData.push('\n' + addTodo.input1);
            todosData.push('\n' + addMoreInput.input2);
            console.log('\nHere is your todo items list:');
            console.log(`${todosData.join('')}`);
        }
        else {
            todosData.push('\n' + addTodo.input1);
            console.log('\nHere is your todo items list:');
            console.log(`${todosData.join('')}`);
        }
    }
    else if (todoOptions.options == "Delete Last items") {
        let removeItem = todosData.pop();
        console.log(`${removeItem} has been deleted from TodoItems`);
        console.log('Now this is your todo items list:');
        console.log(`${todosData.join('')}`);
    }
    else if (todoOptions.options == "Delete All") {
        todosData = [];
        console.log('\nAll todo items have been deleted.');
    }
}
