<script lang="ts">
    // import { todoList } from '$lib/constants/todo';
    import type { Todo } from '../types/index';
    export let todo: Todo;
</script>


<li class="list">
    <div>
        <input type="checkbox" bind:checked={todo.done} />
    <span>{todo.title}</span>
    <button>❌</button>
    </div>
  {#if todo.description }
    <p>{todo.description}</p>
  {/if}
</li>

<style>
  .list {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem;
    border-bottom: 1px solid #ccc;
  }
</style>