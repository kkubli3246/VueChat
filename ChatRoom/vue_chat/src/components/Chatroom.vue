<script setup>
import ChatLog from './ChatLog.vue'
import Message from '../types/Message'
import { ref, onMounted } from 'vue'
import axios from 'axios'

const props = defineProps({
  name: String,
  chatroomName: String,
  chatroom: Number
})

const messages = ref([])

function handleSendMessage(message) {
  axios
    .post(`http://localhost:5000/chatrooms/${props.chatroom}`, {
      username: props.name,
      message: message.value,
      chatroomID: props.chatroom
    })
    .then((res) => {
      //console.log(res)
      getMessages()
    })
    .catch((err) => console.log(err))
}

function getMessages() {
  messages.value = []
  //Get Message From API to MSSQL
  axios.get(`http://localhost:5000/chatrooms/${props.chatroom}`).then((res) => {
    res.data.forEach((message) => {
      messages.value.push(message)
    })
  })
}

onMounted(() => {
  getMessages()
})
</script>

<template>
  <div class="row">
    <div class="col-sm-2"></div>
    <div class="col-sm-6 form-group">
      <h4 v-if="!messages">Chatroom messages are empty! Start the Convo!</h4>
      <ChatLog :messages="messages" :name="name" @handleSendMessage="handleSendMessage" />
    </div>
  </div>
</template>
