<script>
export default {
    props: {
        changePage: {
            type: Function,
            required: true
        }
    }
}
</script>

<template>
  <div class="container">
  <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <a class="navbar-brand"  v-on:click="changePage(0)"><img src="../assets/logo.jpg" alt="Logo" width="30" height="24" v-on:click="changePage(0)" class="d-inline-block align-text-top">Phonebook</a> 
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <button class="nav-link" aria-current="page" v-on:click="changePage(0)">Home</button>
        </li>
        <li class="nav-item">
          <button class="nav-link" aria-current="page" v-on:click="changePage(1)">About Us</button>
        </li>

        <li class="nav-item">
          <button class="nav-link" aria-current="page"  v-on:click="changePage(2)">Register</button>
        </li>
        <li class="nav-item">
          <button class="nav-link" aria-current="page"  v-on:click="changePage(3)">Login</button>
        </li>

        <li class="nav-item">
          <button class="nav-link" aria-current="page"  v-on:click="changePage(4)">Profile</button>
        </li>
      </ul>
    </div>
  </div>
  </nav></div>
</template>

<style scoped>

</style>
