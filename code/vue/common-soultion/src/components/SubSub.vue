<template>
  <div>
    SubSub: {{name}}；{{injectName}}
  </div>
</template>


<script lang="ts">
import { Vue, Component, Prop, Watch} from 'vue-property-decorator'

@Component
export default class SubSub extends Vue {
  @Prop() private readonly name!: string;
  @Prop() private readonly injectName!: string;
}
</script>
