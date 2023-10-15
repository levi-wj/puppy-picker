<script lang="ts">
  import BreedList from "./lib/BreedList.svelte";
  import SideBar from "./lib/SideBar.svelte";
</script>

<main>
  <SideBar selectedTab="Browse Breeds"/>
  <div>
    <h1>Browse Breeds</h1>
    <BreedList />
  </div>
</main>