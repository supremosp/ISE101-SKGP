import React as Reactjt from "react";
import { StatusBar as StatusBarjt } from "react-native";
import TaskScreenjt from "./screens/TaskScreen";

export default function Appjt() {
  return (
    <>
      <StatusBarjt barStyle="dark-content" backgroundColor="#f4fbfc" />
      <TaskScreenjt />
    </>
  );
}
