import { Vue, Component, Prop } from "vue-property-decorator";

@Component({})
export default class App extends Vue {
  @Prop({ type: String, default: "App" })
  name?: string;

  render(h) {
    return h('h1', this.name);
  }
}