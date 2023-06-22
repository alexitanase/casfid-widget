import Applications from "./config/Applications";
import {ApplicationInterface} from "./interfaces/ApplicationInterface";

export class Loader {

    public static ScriptElement;

    protected ApplicationName: string;
    protected App: ApplicationInterface;

    constructor(application: string) {
        this.ApplicationName = application;
    }

    public init(settings: any): void {

        if (!Applications[this.ApplicationName]){
            throw Error("Invalid application type.");
        }

        this.App = new Applications[this.ApplicationName](settings);
        this.App.start();

        console.log(`Application loaded ${this.ApplicationName}`);

    }

}

