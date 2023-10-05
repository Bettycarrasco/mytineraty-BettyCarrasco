// En tu módulo Lst.js
export const Lst = {
    get: (key) => (
        JSON.parse(localStorage.getItem(key))
    ),
    set: (key, value) => (
        localStorage.setItem(key, JSON.stringify(value))
    ),
};

