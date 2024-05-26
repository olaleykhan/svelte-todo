<script lang="ts">
  import {TODO_DUMMY} from './lib/constants';
  import TodoItem from '$components/TodoItem.svelte';

    let todoInput = '';
  function handleSubmit(){
    console.log('submit');
    console.log(todoInput);
  
  }
</script>

<main>
main
<h2> Our todo App</h2>

<ul>
  {#each TODO_DUMMY as todo}
    <TodoItem todo={todo} />
  {/each}
</ul>

<div>
  <form on:submit|preventDefault={handleSubmit} >
    <div class="input-wrapper">
      <input class="todo-input" type="text" placeholder="Add a new todo" bind:value={todoInput} />
    </div>
    <div class="button-wrap" >
      <button class="btn"> Add Todos</button>
    </div>
  </form>

  <!-- <area alt="notde test"> -->


  <section>
    <p> {todoInput} </p>
  </section>

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
    margin-top: 10px;
  }
  .btn {
    padding: 10px 20px;
    background-color: #333;
    color: #fff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    margin-top: 20px;
  }
  .btn:hover {
    background-color: #555;
    color: #fff ;
  }


</style>
