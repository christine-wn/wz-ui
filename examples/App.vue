<template>
  <div id="app">
    <!-- <wz-input placeholder="请输入用户名" type="password" name="username" disabled></wz-input> -->
    <wz-input placeholder="请输入用户名" v-model="input" clearable></wz-input>
    <wz-input placeholder="请输入用户名" v-model="input" show-password></wz-input>
  </div>
</template>

<script>

export default { 
  name: 'App',
  data() {
    return {
      visible: false,
      input: ''
    }
  },
  methods: {

  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
