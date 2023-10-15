<script lang="ts">
    export let onClick: () => void;
</script>

<div class="loadmore" on:click={onClick}>
    <div>
        <img src="/bone.webp" alt="Bone" />
        <div>Fetch more!</div>
    </div>
</div>

<style>
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