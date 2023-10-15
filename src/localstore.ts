import { writable } from 'svelte/store';

export const collections = writable(JSON.parse(localStorage.getItem('collections') || '[]'));

collections.subscribe((value) => localStorage.setItem('collections', JSON.stringify(value)));