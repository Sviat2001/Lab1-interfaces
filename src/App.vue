<script>
import NavBar from './components/NavBar.vue'
import AboutUs from './components/AboutUs.vue'
import LoginUser from './components/LoginUser.vue'
import RegisterUser from './components/RegisterUser.vue'
import ProfileUser from './components/ProfileUser.vue'
import PhoneBook from './components/PhoneBook.vue'

export default {
  components: { 
    NavBar, 
    AboutUs, 
    LoginUser,
    RegisterUser,
    ProfileUser,
    PhoneBook 
  }, 
  data() {
    return {
    }
  },
  computed: {
    currentPage() {
      return this.$store.state.currentPage;
    },
    users() {
      return this.$store.state.users;
    },
    currentLoggedUser() {
      return this.$store.state.currentLoggedUser;
    }
  },
  methods: {
    changePage(pageNumber) {
      this.$store.state.currentPage = pageNumber
    },
    registerUser(newName, newEmail, newGender, newBirthdate, newPassword) {
      this.users.push({
        name: newName,
        email: newEmail,
        gender: newGender,
        birthdate: newBirthdate,
        password: newPassword
      })
      console.log(this.users)
    },
    loginUser(email, password) {
      if(this.users.every(
        (element, index) => {
          if (element.email == email && element.password == password) {
            this.currentLoggedUser.index = index
            console.log(index)
            alert("Logged")
            return false;
          } else {
            return true;
          }
        }
      )) {
        alert("Error")
      }
    },
    logoutUser() {
      this.currentLoggedUser.index = -1
      this.currentLoggedUser.phonebook = []
    },
    addContact(newContact, newNumber) {
      this.currentLoggedUser.phonebook.push({
        name: newContact,
        phones: newNumber
      })
    },
    deleteContact(index) {
      this.currentLoggedUser.phonebook.splice(index, 1)
    }
  }
}
</script>

<template>
  <NavBar :changePage="changePage"></NavBar>


  <div class="container" v-if="(this.currentPage==0)"> 
    <PhoneBook :phonebooks="currentLoggedUser.phonebook" :addContact="addContact" :deleteContact="deleteContact"></PhoneBook>
  </div>
  <div class="container" v-else-if="this.currentPage==1"> 
    <AboutUs></AboutUs>
  </div>
  <div class="container" v-else-if="this.currentPage==2"> 
    <RegisterUser :registerUser="registerUser"></RegisterUser>
  </div>
  <div class="container" v-else-if="this.currentPage==3"> 
    <LoginUser :loginUser="loginUser"></LoginUser>
  </div>
  <div class="container" v-else-if="(this.currentPage==4 && this.currentLoggedUser.index != -1)"> 
    <ProfileUser :user="users[this.currentLoggedUser.index]" :logoutUser="logoutUser"></ProfileUser>
  </div>
  <div class="container" v-else-if="(this.currentPage==4 && this.currentLoggedUser.index == -1)">
    <h1 class="display-3">You are not logged ! Please log in !</h1>
  </div>
</template>

<style scoped>

</style>
