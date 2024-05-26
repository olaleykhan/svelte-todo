<script lang="ts">
  // import { todoList } from '$lib/constants/todo';
  import type { Todo } from "../types/index";
  import {createEventDispatcher} from 'svelte';

  const dispatch = createEventDispatcher<{
    deleteTodo: string|number;
  }>();

  export let todo: Todo;
  function handleDelete() {
    console.log("delete", todo.id);
    dispatch("deleteTodo", todo.id);
  }
</script>

<li class="list">
  <div>
    <input type="checkbox" bind:checked={todo.done} />
    <span>{todo.title}</span>
    <button on:click={handleDelete} >❌</button>
  </div>
  <div>
    {#if todo.description}
    <!-- cross out if done  -->
      <p
        style="text-decoration: {todo.done ? 'line-through' : 'none'}"
      >{todo.description}</p>
    {/if}
  </div>
</li>

<style>
  .list {
    padding: 0.2rem 0.5rem 0.5rem;
    border-bottom: 1px solid #ccc;
    list-style: none;
  }
  .list div {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
</style>
