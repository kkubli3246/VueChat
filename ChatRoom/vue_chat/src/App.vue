<script>
//import { ref } from 'vue'
import Header from './components/Header.vue'
import Login from './components/Login.vue'
import Chatroom from './components/Chatroom.vue'
import ChatroomList from './components/ChatroomList.vue'
import axios from 'axios'

export default {
  components: {
    Header,
    Login,
    Chatroom,
    ChatroomList
  },
  data() {
    return {
      name: '',
      chatroom: 0
    }
  },
  methods: {
    handleSubmit(name) {
      this.name = name
      //console.log('Name Updated!')
    },
    handleSignOut() {
      this.name = ''
      this.chatroom = 0
    },
    onHandleChatroomSelect(chatroom) {
      //console.log(`Selected Chatroom: ${chatroom}`)
      this.chatroom = chatroom
    }
  }
}
</script>

<template>
  <div>
    <Header :name="name" @handleSignOut="handleSignOut"></Header>
    <Login v-if="name.length <= 0" @handleSubmit="handleSubmit" />
    <ChatroomList
      v-if="name.length > 0 && chatroom < 1"
      :name="name"
      @handleChatroomSelect="onHandleChatroomSelect"
    ></ChatroomList>
    <Chatroom v-if="chatroom > 0" :name="name" :chatroom="chatroom" />
  </div>
</template>

<style>
header {
  line-height: 1.5;
  max-height: 100vh;
}

form {
  margin: 10%;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
