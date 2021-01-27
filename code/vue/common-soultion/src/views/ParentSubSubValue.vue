<template>
  <div class="set-style">
    <Sub :name="name.value" @subSubClick="onSubSubClick"/>
    <button @click="changeIt">change</button>
  </div>
</template>

<script>
import Vue from 'vue'
import Sub from '@/components/Sub'
const nameObj2 = Vue.observable({ value: 'Jack' })
export default {
  components: {
    Sub
  },
  provide() {
    return {
      injectNameObj: this.name, // 必须是个可响应引用值：对象或数组。 字符串，数字都不行
      injectArr: this.arr, // 响应
      injectName: this.name.value, // 不响应
      injectNameObj2: nameObj2, // observable 对象也是可响应的。
      injectFn: this.injectFn // 很深的事件回调
    }
  },
  data() {
    return {
      name: {
        value: 'Joel'
      },
      arr: [1, 2]
    }
  },
  methods: {
    changeIt() {
      this.name.value += '1'
      nameObj2.value += '1'
      this.arr.push(this.arr.length + 1)
    },
    onSubSubClick() {
      console.log('sub sub clicked')
    },
    injectFn(name) {
      console.log(`injectFn: sub sub clicked: ${name}`)
    }
  }
}
</script>