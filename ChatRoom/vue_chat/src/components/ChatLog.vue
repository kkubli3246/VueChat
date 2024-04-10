<script setup>
import { computed, ref } from 'vue'

import Message from '../types/Message'

const text = ref('')

defineProps({
  messages: Array,
  name: String
})

const emit = defineEmits(['handleSendMessage'])

function handleSendMessage() {
  if (text) {
    emit('handleSendMessage', text)
  }
}
</script>

<template>
  <div class="chat">
    <ul>
      <li
        v-for="message in messages"
        :key="message.id"
        class="msg"
        :class="name == message.username ? 'sent' : 'rcvd'"
      >
        {{ message.message }}
        <p>{{ message.username }}</p>
      </li>
    </ul>

    <form onsubmit="return false;">
      <label for="exampleFormControlTextarea1" class="form-label">Example text area</label>
      <textarea
        class="form-control"
        v-model="text"
        id="exampleFormControlTextarea1"
        rows="3"
      ></textarea>
      <br />
      <button class="btn btn-primary" @click="handleSendMessage">Send</button>
    </form>
  </div>
</template>

<style>
ul {
  --rad: 20px;
  --rad-sm: 3px;
  font: 16px/1.5 sans-serif;
  display: flex;
  flex-direction: column;
  padding: 20px;
  max-width: 500px;
  margin: auto;
  list-style-type: none;
}

.msg {
  position: relative;
  max-width: 75%;
  padding: 7px 15px;
  margin-bottom: 2px;
}

.msg.sent {
  border-radius: var(--rad) var(--rad-sm) var(--rad-sm) var(--rad);
  background: #42a5f5;
  color: #fff;
  /* moves it to the right */
  margin-left: auto;
}

.msg.rcvd {
  border-radius: var(--rad-sm) var(--rad) var(--rad) var(--rad-sm);
  background: #f1f1f1;
  color: #555;
  /* moves it to the left */
  margin-right: auto;
}
</style>
