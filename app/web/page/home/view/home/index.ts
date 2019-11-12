import { Vue, Component, Emit } from 'vue-property-decorator';
import Layout from 'component/layout/home/index.vue';
@Component({
  components: {
    Layout
  }
})

export default class Home extends Vue {}