import {ApplicationInterface} from "../interfaces/ApplicationInterface";
import {Settings} from "../config/Settings";

export class AbstractApplication implements ApplicationInterface {

    constructor(settings: any) {
        try {

            // setting event id
            if(settings.version){
                Settings.version = settings.version;
            }

            // setting event id
            if(settings.event_id){
                Settings.event_id = settings.event_id;
            }

            // container
            if(settings.container){
                Settings.container = settings.container;
            }

        }catch (e){
            throw Error(e);
        }
    }

    public start(){
        console.debug("Starting application.");
    }

}