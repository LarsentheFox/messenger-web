<template>
  <div class="hello">
    <h1>{{ msg_content }}</h1>
    <button @click="createMessage">Click</button>
  </div>
</template>

<script>
import MessageService from '../services/MessageService'

export default {
  name: 'HelloWorld',
  data() {
    return {
      msg_content: ''
    }
  },
  props: {
    msg: String
  },
  methods: {
    async createMessage() {
      const messageService = new MessageService()
      this.msg_content = await messageService.create_message()
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
