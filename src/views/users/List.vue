<template>
  <div>
    <div class="row justify-content-between p-3">
      <input type="text" class="form-control" placeholder="Buscar" />
    </div>
    <div class="list-group my-custom-scrollbar">
      <user :key="user.id" :user="user" v-for="user in listUsers" />
    </div>
  </div>
</template>
<script>
import User from '@/views/users/User';

export default {
  components: { User },
  name: 'List',
  component: {
    User,
  },
  props: {
    listUsers: {
      type: Array,
    },
  },
};
</script>
