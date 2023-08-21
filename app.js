const readline = require('readline-sync');

const tasks = [];

function addTask() {
    return new Promise((resolve) => {
        const indicator = readline.question('Task indicator: ');
        const description = readline.question('Task description: ');
        tasks.push({ indicator, description, completed: false });
        console.log('Added task.');
        resolve();
    });
}

function deleteTask() {
    return new Promise((resolve, reject) => {
        const index = parseInt(readline.question('Index of the task to delete: '));
        if (index >= 0 && index < tasks.length) {
            tasks.splice(index, 1);
            console.log('Task deleted.');
            resolve();
        } else {
            console.log('Invalid index.');
            reject('Invalid index.');
        }
    });
}

function completeTask() {
    return new Promise((resolve, reject) => {
        const index = parseInt(readline.question('Index of the completed task: '));
        if (index >= 0 && index < tasks.length) {
            tasks[index].completed = true;
            console.log('Task marked as completed.');
            resolve();
        } else {
            console.log('Invalid index.');
            reject('Invalid index.');
        }
    });
}

function printTasks() {
    console.log('\nLista de tareas:');
    tasks.forEach((task, index) => {
        console.log(`${index}. [${task.completed ? 'X' : ' '}] ${task.indicator}: ${task.description}`);
    });
}

async function main() {
    while (true) {
        console.log('\nOptions:');
        console.log('1. Add Task');
        console.log('2. Delete task');
        console.log('3. Mark task as completed');
        console.log('4. Show tasks');
        console.log('5. Exit');
        const choice = parseInt(readline.question('Choose an option: '));

        switch (choice) {
            case 1:
                await addTask();
                break;
            case 2:
                await deleteTask();
                break;
            case 3:
                await completeTask();
                break;
            case 4:
                printTasks();
                break;
            case 5:
                console.log('¡see you later, See you!!');
                process.exit(0);
            default:
                console.log('Invalid option.');
        }
    }
}

main();
