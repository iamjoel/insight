<template>
  <div>
    <FormInputItem name="姓名" ref="inputRef" :controlFocus="controlFocus"/>
    <div>
      <button @click="useRefFocus">获得焦点</button>
      <button @click="setFoucs">获得焦点</button>
    </div>
  </div>
</template>

<script>
import FormInputItem from '@/components/FormInputItem'
export default {
  components: {
    FormInputItem
  },
  data() {
    return {
      controlFocus: Date.now()
    }
  },
  methods: {
    useRefFocus() {
      this.$refs.inputRef.focus()
    },
    setFoucs() {
      this.controlFocus = Date.now()
    }
  }
}
</script>

<style scoped>
button {
  margin-right: 10px;
}
</style>