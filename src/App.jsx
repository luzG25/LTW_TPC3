import React, { useReducer, useState } from "react";
import "./App.css";

//objeto para armazenar as strings de todas
//as ações possiveis
const ACTIONS = {
  ADD_TASK: "add_task",
  TOGGLE_TASK: "toogle_task",
  REMOVE_TASK: "remove_task",
  SET_FILTER: "setfilter",
};

//a funcao reducer contém toda a logica para
//modificar o nosso estado
function reducer(tasks, action) {
  switch (action.type) {
    case ACTIONS.ADD_TASK:
      return [
        ...tasks,
        {
          id: Date.now(),
          name: action.payload.name.trim(),
          completed: false,
        },
      ];

    case ACTIONS.TOGGLE_TASK:
      return tasks.map((task) =>
        task.id === action.payload.id
          ? { ...task, completed: !task.completed }
          : task
      );

    case ACTIONS.REMOVE_TASK:
      return tasks.filter((task) => task.id !== action.payload.id);

    default:
      return tasks;
  }
}

function App() {
  //o useReducer é semelhante ao useState
  //rederiza novamente quando o estado muda
  //A unica diferença relevante é que passa uma funcao redutora
  const [tasks, dispatch] = useReducer(reducer, [
    { id: 1, name: "Aprender useState", completed: false },
    { id: 2, name: "Criar exemplo prático", completed: true },
  ]);

  const [filter, setFilter] = useState("all"); // Opções: "all", "pending", "completed"
  const [newTaskName, setNewTaskName] = useState("");

  //nao é possivel refratorar os filtros
  //porque os filtros nao alteram diretamente o array
  const filteredTasks = tasks.filter((task) => {
    if (filter === "pending") return !task.completed;
    if (filter === "completed") return task.completed;
    return true;
  });

  return (
    <div className="main">
      <h1>Gerenciador de Tarefas</h1>
      <div>
        <input
          type="text"
          value={newTaskName}
          onChange={(e) => setNewTaskName(e.target.value)}
          placeholder="Nova tarefa"
        />
        <button
          onClick={() => {
            dispatch({
              type: ACTIONS.ADD_TASK,
              payload: { name: newTaskName },
            });
            setNewTaskName("");
          }}
        >
          Adicionar
        </button>
      </div>
      <div className="comandos">
        <button onClick={() => setFilter("all")}>Todos</button>
        <button onClick={() => setFilter("pending")}>Pendentes</button>
        <button onClick={() => setFilter("completed")}>Concluídas</button>
      </div>
      <ul>
        {filteredTasks.map((task) => (
          <li key={task.id}>
            <span
              style={{
                textDecoration: task.completed ? "line-through" : "none",
              }}
            >
              {task.name}
            </span>
            <button
              onClick={() => {
                dispatch({
                  type: ACTIONS.TOGGLE_TASK,
                  payload: { id: task.id },
                });
              }}
            >
              {task.completed ? "Desfazer" : "Concluir"}
            </button>
            <button
              onClick={() => {
                dispatch({
                  type: ACTIONS.REMOVE_TASK,
                  payload: { id: task.id },
                });
              }}
            >
              Remover
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
