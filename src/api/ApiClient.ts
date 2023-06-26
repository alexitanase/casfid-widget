import axios from "axios";

/**
 * @description ApiClient is a class for execute request with {@link axios}.
 * @author Iulian Alexandru Tanase
 */
export class ApiClient {

    protected _headers: string[];
    protected _baseUrl: string;

    get headers(): string[] {
        return this._headers;
    }

    set headers(value: string[]) {
        this._headers = value;
    }

    public add_header(key: string, value: string){
        this._headers[key] = value;
    }

    get baseUrl(): string {
        return this._baseUrl;
    }

    set baseUrl(value: string) {
        this._baseUrl = value;
    }

    private buildParams(data: object): string {
        const params = new URLSearchParams()

        Object.entries(data).forEach(([key, value]) => {
            if (Array.isArray(value)) {
                value.forEach(value => params.append(`${key}[]`, value.toString()))
            } else {
                params.append(key, value.toString())
            }
        });

        return params.toString()
    }

    public client(options): any {
        return axios.create({
            baseURL: this.baseUrl,
            withCredentials: false,
            transformRequest: [function (data, headers) {

                headers = {
                    ...headers,
                    ...this.headers
                }

                return data ? this.buildParams(data) : null;
            }.bind(this)],
            ...options
        })
    }

    public doAsync({method, url, data, options = {}}): Promise<any> {

        let urlMethods = ["get", "delete"];

        if (data && urlMethods.indexOf(method.toLowerCase()) !== -1) {
            const esc = encodeURIComponent;
            url = `${url}?` + Object.keys(data)
                .map(k => esc(k) + '=' + esc(data[k]))
                .join('&')
        }

        return new Promise((resolve, reject) => {
            this.client(options)[method](url, data)
                .then(response => {
                    resolve(response.data)
                })
                .catch(error => {
                    if (error.response !== undefined) {
                        throw new Error(error);
                    }
                    reject(error)
                })
        })
    }

}