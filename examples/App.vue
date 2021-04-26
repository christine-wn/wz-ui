<template>
  <div id="app">
    <wz-button type="primary" @click="visible=true">按钮</wz-button>
    <wz-dialog title="温馨提示" width="30%" top="200px" :visible.sync="visible">
      <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
      </ul>
      <template v-slot:footer>
        <wz-button type="primary" @click="visible=false">确定</wz-button>
        <wz-button>取消</wz-button>
      </template>
    </wz-dialog>
  </div>
</template>

<script>

export default { 
  name: 'App',
  data() {
    return {
      visible: false 
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
