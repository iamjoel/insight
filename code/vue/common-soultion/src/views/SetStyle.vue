<template>
  <div class="set-style">
    <FormInputItem name="姓名" :labelStyle="labelStyle" labelClassName="label"/>
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
      labelStyle: {
        'font-size': '20px'
      },
    }
  }
}
</script>

<style lang="scss">
.set-style {
  /* 加 scope 会匹配不到 */
  .label {
    color: red;
  }

  /* 直接设置子组件的样式，耦合的写法 */
  .form-input-item__label {
    font-weight: bold;
  }
}

</style>