<script lang="ts">
    import BreedCard from "./BreedCard.svelte";

    const endpoint: string = 'https://dog.ceo/api/breeds/list/all';
    let shownBreeds: number = 10;

    async function getBreeds(): Promise<string[]> {
        const response = await fetch(endpoint);
        const data = await response.json();
        return data.message;
    }
</script>

<div class="breed-list">
    {#await getBreeds()}
        <p>Fetching dogs...</p>
    {:then breeds} 
        {#each Object.keys(breeds) as breed, i}
            {#if i < shownBreeds}
                <BreedCard breed={breed} />
            {/if}
        {/each}
    {/await}
</div>

<div class="loadmore">
    <div on:click={() => shownBreeds += 5}>
        <img src="bone.webp" alt="Bone" />
        <div>Fetch more dogs!</div>
    </div>
</div>

<style>
    .breed-list {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
        gap: 3rem;
        padding: 1rem;
        border-radius: 100px;
        background-color: var(--bg-orange);
    }

    .loadmore {
        margin-top: 2rem;
        margin-bottom: 2rem;
        text-align: center;
    }
    
    .loadmore > div {
        position: relative;
        cursor: pointer;
        width: 18em;
        transition: transform .2s ease-in-out;
        margin: auto;
    }
    .loadmore > div:hover {
        transform: scale(1.1);
    }

    .loadmore > div > img {
        width: 100%;
    }

    .loadmore > div > div {
        position: absolute;
        top: 54px;
        text-align: center;
        width: 100%;
        font-size: 1.5rem;
        font-family: 'Caveat', cursive;
    }
</style>