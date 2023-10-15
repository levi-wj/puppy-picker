<script lang="ts">
    import { collections } from "../localstore";

    export let selectedTab: string;
    
    function createCollection() {
        const name: string = prompt("What would you like to name your collection?");
        if (name !== null && name !== '') {
            collections.update(c => [...c, { name, pics: [] }]);
        }
    }
</script>

<div>
    <div id="title" class="section">
        <h2>Puppy Picker</h2>
        <span>🐕</span>
    </div>
    <ul class="section">
        <a href="/">
            <li class:selected={selectedTab === 'Browse Breeds'}>
                Browse Breeds
            </li>
        </a>
        <!-- <a href="/">
            <li class:selected={selectedTab === 'Guessing Game'}>
                Guessing Game
            </li>
        </a> -->
        <a href="/src/random.html">
            <li class:selected={selectedTab === 'Random Dog'}>
                Random Dog
            </li>
        </a>
    </ul>
    <h4>Your Collections</h4>
    <ul class="section">
        {#each $collections as collection}
            <a href="/src/collection.html?name={collection.name}">
                <li class:selected={selectedTab === collection.name}>
                    {collection.name}
                </li>
            </a>
        {/each}
        <a on:click={createCollection}>
            <li>
                + New Collection
            </li>
        </a>
    </ul>
</div>

<style>
    div {
        background-color: var(--bg-blue);
        padding: .5em;
        border-radius: 10px;
    }
    
    #title {
        display: flex;
        text-align: center;
        color: var(--gray);
    }
    #title > h2 {
        white-space: break-space;
        word-spacing: 1000px;
    }
    #title > span {
        font-size: 4rem;   
    }
    
    .section {
        border-bottom: 5px solid var(--bg-orange);
        background-color: var(--offwhite);
        border-radius: 10px;
        padding: .5em;
    }

    ul > a > li {
        list-style: none;
        cursor: pointer;
        padding: 1em .5em 1em .5em;
        border-radius: 10px;
    }
    ul > a > li:hover {
        background-color: #efefef;
    }
    ul > a > li.selected {
        background-color: var(--bg-orange);
    }

    h4 {
        margin-top: 3em;
        color: var(--gray);
    }
</style>