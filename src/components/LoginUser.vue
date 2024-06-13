<script>
export default {
    data() {
        return {
            email: '',
            password: ''
        }
    },
    props: {
        loginUser: {
            type: Function,
            required: true
        }
    }
}
</script>

<template>
  <h1 class="display-3">Login</h1>
  <div class="form-floating mb-3">
    <input type="email" v-model="email" class="form-control" id="floatingInput" placeholder="name@example.com">
    <label for="floatingInput">Email address</label>
  </div>
  <div class="form-floating mb-3">
    <input type="password" v-model="password" class="form-control" id="floatingPassword" placeholder="Password">
    <label for="floatingPassword">Password</label>
  </div>
  <button type="button" class="btn btn-dark" v-on:click="loginUser(this.email, this.password)">Login</button>
</template>

<style scoped>

</style>
