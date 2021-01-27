<template>
  <div id="app">
    <div id="nav">
      <router-link to="/parent-call-child">父组件主动调用子组件的函数</router-link>
      <router-link to="/set-style">父组件设置子组件样式</router-link>
      <router-link to="/parent-sub-sub-value">父组件给很深的子组件传值</router-link>
    </div>
    <div id="main">
      <router-view/>
    </div>
  </div>
</template>

<style lang="scss">
body {
  margin: 0;
}
#app {
  display: flex;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

#nav {
  padding: 30px;
  border-right: 1px solid #42b983;
  min-height: 100vh;

  a {
    display: block;
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

#main {
  padding: 30px;
}
</style>