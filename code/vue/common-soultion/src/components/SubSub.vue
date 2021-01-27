<template>
  <div>
    SubSub: {{name}}；{{injectName}}; {{injectNameObj.value}}; {{injectNameObj2.value}}; {{injectArr}}
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
}
</script>
