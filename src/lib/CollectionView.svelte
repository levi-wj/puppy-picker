<script lang="ts">
    import { collections } from "../localstore";
    import DogPic from "./DogPic.svelte";

    export let name: string;
    
    let images: string[] = [];
    
    collections.subscribe(c => {
        const i: number = c.findIndex(c => c.name === name);
        if (i > -1) {
            images = c[i].pics;
        }
    });
    
    function deleteCollection() {
        collections.update(c => {
            const index = c.findIndex(col => col.name === name);
            c.splice(index, 1);
            return c;
        });
        window.location.href = '/';
    }
</script>

<div class="flex">
    <h2>{name}</h2>
    <button on:click={deleteCollection}>Delete Collection</button>
</div>
<div class="pic-list">
    {#each images as image}
        <DogPic imgURL={image} btn="remove" collectionName={name} />
    {/each}
</div>

<style>
    .pic-list {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        gap: 3rem;
        padding: 1rem;
        border-radius: 100px;
        background-color: var(--bg-orange);
    }
    
    .flex {
        display: flex;
        justify-content: space-between;
        margin-bottom: 1rem;
    }

    button {
        background-color: var(--bg-blue);
        color: var(--gray);
        padding: .25rem 1rem;
        border: none;
        border-radius: 10px;
        cursor: pointer;
        font-family: Inter;
        border-bottom: 4px solid var(--shadow-blue);
    }
    button:hover {
        background-color: var(--bg-blue-hover);
    }
</style>