<template>
  <div class="w-75 m-auto">
    <h1 class="text-lg-left">Usuarios</h1>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item active">
            <a class="nav-link" href="#"
              >Usuarios<span class="sr-only"></span
            ></a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">/ Lista</a>
          </li>
        </ul>
      </div>
    </nav>
    <List :listUsers="listUsers" />
    <h3 class="text-left py-3 m-0">Crear Usuario</h3>
    <form name="form" class="py-4">
      <div class="form-row">
        <div class="form-group text-left col-md-6">
          <label for="inputNombres">Nombre</label>
          <input
            type="text"
            class="form-control"
            id="inputNombres"
            v-model="newUser.nombre"
            required
          />
        </div>
        <div class="form-group col-md-6 text-left">
          <label for="inputApellidos">Apellido</label>
          <input
            type="text"
            class="form-control"
            id="inputApellidos"
            v-model="newUser.apellido"
            required
          />
        </div>
        <div class="form-group col-md-6 text-left">
          <label for="inputEmail">Usuario</label>
          <input
            type="email"
            class="form-control"
            id="inputEmail"
            v-model="newUser.usuario"
            required
          />
        </div>
        <div class="form-group col-md-6 text-left">
          <label for="inputPassword">Password</label>
          <input
            type="password"
            class="form-control"
            id="inputPassword"
            v-model="newUser.password"
            required
          />
        </div>
      </div>
      <button
        type="button"
        class="btn btn-success float-right m-2"
        @click="createNewUser()"
      >
        Guardar
      </button>
      <button
        type="button"
        class="btn btn-primary float-right m-2"
        v-if="buttonEdit"
        @click="editUser()"
      >
        Editar
      </button>
    </form>
  </div>
</template>
<script>
import { mapActions, mapState } from 'vuex';
import List from '@/views/users/List';

export default {
  name: 'Index',
  data() {
    return {
      buttonEdit: false,
      buttonDelete: false,
      newUser: {
        id: 0,
        nombre: '',
        apellido: '',
        usuario: '',
        password: '',
      },
    };
  },
  components: {
    List,
  },
  computed: {
    ...mapState({
      listUsers: (state) => state.users.listUsers,
    }),
  },
  created() {
    this.loadUser();
  },
  watch: {
    'newUser.nombre': function () {
      this.loadUser();
    },
  },
  methods: {
    ...mapActions('users', ['getListUsers', 'createUser', 'updateUser']),
    loadUser() {
      this.getListUsers();
    },
    createNewUser() {
      this.createUser(this.newUser).then((res) => {
        console.log(res.message);
        this.newUser.nombre = '';
        this.newUser.apellido = '';
        this.newUser.password = '';
        this.newUser.usuario = '';
      });
    },
    editUser() {
      this.updateUser(this.newUser).then((res) => {
        console.log(res.message);
        this.newUser.nombre = '';
        this.newUser.apellido = '';
        this.newUser.password = '';
        this.newUser.usuario = '';
      });
    },
  },
};
</script>
