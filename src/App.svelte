<script lang="ts">
  import Todo from "$components/Todo.svelte";
  import type { Todos } from "$types/index.ts";
  let TODO_DUMMY:Todos = []
</script>


<Todo  bind:todos={TODO_DUMMY}/>