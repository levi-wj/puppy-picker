<script lang="ts">
  import BreedList from "./lib/BreedList.svelte";
  import SideBar from "./lib/SideBar.svelte";

</script>

<main>
  <SideBar />
  <div>
    <h1>Browse Breeds</h1>
    <BreedList />
  </div>
</main>

<style>
  main {
    margin: 1rem;
    display: grid;
    grid-template-columns: 15% 1fr;
    gap: 2em;
  }
</style>