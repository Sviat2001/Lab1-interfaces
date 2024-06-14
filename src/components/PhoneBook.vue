<script>
export default {
    data() {
        return {
            name:'',
            phones:''
        }
    },
    props: {
        phonebooks: {
            type: Object,
            required: true
        },
        addContact: {
            type: Function,
            required: true
        },
        deleteContact: {
            type: Function,
            required: true
        }
    }
}
</script>

<template>
  <h1 class="display-3">Contacts </h1>
  <p class="lead" v-for="(phonebook, index) in phonebooks" :key="index"> Name : {{ phonebook.name }} Phones : {{ phonebook.phones }}
    <button type="button" class="btn btn-dark btn-delete" id="1" v-on:click="deleteContact(index)">Delete</button>
    </p>

    <h1 class="display-3">Add contact</h1>
    <div class="form-floating mb-3">
    <input type="text" v-model="name" class="form-control" id="floatingName" placeholder="Name">
    <label for="floatingName">Contact</label>
  </div>
     <div class="form-floating mb-3">
    <input type="text" v-model="phones" class="form-control" id="floatingInput" placeholder="Phones">
    <label for="floatingInput">Phones</label>
  </div>
  <button type="button" class="btn btn-dark" v-on:click="addContact(this.name, this.phones)">Register</button>
</template>

<style scoped>

</style>
