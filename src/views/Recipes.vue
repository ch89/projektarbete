<template>
	<div class="grid md:grid-cols-3 gap-6">
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
					{ id: 1, title: "First", content: "Some info", image: "/images/food1.jpg", rating: 4, liked: true },
					{ id: 2, title: "Second", content: "Some info", image: "/images/food2.jpg", rating: 3, liked: false },
					{ id: 3, title: "Third", content: "Some info", image: "/images/food3.jpg", rating: 5, liked: false },
					{ id: 4, title: "Fourth", content: "Some info", image: "/images/food4.jpg", rating: 1, liked: true },
					{ id: 5, title: "Fifth", content: "Some info", image: "/images/food5.jpg", rating: 2, liked: false },
				]
			}
		}
	}
</script>