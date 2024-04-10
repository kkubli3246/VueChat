<template>
  <div>
    <div class="row">
      <div class="col-sm-3"></div>
      <div class="col-sm-4">
        <h3 class="text-center">Chatrooms</h3>
      </div>
      <div class="col-sm-4"></div>
    </div>
    <div class="row">
      <div class="col-sm-4"></div>

      <div class="col-sm-4">
        <ul>
          <div
            v-for="chatroom in chatrooms"
            :key="chatroom.id"
            class="card text-center chatroom w-50"
            :class="{ 'box-hovered': chatroom.hovered }"
            @mouseenter="chatroom.hovered = true"
            @mouseleave="chatroom.hovered = false"
            @click="handleChatroomSelect(chatroom.id)"
          >
            <div class="card-body">
              <h5 class="card-title">{{ chatroom.name }}</h5>
            </div>
          </div>
        </ul>
      </div>
      <div class="col-sm-4">
        <button>Add Chatroom</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import axios from 'axios'
import { onMounted, ref } from 'vue'

let chatrooms = ref([])
const chatroomId = ref()

const emit = defineEmits(['onHandleChatoromSelect'])

function getChatrooms() {
  axios.get('http://localhost:5000/chatrooms').then((res) => (chatrooms.value = res.data))
}

function handleChatroomSelect(chatroomId) {
  emit('handleChatroomSelect', chatroomId)
}

onMounted(() => {
  getChatrooms()
})
</script>

<style scoped>
.chatroom {
  margin: 1em;
}

.box-hovered {
  background-color: rgb(175, 156, 156);
}
</style>
