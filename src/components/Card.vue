<template>
	<div class="card-container">
		<div class="card" :class="{ flip }">
			<div class="shadow-md rounded-lg overflow-hidden card-front relative">
				<img :src="card.image" alt="Food" @click="flip = true">
				<img src="/images/avatar3.jpg" alt="Avatar" class="w-1/4 rounded-full border-4 border-white absolute right-4 transform -translate-y-1/2 avatar">
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
			<div class="card-back flex flex-col shadow-md rounded-lg overflow-hidden">
				<button class="absolute right-4 top-4 focus:outline-none" @click="flip = false">
					<i class="fas fa-times"></i>
				</button>
				<div class="flex-1 overflow-auto">
					<div class="flex items-center p-4 border-b" v-for="(message, index) in card.messages" :key="index">
						<img src="/images/avatar2.jpg" alt="Avatar" class="w-12 rounded-full mr-4">
						<div>
							<h3 class="font-bold">Name</h3>
							<p class="text-gray-500">The message</p>
						</div>
						<span class="text-gray-500 text-sm ml-auto">2 hours ago</span>
					</div>
				</div>
				<form class="flex border-t rounded-b-lg" @submit.prevent="add">
					<input placeholder="Type a message" class="flex-1 p-4 focus:outline-none" v-model="text">
					<button class="font-bold text-white bg-blue-500 p-4 focus:outline-none">Send</button>
				</form>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		props: ["card"],
		data() {
			return {
				flip: false
			}
		}
	}
</script>

<style scoped>
	.card-container {
		/*background-color: blue;*/
		perspective: 1000px;
	}

	.card {
		/*background-color: red;*/
		transition: transform 1s;
		transform-style: preserve-3d;
	}

	/*.card-container:hover .card {
		transform: rotateY(180deg);
	}*/

	.flip {
		transform: rotateY(180deg);
	}

	.card-front, .card-back, .avatar {
		backface-visibility: hidden;
	}

	.card-back {
		/*background-color: blue;*/
		position: absolute;
		top: 0;
		bottom: 0;
		left: 0;
		right: 0;
		transform: rotateY(180deg);
	}
</style>