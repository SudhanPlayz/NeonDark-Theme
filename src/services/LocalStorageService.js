'use strict';
const { Memento } = require("vscode");

class LocalStorageService {
    /**
     * Create LocalStorage Service
     * @param {Memento} storage 
     */
    constructor(storage) {
        this.storage = storage
    }   
    
    /**
     * Get a value
     * @param {string} key
     * @returns 
     */
    getValue(key){
        return this.storage.get(key, null);
    }

    /**
     * Set a value
     * @param {string} key 
     * @param {any} value 
     */
    setValue(key, value){
        this.storage.update(key, value );
    }
}

module.exports = LocalStorageService