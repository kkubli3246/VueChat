<script>
export default {
  data() {
    return {
      fname: 'Yup',
      lname: 'Test'
    }
  },
  methods: {
    handleSubmit() {
      this.$emit('handleSubmit', this.fname + ' ' + this.lname)
    }
  }
}
</script>
<template>
  <div class="row">
    <div class="col-sm-2"></div>
    <div class="col-sm-6 form-group">
      <form @submit.prevent="handleSubmit">
        <label for="fname">First Name:</label>
        <input type="text" required v-model="fname" class="form-control" id="fname" />
        <label for="lanme">Last Name:</label>
        <input type="text" required v-model="lname" class="form-control" id="lname" />
        <br />
        <button type="submit" class="btn btn-primary" id="submit">Login</button>
      </form>
    </div>
  </div>
</template>
