<script lang="ts">
    import BreedCard from "./BreedCard.svelte";
    import LoadMore from "./LoadMore.svelte";

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

<LoadMore onClick={() => shownBreeds += 5} />

<style>
    .breed-list {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
        gap: 3rem;
        padding: 1rem;
        border-radius: 100px;
        background-color: var(--bg-orange);
    }
</style>