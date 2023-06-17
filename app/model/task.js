const fs = require('fs');
const readAllTask = function () {
    const buffer = fs.readFileSync('task.json');
    const taskString = buffer.toString();
    const taskJson = JSON.parse(taskString);
    return taskJson;
}

const createTask = function (title, description) {
    const newTask = {
        id: Math.random().toString(),
        title,
        description,
    }
    let getTask = readAllTask();
    getTask = [...getTask, newTask];
    fs.writeFileSync("task.json", JSON.stringify(getTask));
    return newTask;

}

const readDetail = function (id) {

    let getTask = readAllTask();
    const getTaskById = getTask.find((item) => item.id === id); return getTaskById;



}

const updateTask = function (id, title, description) {


    let getTask = readAllTask();
    const indexFound = getTask.findIndex((item) => item.id === id);
    if (indexFound !== -1) {
        const oldTask = getTask[indexFound];
        newTask = { ...oldTask, title, description };
        getTask[indexFound] = newTask;
        fs.writeFileSync("task.json", JSON.stringify(getTask));
        return 1;


    } else {
        return 0;
    }




};

const deleteById = function (id) {

    const getTask = readAllTask();
    const indexFound = getTask.findIndex((item) => item.id === id);
    if (indexFound !== -1) {
        const task = getTask.find((item) => item.id === id);
        const newTask = getTask.filter((item) => item.id !== id);
        fs.writeFileSync("task.json", JSON.stringify(newTask));
        console.log("You have just deleted: ", task);
        return true;

    } else {

        return false;
    }








}







module.exports = { readAllTask, createTask, readDetail, updateTask, deleteById };