<template>
  <div class="list-group-item list-group-item-action">
    <div class="text-left float-start">
      <div class="d-flex justify-content-between">
        <h5 class="mb-1">
          {{ user.id }}) {{ user.nombre }} {{ user.apellido }}
        </h5>
      </div>
      <small class="d-flex justify-content-left text-muted">
        Usuario:<span class="badge bg-warning text-dark">{{
          user.usuario
        }}</span></small
      >
    </div>
    <div class="btn-group-vertical float-end">
      <button
        type="button"
        class="btn btn-outline-primary btn-block"
        @click="updateUser()"
      >
        Editar
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'User',
  props: {
    user: Object,
  },
  methods: {
    updateUser() {
      this.$parent.$parent.newUser = { ...this.user };
      this.$parent.$parent.buttonEdit = true;
    },
  },
};
</script>
