import {Loader} from "./Loader";

window.onload = () => {

    /**
     * @property {string} WIDGET_VERSION Version received from webpack defined on package.json
     */
    if(typeof WIDGET_VERSION !== 'undefined'){
        window.WIDGET_VERSION = WIDGET_VERSION;
    }else{
        window.WIDGET_VERSION = '0.0.0';
    }

    window.process = {
        env: {
            NODE_ENV: 'development'
        }
    }

    Loader.ScriptElement = document.querySelectorAll('[ref="enter-ticket"]')[0];

    if(!Loader.ScriptElement){
        throw Error("Ooops current script not detected.");
    }

    if(typeof Loader.ScriptElement.getAttribute('data-app') === 'undefined'){
        throw Error("Ooops application  undefined.");
    }

    if(typeof Loader.ScriptElement.getAttribute('data-settings') === 'undefined'){
        throw Error("Ooops application settings undefined.");
    }

    let Application = new Loader('sales');

    Application.init(Loader.ScriptElement.getAttribute('data-settings'));

};