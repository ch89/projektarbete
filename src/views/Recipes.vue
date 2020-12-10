<template>
	<div class="cards" v-if="$store.state.cards.length">
		<card v-for="card in cards" :key="card.id" :card="card"></card>
	</div>
	<p v-else>No recipes found.</p>
</template>

<script>
	import Card from "../components/Card"
	import { mapState } from "vuex"

	export default {
		components: { Card },
		computed: mapState(["cards"])
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