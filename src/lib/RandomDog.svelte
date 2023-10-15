<script lang="ts">
    import DogPic from "./DogPic.svelte";
    import LoadMore from "./LoadMore.svelte";

    const randURL: string = 'https://dog.ceo/api/breeds/image/random';
    let imgSrc: string = '';

    async function getRandomImage(): Promise<string> {
        const response = await fetch(randURL);
        const data = await response.json();
        return data.message;
    }
    
    async function setImage(): Promise<void> {
        const img = await getRandomImage();
        imgSrc = img;
    }

    setImage();
</script>

<div>
    <DogPic imgURL={imgSrc} btn="add" />
    <button on:click={setImage}>New Puppy</button>
</div>

<style>
    div {
        display: flex;
        align-items: center;
        flex-direction: column;
        padding: 1rem;
        border-radius: 100px;
        background-color: var(--bg-orange);
    }

    button {
        background-color: var(--bg-blue);
        color: var(--gray);
        margin-top: 3rem;
        padding: 1rem 2rem;
        font-size: 1.3rem;
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