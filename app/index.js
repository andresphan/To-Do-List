const yargs = require('yargs');
const { readAllTask, createTask, readDetail, updateTask, deleteById } = require('./model/task');
const chalk = require('chalk');
yargs.command({
    command: "test",
    handler: () => {

        console.log('test');
    }


});

yargs.command({
    command: "create",
    builder: {
        title: {
            type: "string",
        },
        description: {
            type: "string",

        }
    },
    handler: (args) => {
        const { title, description } = args;
        const newTask = createTask(title, description);
        console.log('Succesfully created: ', newTask);

    }


});
yargs.command({
    command: "read-all",
    handler: () => {

        const task = readAllTask()
        console.log(chalk.red("taskJson: ", task));
    }


});
yargs.command({
    command: "read-detail",
    builder: {
        id: {
            type: "string",
        }
    },
    handler: (args) => {
        const { id } = args;
        const task = readDetail(id);
        if (task)
            console.log("task: ", task);
        else
            console.log("Not Found");
    }


});
yargs.command({
    command: "update",
    builder: {
        id: {
            type: "string",
        },
        title: {
            type: "string",
        },
        description: {
            type: "string",

        }
    },
    handler: (args) => {
        const { id, title, description } = args;
        const check = updateTask(id, title, description);
        if (check) {
            console.log("Succesfully Updated");
        } else {
            console.log("Failed to update");
        }
    }
})

yargs.command({
    command: "delete",
    builder: {
        id: {
            type: "string",
        }
    },
    handler: (args) => {
        const { id } = args;
        const check = deleteById(id);
        if (check === true) {
            console.log("Sucessfully deleted!");
        } else {
            console.log("Failed to delete");
        }
    }


})
yargs.parse();