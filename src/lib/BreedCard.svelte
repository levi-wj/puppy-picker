<script lang="ts">
    export let breed: string;

    const endpoint = `https://dog.ceo/api/breed/${breed}/images/random`;
    const rotation = (Math.random() - .5) * 7;

    async function getRandomImage(): Promise<string> {
        const response = await fetch(endpoint);
        const data = await response.json();
        return data.message;
    }
</script>

<a href="/src/breed.html?breed={breed}">
    <div style="transform: rotate({rotation}deg)" class="card">
        {#await getRandomImage()}
            <img src="#" alt="Loading..." height="300">
        {:then src} 
            <img src="{src}" class="doggy" alt="Loading..." height="300" loading="lazy">
        {/await}
        <img class="pawprint" src="Dog_Paw_Print.png" alt="paw print"/>
        <h3>{breed}</h3>
    </div>
</a>

<style>
    div {
        cursor: pointer;
    }
    div:hover {
        box-shadow: 1px 3px 6px gray;
        border: 4px solid var(--orange);
    }

    h3 {
        font-family: 'Caveat', cursive;
        font-size: 25pt;
        color: rgb(71, 71, 71);
    }

    img.doggy {
        object-fit: contain;
        width: 100%;
        height: fit-content;
        margin-bottom: 2rem;
        max-height: 200px;
    }

    img.pawprint {
        position: absolute;
        height: 100px;
        width: 100px;
        opacity: .1;
        right: .2rem;
        bottom: 1rem;
        z-index: -1;
    }
</style>