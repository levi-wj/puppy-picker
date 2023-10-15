<script lang="ts">
    import { collections } from "../localstore";
    import CollectionPicker from "./CollectionPicker.svelte";

    export let imgURL: string;
    export let btn: string;
    export let collectionName: string = '';

    const rotation = (Math.random() - .5) * 7;
    
    function createDialog() {
        new CollectionPicker({
            target: document.body,
            props: {
                imgURL,
            },
        });
    }
    
    function removeFromCollection() {
        collections.update(c => {
            const index = c.findIndex(col => col.name === collectionName);
            const picindex = c[index].pics.findIndex(pic => pic === imgURL);
            c[index].pics.splice(picindex, 1);
            return c;
        });
    }
</script>

<div class="card" style="transform: rotate({rotation}deg)">
    <img src={imgURL} alt="" height="300" loading="lazy">
    {#if btn === "remove"}
        <button on:click={removeFromCollection}>-</button>
    {:else if btn === "add"}
        <button on:click={createDialog}>+</button>
    {/if}
</div>

<style>
    button {
        background-color: var(--bg-blue);
        border: none;
        border-bottom: 4px solid var(--shadow-blue);
        color: var(--gray);
        border-radius: 100%;
        cursor: pointer;
        width: 80px;
        height: 82px;
        font-family: Inter;
        font-size: 4rem;
    }
    button:hover {
        background-color: var(--bg-blue-hover);
    }

    div {
        display: flex;
        flex-direction: column;
        align-items: end;
        justify-content: space-around;
        max-width: fit-content;
        height: 400px;
    }

    img {
        border-radius: 10px;
    }
</style>