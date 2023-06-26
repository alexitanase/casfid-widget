import {AbstractApplication} from "../../abstract/AbstractApplication";
import {createApp} from "vue";
import {BootstrapVue3} from "bootstrap-vue-3";
import {BootstrapIconsPlugin} from "bootstrap-icons-vue";
import App from "./App.vue";
import {createPinia, Pinia} from "pinia";
import piniaPluginPersistedState from 'pinia-plugin-persistedstate'
import {Settings} from "../../config/Settings";

export class SalesApplication extends AbstractApplication {

    protected VueApp:           any;
    protected Pinia:            Pinia;

    constructor(settings) {
        super(settings);
    }

    start() {
        super.start();

        if(!Settings.container || Settings.container === ''){
            throw new Error("Undefined container.");
        }

        if(this.VueApp){
            throw new Error("Application already loaded.");
        }

        //create pinia store
        this.Pinia = createPinia();

        //set persisted state
        this.Pinia.use(piniaPluginPersistedState);

        //create vue app
        this.VueApp = createApp(App);
        this.VueApp.use(this.Pinia);
        this.VueApp.use(BootstrapVue3);
        this.VueApp.use(BootstrapIconsPlugin);
        this.VueApp.mount(Settings.container);
    }

}