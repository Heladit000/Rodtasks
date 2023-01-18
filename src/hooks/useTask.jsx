import useLocalStorage from "@hooks/useLocalStorage";

const useTask = ({ taskListName, taskTemplate }) => {
  const {
    items: tasks,
    updateItems: setTasks,
    loaded,
    error,
  } = useLocalStorage(taskListName, []);

  const findTaskIndex = (id) => {
    return tasks.findIndex((task) => task.id === id);
  };

  const deleteTask = (id) => {
    const indexFilterTask = findTaskIndex(id);

    const copyTasks = [...tasks];

    copyTasks.splice(indexFilterTask, 1);

    setTasks(copyTasks);
  };

  const completeTask = (id) => {
    const indexFilterTask = findTaskIndex(id);

    const copyTasks = [...tasks];

    copyTasks[indexFilterTask].completed = true;

    setTasks(copyTasks);
  };

  const unCompleteTask = (id) => {
    const indexFilterTask = findTaskIndex(id);

    const copyTasks = [...tasks];

    copyTasks[indexFilterTask].completed = false;
    setTasks(copyTasks);
  };

  const updateTaskText = (id, newText) => {
    const indexFilterTask = findTaskIndex(id);

    const copyTasks = [...tasks];

    copyTasks[indexFilterTask].text = newText;
    setTasks(copyTasks);
  };

  const toggleCompleteTask = (id) => {
    const indexFilterTask = findTaskIndex(id);

    const copyTasks = [...tasks];

    copyTasks[indexFilterTask].completed =
      !copyTasks[indexFilterTask].completed;
    setTasks(copyTasks);
  };

  const createTask = (text) => {
    const copyTasks = [...tasks];
    copyTasks.push({ ...taskTemplate, text: text });

    setTasks(copyTasks);
  };

  return {
    tasks,
    loaded,
    error,
    deleteTask,
    createTask,
    updateTaskText,
    toggleCompleteTask,
    completeTask,
    unCompleteTask,
  };
};

export default useTask;
