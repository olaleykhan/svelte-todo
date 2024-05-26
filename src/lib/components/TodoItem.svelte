<script lang="ts">
    // import { todoList } from '$lib/constants/todo';
    import type { Todo } from '../types/index';
    export let todo: Todo;
</script>


<li>
    <div>
        <input type="checkbox" bind:checked={todo.done} />
    <span>{todo.title}</span>
    <button>❌</button>
    </div>
  {#if todo.description }
    <p>{todo.description}</p>
  {/if}
</li>