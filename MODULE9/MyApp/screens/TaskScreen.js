import Reactjt, { useRef as useRefjt, useState as useStatejt } from "react";
import {
  Button as Buttonjt,
  FlatList as FlatListjt,
  SafeAreaView as SafeAreaViewjt,
  StyleSheet as StyleSheetjt,
  Text as Textjt,
  TextInput as TextInputjt,
  View as Viewjt,
} from "react-native";
import Footerjt from "../components/Footer";
import Headerjt from "../components/Header";
import TaskItemjt from "../components/TaskItem";

const initialTasksjt = [
  { id: "sample-1", title: "Read React docs" },
  { id: "sample-2", title: "Finish homework" },
  { id: "sample-3", title: "Buy groceries" },
];

export default function TaskScreenjt() {
  const [taskjt, setTaskjt] = useStatejt("");
  const [tasksjt, setTasksjt] = useStatejt(initialTasksjt);
  const nextTaskIdjt = useRefjt(4);

  const addTaskjt = () => {
    const trimmedTaskjt = taskjt.trim();
    if (trimmedTaskjt.length === 0) {
      return;
    }

    const newTaskjt = {
      id: `task-${nextTaskIdjt.current}`,
      title: trimmedTaskjt,
    };
    nextTaskIdjt.current += 1;
    setTasksjt((currentTasksjt) => [...currentTasksjt, newTaskjt]);
    setTaskjt("");
  };

  const deleteTaskjt = (taskIdjt) => {
    setTasksjt((currentTasksjt) =>
      currentTasksjt.filter((currentTaskjt) => currentTaskjt.id !== taskIdjt),
    );
  };

  return (
    <SafeAreaViewjt style={stylesjt.container}>
      <Headerjt />
      <Viewjt style={stylesjt.body}>
        <Textjt style={stylesjt.title}>Task Manager</Textjt>
        <TextInputjt
          accessibilityLabel="New task"
          onChangeText={setTaskjt}
          onSubmitEditing={addTaskjt}
          placeholder="Enter a new task"
          returnKeyType="done"
          style={stylesjt.input}
          value={taskjt}
        />
        <Buttonjt title="Add Task" onPress={addTaskjt} />
        <FlatListjt
          contentContainerStyle={stylesjt.taskList}
          data={tasksjt}
          keyExtractor={(itemjt) => itemjt.id}
          ListEmptyComponent={
            <Textjt style={stylesjt.emptyMessage}>No tasks yet. Add one above!</Textjt>
          }
          renderItem={({ item: itemjt }) => (
            <TaskItemjt
              task={itemjt.title}
              onDelete={() => deleteTaskjt(itemjt.id)}
            />
          )}
        />
      </Viewjt>
      <Footerjt />
    </SafeAreaViewjt>
  );
}

const stylesjt = StyleSheetjt.create({
  container: {
    backgroundColor: "#f4fbfc",
    flex: 1,
  },
  body: {
    flex: 1,
    padding: 20,
  },
  title: {
    color: "#173d45",
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 15,
  },
  input: {
    backgroundColor: "#ffffff",
    borderColor: "#b8d1d5",
    borderRadius: 8,
    borderWidth: 1,
    fontSize: 16,
    marginBottom: 10,
    padding: 16,
  },
  taskList: {
    paddingTop: 12,
  },
  emptyMessage: {
    color: "#61777b",
    fontSize: 15,
    paddingVertical: 20,
    textAlign: "center",
  },
});
