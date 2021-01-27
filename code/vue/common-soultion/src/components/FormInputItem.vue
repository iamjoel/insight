<template>
  <div class="form-input-item">
    <label :class="['form-input-item__label', labelClassName || '']" :style="labelStyle ? labelStyle : {}">{{name}}</label>
    <input type="text" ref="input"/>
  </div>
</template>


<script lang="ts">
// https://class-component.vuejs.org/
// https://github.com/kaorun343/vue-property-decorator
import { Vue, Component, Prop, Watch} from 'vue-property-decorator'

@Component
export default class FormInputItem extends Vue {
  @Prop() private readonly name!: string;
  @Prop() private readonly controlFocus!: number;
  @Prop() private readonly labelStyle!: object;
  @Prop() private readonly labelClassName!: string;
  focus() {
    (this.$refs.input as HTMLInputElement).focus()
  }

  @Watch('controlFocus')
  onControlFocusChanged() {
    this.focus()
  }
}
</script>

<style lang="scss" scoped>
.form-input-item {
  margin-bottom: 10px;
  &__label {
    margin-right: 10px;
  }
}
</style>