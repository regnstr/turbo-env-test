<script lang="ts">
  let count = $state(0);

  function handleClick() {
    count += 1;
  }
</script>

<button class="border-1 p-2 bg-red-400" onclick={handleClick}>
  clicks: {count}
</button>
