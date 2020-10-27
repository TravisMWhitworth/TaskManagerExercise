// TASK MANAGER (Basic Version)

const menu = `TASK MANAGER / What would you like to do: / "NEW" - Add A New Task / "TASKS" - Display All Tasks / "REMOVE" - Remove A Task / "CLOSE" - Close The Task Manager`;

// Array for storing tasks
const tasks = [`Charge MacBook`, `Master JavaScript`];

// For displaying tasks to user
let showTasks = "";

// For storing the value of a new task
let newTask;

// For storing the number/index of the task to be removed
let num;

// For storing the value of the removed task
let removed;

// Displays the menu for the user to select an option
let userInput = prompt(menu);

// Loops the display menu until the user ends the program (AKA until the user enters "CLOSE")
while (userInput !== "CLOSE") {
  // Checks if the user entered "TASKS"
  if (userInput === "TASKS") {
    // Concatenates each task (or item) in the task array to the showTasks string variable
    for (task of tasks) {
      showTasks = showTasks + `${task}/`
    }
    // Displays the current tasks to the user
    alert(showTasks);
    // Sets the value of the showsTasks string variable back to an empty string
    showTasks = "";
    // Checks if the user entered "NEW"
  } else if (userInput === "NEW") {
    // Prompts the user to enter a new task and stores their response
    newTask = prompt(`Please enter the new task:`);
    // Alerts the user their new task has been added
    alert(`${newTask} has been added!`);
    // Adds the user's entry as a new item at the end of the tasks array
    tasks.push(newTask);
    // Checks if the user entered "REMOVE"
  } else if (userInput === "REMOVE") {
    // Concatenates each task (or item) in the task array to the showTasks string variable. Also, set a number/index for each task
    for (i = 0; i < tasks.length; i++) {
      showTasks = showTasks + `${i}: ${tasks[i]}/`;
    }
    // Prompts the user to enter a number and stores their response
    num = prompt(`Please enter a number to remove: ${showTasks}`);
    // Removes the selected task/item and stores the value
    removed = tasks.splice(num, 1);
    // Alerts user of the task/item that has been removed (NOTE: Will still work with the zero index: [0])
    alert(`${removed[0]} has been removed`);
    // Sets the value of the showsTasks string variable back to an empty string
    showTasks = "";
  }
  // Displays the menu again
  userInput = prompt(menu);
}
// Alerts the user they have closed the program
alert(`Thank you for using Task Manager!`);