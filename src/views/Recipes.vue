<template>
	<div class="cards">
		<card v-for="card in cards" :key="card.id" :card="card"></card>
	</div>
</template>

<script>
	import Card from "../components/Card"

	export default {
		components: { Card },
		data() {
			return {
				cards: [
					{ id: 1, title: "Hamburger", content: "A really sweet hamburger", image: "/images/food1.jpg", likes: 0, messages: [] },
					{ id: 2, title: "Salad", content: "Some info about this recipe", image: "/images/food2.jpg", likes: 0, messages: [] },
					{ id: 3, title: "Sushi", content: "And something else here", image: "/images/food3.jpg", likes: 0, messages: [] },
					{ id: 4, title: "Pizza", content: "Some stuff goes here", image: "/images/food4.jpg", likes: 0, messages: [] },
					{ id: 5, title: "Dessert", content: "More info here", image: "/images/food5.jpg", likes: 0, messages: [] },
				]
			}
		}
	}
</script>

<style>
	.cards {
		display: grid;
		gap: 1.5rem;
	}

	@media(min-width: 768px) {
		.cards {
			grid-template-columns: repeat(2, 1fr);
		}
	}

	@media(min-width: 1024px) {
		.cards {
			grid-template-columns: repeat(3, 1fr);
		}
	}
</style>