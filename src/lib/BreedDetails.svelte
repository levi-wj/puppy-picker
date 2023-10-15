<script lang="ts">
    import DogPic from "./DogPic.svelte";
    import LoadMore from "./LoadMore.svelte";

    export let breed: string;

    const endpoint: string = `https://dog.ceo/api/breed/${breed}/images/random/8`;
    let images: string[] = [];

    async function getImages(): Promise<void> {
        const response = await fetch(endpoint);
        const data = await response.json();
        if (images.length) {
            images = [...images, ...data.message];
        } else {
            images = data.message;
        }
    }
    
    getImages();
</script>

<h2>{breed} pictures</h2>
<div class="pic-list">
    {#each images as image}
        <DogPic imgURL={image} btn="add" />
    {/each}
</div>

<LoadMore onClick={() => getImages()} />

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
</style>