<template>
	<div class="shadow-md rounded-lg overflow-hidden">
		<img :src="card.image" alt="Food">
		<div class="p-4">
			<h3 class="font-bold text-lg">{{ card.title }}</h3>
			<p class="text-gray-600">{{ card.content }}</p>
		</div>
	</div>
</template>

<script>
	export default {
		props: ["card"]
	}
</script>