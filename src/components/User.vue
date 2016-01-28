<template>

  <ul id="userlist">
    <li v-for="user in users">
      {{ user.username }}
    </li>
  </ul>

</template>

<script>
import store from '../store/index.js'

export default {
  data: {
    store.data
  }
}

</script>
