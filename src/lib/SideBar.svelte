<script>
    export let collections = [];

    const handleClick = (collection) => {
        // handle click event
    };
</script>

<div>
    <div id="title" class="section">
        <h2>Puppy Picker</h2>
        <span>🐕</span>
    </div>
    <ul class="section">
        <li>
            <a href="/">Browse Breeds</a>
        </li>
        <li>
            <a href="/">Guessing Game</a>
        </li>
        <!-- https://dog.ceo/api/breeds/image/random -->
        <li>
            <a href="/">Random Dog</a>
        </li>
    </ul>
    <h4>Your Collections</h4>
    <ul class="section">
        {#each collections as collection}
            <li>
                <a on:click={() => handleClick(collection)}>
                    {collection.name}
                </a>
            </li>
        {/each}
        <li>
            <a href="/">+ New Collection</a>
        </li>
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

    ul > li {
        list-style: none;
        cursor: pointer;
        padding: 1em .5em 1em .5em;
        border-radius: 10px;   
    }
    ul > li:hover {
        background-color: #efefef;
    }

    h4 {
        margin-top: 3em;
        color: var(--gray);
    }
</style>