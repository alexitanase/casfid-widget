import {AbstractApplication} from "../../abstract/AbstractApplication";
import {createApp} from "vue";
import {BootstrapVue3} from "bootstrap-vue-3";
import {Loader} from "../../Loader";
import App from "./App.vue";

export class SalesApplication extends AbstractApplication {

    protected VueApp;
    protected Container:        HTMLDivElement;
    protected ContainerId:      string = "casfid_enterticket_sales";

    constructor(settings) {
        super(settings);
    }

    start() {
        super.start();

        if(!this.Container){
            this.Container = document.createElement('div');
            this.Container.id = this.ContainerId;
            Loader.ScriptElement.parentNode.insertBefore(this.Container, Loader.ScriptElement);
        }

        this.VueApp = createApp(App);
        this.VueApp.use(BootstrapVue3);
        this.VueApp.mount(this.Container);
    }

}