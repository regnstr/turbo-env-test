<script lang="ts">
	import { MyCounterButton } from '@repo/ui';
	let { data } = $props();

  let { greeting } = $derived(data);
</script>

<h1>Web</h1>
<MyCounterButton />
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>

<p>Greeting: {greeting}</p>