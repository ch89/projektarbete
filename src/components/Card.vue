<template>
	<div class="shadow-md rounded-lg overflow-hidden">
		<div class="relative">
			<img :src="card.image" alt="Food">
			<img src="/images/avatar3.jpg" alt="Avatar" class="w-1/4 rounded-full border-4 border-white absolute right-4 transform -translate-y-1/2">
		</div>
		<div class="p-4">
			<h3 class="font-bold text-lg mb-2">{{ card.title }}</h3>
			<p class="text-gray-600 mb-2">{{ card.content }}</p>
			<div class="flex justify-between items-center">
				<div>
					<a href="#" v-for="rating in 5" :key="rating" :class="rating <= card.rating ? 'text-yellow-400' : 'text-gray-400'">
						<i class="fas fa-star"></i>
					</a>
				</div>
				<a href="#" class="text-gray-400 hover:text-red-400" :class="{ 'text-red-400': card.liked }">
					<i class="fas fa-heart"></i> 2
				</a>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		props: ["card"]
	}
</script>