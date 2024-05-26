<script lang="ts">
  import Todo from "$components/Todo.svelte";
  import type { Todos } from "$types/index.ts";
  let TODO_DUMMY:Todos = []
</script>



<h2>Our todo App</h2>
<Todo  bind:todos={TODO_DUMMY}/>