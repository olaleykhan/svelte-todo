<script lang="ts">
    import TodoItem from '$components/TodoItem.svelte';
  import type { Todos } from '../types';

    export let todos:Todos = [];
  
      let todoInput = '';
    function handleSubmit(){
      let t = new Date().getTime().toString()
    //   get only the last 4 substring of t
    t = t.substr(t.length - 4)
      const newTodo = {
        id: t,
        title:t,
        description:todoInput,
        done: false
      }

      todos = [newTodo, ...todos];
        todoInput = '';
    
    }
  </script>


  
  <main>
  <h2> Our todo App</h2>



  {#if !todos.length}
    <p> No todos yet. | Please type into the box below</p>
  {/if}
  
{#if todos.length > 0}
  {#each todos as todo (todo.id)}
    <TodoItem {todo} />
  {/each}
  
  {/if}

  
  <div>
    <form on:submit|preventDefault={handleSubmit}  class="form" >
      <div class="input-wrapper">
        <input class="todo-input" type="text" placeholder="Add a new todo" bind:value={todoInput} />
      </div>
      <div class="button-wrap" >
        <button class="btn"> Add Todos</button>
      </div>
    </form>
  </div>
  </main>
  
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
      color: #fff ;
    }
    
    .form {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        margin-top: 32px;
    }
  
  </style>
  