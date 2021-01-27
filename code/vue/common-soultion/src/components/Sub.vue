<template>
  <div>
    Sub: 
    <SubSub :name="name" />
  </div>
</template>


<script lang="ts">
import { Vue, Component, Prop, Watch} from 'vue-property-decorator'
import SubSub from './SubSub.vue'

@Component({
  components: {
    SubSub
  }
})
export default class Sub extends Vue {
  @Prop() private readonly name!: string;

  
}
</script>
