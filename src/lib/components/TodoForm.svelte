<script lang="ts">
  import { createEventDispatcher } from "svelte";
  // add types
  const dispatch = createEventDispatcher<{
    addTodo: string;
  }>();

  let todoInput = "";

  function handleSubmit() {
    dispatch("addTodo", todoInput);
    todoInput = "";
  }
</script>

<div>
  <form on:submit|preventDefault={handleSubmit} class="form">
    <div class="input-wrapper">
      <input
        class="todo-input"
        type="text"
        placeholder="Add a new todo"
        bind:value={todoInput}
      />
    </div>
    <div class="button-wrap">
      <button class="btn"> Add Todos</button>
    </div>
  </form>
</div>

<style>
  .input-wrapper {
    display: flex;
    justify-content: center;
  }
  .todo-input {
    width: 50%;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    outline: none;
  }
  .button-wrap {
    display: flex;
    justify-content: center;
    /* margin-top: 10px; */
  }
  .btn {
    /* padding: 10px 20px; */
    background-color: #333;
    color: #fff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }
  .btn:hover {
    background-color: #555;
    color: #fff;
  }

  .form {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin-top: 32px;
  }
</style>
