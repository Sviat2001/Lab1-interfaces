<script>
export default {
    data() {
        return {
            name: '',
            email: '',
            gender: '',
            birthdate: '',
            password: ''
        }
    },
    props: {
        registerUser: {
            type: Function,
            required: true
        }
    }
}
</script>

<template>
  <h1 class="display-3">Registration</h1>
  <div class="form-floating mb-3">
    <input type="text" v-model="name" class="form-control" id="floatingName" placeholder="Name">
    <label for="floatingName">User name</label>
  </div>
  <div class="form-floating mb-3">
    <input type="email" v-model="email" class="form-control" id="floatingInput" placeholder="name@example.com">
    <label for="floatingInput">Email address</label>
  </div>
  <div class="form-floating mb-3">
    <input type="password" v-model="password" class="form-control" id="floatingPassword" placeholder="Password">
    <label for="floatingPassword">Password</label>
  </div>
  <div class="form-floating mb-3">
    <input class="form-control" v-model="gender" list="datalistOptions" id="floatingGender" placeholder="Gender">
        <datalist id="datalistOptions">
            <option value="Female"></option>
            <option value="Male"></option>
            <option value="Car"></option>                
        </datalist>
    <label for="floatingGender">Gender</label>
  </div>
  <div class="form-floating mb-3">
    <input type="text" class="form-control" id="floatingDate" placeholder="BirthDate" v-model="birthdate">
    <label for="floatingDate">Birth date</label>
  </div>

  <button type="button" class="btn btn-dark" v-on:click="registerUser(this.name, this.email, this.gender, this.birthdate, this.password)">Register</button>
</template>


<style scoped>

</style>