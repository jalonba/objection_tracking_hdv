import React from "react";
import TaskList from "../components/TaskList";

function HomePage() {
  return (
    <div>
      <h1>Bienvenido a: Seguimiento de Glosas y Tareas </h1>
      <TaskList showDescription={true} />
    </div>
  );
}

export default HomePage;
