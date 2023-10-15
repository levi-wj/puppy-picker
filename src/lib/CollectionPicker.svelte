<script lang="ts">
    import { onMount } from "svelte";
    import { collections } from "../localstore";
    
    export let imgURL: string;

    let dialog: HTMLDialogElement;

    function addPicToCollection(collection) {
        collections.update(c => {
            const index = c.findIndex(col => col.name === collection.name);
            c[index].pics.push(imgURL);
            return c;
        });
        destroyWin();
    }
    
    function destroyWin() {
        dialog.parentNode.removeChild(dialog)
    }
    
    onMount(() => {
        dialog.showModal();
    });
</script>

<dialog id="dialog" bind:this={dialog}>
    <div class="header">
        <h3>Add picture to collection</h3>
        <button on:click={destroyWin}>X</button>
    </div>
    <div class="flex">
        <img src={imgURL} alt="" height="150" loading="lazy">
        <ul class="section">
            {#each $collections as collection}
                <a on:click={() => addPicToCollection(collection)}>
                    <li>{collection.name}</li>
                </a>
            {/each}
        </ul>
    </div>
</dialog>

<style>
    ::backdrop {
        background-color: rgba(37, 23, 5, 0.473);   
    }

    dialog {
        border: none;
        border-radius: 10px;
        padding: 2rem;
        padding-top: 1rem;
        background-color: var(--bg-blue);
        border-bottom: 5px solid var(--shadow-blue);
    }
    
    .header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 1rem;
    }
    
    .flex {
        display: flex;
        justify-content: space-between;
        background-color: var(--offwhite);
        border-bottom: 5px solid var(--bg-orange);
        padding: 1rem;
        border-radius: 10px;
    }
    
    h3 {
        margin: 0;
    }
    
    button {
        background-color: var(--offwhite);
        border: none;
        border-radius: 100%;
        width: 35px;
        height: 39px;
        cursor: pointer;
        border-bottom: 2px solid var(--shadow-blue);
        font-weight: 1000;
        color: var(--gray);
    }
    button:hover {
        background-color: #efefef;
    }
    
    img {
        border-radius: 10px;
    }
    
    ul > a > li {
        list-style: none;
        cursor: pointer;
        padding: 1em .75em 1em .75em;
        border-radius: 10px;
        background-color: #f8f8f8;
    }
    ul > a > li:hover {
        background-color: #efefef;
    }
</style>