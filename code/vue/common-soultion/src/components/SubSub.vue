<template>
  <div class="wrap" @click="onClick">
    SubSub: {{name}}；{{injectName}}; {{injectNameObj.value}}; {{injectNameObj2.value}}; {{injectArr}} <br>

    高耦合写法：{{$parent.$parent.name.value}}
  </div>
</template>


<script lang="ts">
import { Vue, Component, Prop, Inject} from 'vue-property-decorator'

@Component
export default class SubSub extends Vue {
  @Prop() private readonly name!: string;
  @Inject('injectNameObj') readonly injectNameObj!: string
  @Inject('injectNameObj2') readonly injectNameObj2!: string
  @Inject('injectName') readonly injectName!: string
  @Inject('injectArr') readonly injectArr!: number[]
  @Inject('injectFn') readonly injectFn!: (name: string) => {}

  onClick() {
    this.$emit('subClick')
    if(this.injectFn) {
      this.injectFn(this.name)
    }
  }
}
</script>

<style scoped>
.wrap {
  padding: 10px;
  background-color: #0f0;
  color: #fff;
}
</style>