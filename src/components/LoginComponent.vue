<template>
  <div>
    <div v-if="!isLoggedIn">
    <input class="border" id="username_field" type="text" placeholder="username"/>
    <input class="border" id="password_field" type="password" placeholder="password"/>
    <button @click="login">Log in</button>
    <button @click="register">Register</button>
    </div>
    <h1 v-if="isLoggedIn">Logged In as {{loggedInUser}}!</h1>
    <button v-if="isLoggedIn" @click="loggedInUser=''">Log out</button>
  </div>
</template>

<script>
import MessageService from '../services/MessageService'
import UserService from '../services/UserService'

export default {
  name: 'LoginComponent',
  data() {
    return {
      loggedInUser: ''
    }
  },
  computed: {
    isLoggedIn() {
      if(this.loggedInUser) {
        return true
      }
      return false
    }
  },
  methods: {
    async createMessage() {
      const messageService = new MessageService()
      await messageService.create_message()
    },
    async login() {
        let username = document.getElementById('username_field').value
        let password = document.getElementById('password_field').value
        const userService = new UserService()
        this.loggedInUser = await userService.login(username, password)
    },
    async register() {
        let username = document.getElementById('username_field').value
        let password = document.getElementById('password_field').value
    }
  },
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
