import './style.css';

import { crearTodoHtml } from './js/componentes.js';

import {Todo , TodoList   } from './classes';


 export const todoList = new TodoList();

const tarea = new Todo('primera tarea');
const  tarea2 = new Todo('segunda tarea');

todoList.nuevoTodo( tarea );
todoList.nuevoTodo( tarea2 );

console.log(todoList);

crearTodoHtml(tarea2);
crearTodoHtml(tarea);
