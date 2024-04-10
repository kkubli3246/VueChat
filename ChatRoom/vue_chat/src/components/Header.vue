<script setup>
//import { defineComponent } from '@vue/composition-api'
defineProps({
  name: String
})
</script>

<template>
  <div class="row">
    <div class="col">
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand" href="#">Vue Chat</a>

        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
              <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Chat Rooms</a>
            </li>
          </ul>
        </div>
        <div v-if="name.length > 0" class="nav-item nav-link">
          <a class="nav-link">{{ 'Hello, ' + name }}</a>
          <button class="btn-danger signout" @click="this.$emit('handleSignOut')">Sign Out</button>
        </div>
      </nav>
    </div>
  </div>
</template>

<style scoped></style>
