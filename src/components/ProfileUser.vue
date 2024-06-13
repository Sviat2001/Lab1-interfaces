<script>
export default {
    props: {
       user: {
        type: Object,
        required: true
       },
       logoutUser: {
        type: Function,
        required: true
       }
    }
}
</script>

<template>
  <h1 class="display-3">Profile</h1>
  <p class="lead">Name : {{ user.name }}</p>
  <p class="lead">Email : {{ user.email }}</p>
  <p class="lead">Gender : {{ user.gender }}</p>
  <p class="lead">Birthdate : {{ user.birthdate }}</p>
  <button type="button" class="btn btn-dark" v-on:click="logoutUser()">Log out</button>
</template>

<style scoped>

</style>
