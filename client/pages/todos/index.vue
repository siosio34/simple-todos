<template>
  <v-container fluid>
    <v-layout>
      <v-flex xs12>
        <AppTodoList :todos="todos"
                     @done="done"
                     @favorite="favorite" />
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script lang="ts">
import Component, { Getter, Vue, namespace } from 'nuxtjs-extensions';

import { TodoViewModel } from '../../types/store/todo';

const TodoGetter = namespace('todo', Getter);

@Component({
  components: {
    AppTodoList: () => import('../../components/AppTodoList.vue')
  }
})
export default class Todos extends Vue {
  @TodoGetter todos: TodoViewModel[];

  async fetch({ store }) {
    await store.dispatch('todo/fetchTodos', { limit: 10, offset: 0 });
  }

  done(todo) {
    todo.isDone = !todo.isDone;
  }

  favorite(todo) {
    todo.isFav = !todo.isFav;
  }
}
</script>
