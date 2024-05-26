<script lang="ts">
  import {TODO_DUMMY} from './lib/constants';
  import TodoItem from './lib/components/TodoItem.svelte';
</script>

<main>
main
<h2> Our todo App</h2>

<ul>
  {#each TODO_DUMMY as todo}
    <TodoItem todo={todo} />
  {/each}
</ul>
</main>

<style>

</style>
