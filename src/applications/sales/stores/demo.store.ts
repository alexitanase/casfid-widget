import { defineStore } from 'pinia'

// @ts-ignore
export let useDemoStore = defineStore(
    'Demo',
    {
        state: () => ({}),
        actions: {
            setter(param, string) {
                this[param] = string;
            },
            getter(param){
                return this[param];
            }
        },
        persist: {
            storage: sessionStorage,
        }
    }
)
