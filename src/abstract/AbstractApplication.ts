import {ApplicationInterface} from "../interfaces/ApplicationInterface";
import {SettingsInterface} from "../interfaces/SettingsInterface";

export class AbstractApplication implements ApplicationInterface {

    protected settings: SettingsInterface;

    constructor(settings) {
        try {
            this.settings = eval("("+settings+")");
        }catch (e){
            throw Error(e);
        }
    }

    public start(){
        console.debug("Starting application with settings", this.settings);
    }

}