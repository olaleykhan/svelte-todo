<script lang="ts">
  import { TodoItem, TodoForm } from "$components/index";
  import type { Todos } from "../types";

  export let todos: Todos = [];

  function handleSubmit(event: CustomEvent<string>) {
    const t = new Date().getTime().toString().substr(-4);
    const newTodo = {
      id: t,
      title: t,
      description: event.detail,
      done: false,
    };

    todos = [newTodo, ...todos];
  }

  function handleDeleteTodo(event: CustomEvent<string | number>) {
    todos = todos.filter((todo) => todo.id !== event.detail);
  }
</script>

<main>
  <TodoForm on:addTodo={handleSubmit} />

  {#if todos.length > 0}
    <ul class="todo-list">
      {#each todos as todo (todo.id)}
        <TodoItem {todo} on:deleteTodo={handleDeleteTodo} />
      {/each}
    </ul>
  {:else}
    <p>No todos yet. | Please type into the box below</p>
  {/if}
</main>

<style>
  .todo-list {
    margin-top: 2rem;
    border-top: 1px solid green;
  }
</style>
