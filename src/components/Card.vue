<template>
	<div class="card-container">
		<div class="card" :class="{ flip }">
			<div class="card-front">
				<button class="remove-button" @click="$store.commit('remove', card)">Remove</button>
				<img :src="card.image" alt="Food" class="food-image">
				<img src="/images/me.png" alt="Avatar" class="avatar">
				<div class="card-body">
					<h3 class="card-title">{{ card.title }}</h3>
					<p class="card-content">{{ card.content }}</p>
					<div class="card-icons">
						<div>
							<a href="#" v-for="rating in 5" :key="rating" :class="rating <= card.rating ? 'rated' : 'star'" @click="rate(rating)">
								<i class="fas fa-star"></i>
							</a>
						</div>
						<div>
							<a href="#" class="heart" :class="{ 'liked': card.liked }" @click="like">
								<i class="fas fa-heart"></i> {{ card.likes }}
							</a>
							<a href="#" class="comment" @click="flip = true">
								<i class="fas fa-comment"></i> {{ card.messages.length }}
							</a>
						</div>
					</div>
				</div>
			</div>
			<div class="card-back">
				<button class="close-button" @click="flip = false">
					<i class="fas fa-times"></i>
				</button>
				<div class="messages">
					<message v-for="(message, index) in card.messages" :key="index" :message="message"></message>
				</div>
				<form @submit.prevent="add">
					<input placeholder="Type a message" v-model="message">
					<button>Send</button>
				</form>
			</div>
		</div>
	</div>
</template>

<script>
	import Message from "./Message"

	export default {
		props: ["card"],
		components: { Message },
		data() {
			return {
				flip: false,
				message: "",
				currentCard: this.card
			}
		},
		methods: {
			add() {
				this.currentCard.messages.push(this.message)

				this.message = ""
			},
			like() {
				this.currentCard.liked = ! this.currentCard.liked
				this.currentCard.liked ? this.currentCard.likes++ : this.currentCard.likes--
			},
			rate(rating) {
				this.currentCard.rating = rating
			}
		}
	}
</script>

<style scoped>
	.card-container {
		perspective: 1000px;
	}

	.card {
		transition: transform 1s;
		transform-style: preserve-3d;
	}

	.flip {
		transform: rotateY(180deg);
	}

	.card-front, .card-back, .avatar, .remove-button {
		backface-visibility: hidden;
	}

	.card-front {
		box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
		border-radius: .5rem;
		overflow: hidden;
		position: relative;
	}

	.card-back {
		box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
		border-radius: .5rem;
		overflow: hidden;
		display: flex;
		flex-direction: column;
	}

	.card-body {
		padding: 1rem;
	}

	.card-title {
		font-size: 1.125rem;
		font-weight: bold;
		margin-bottom: .5rem;
	}

	.card-content {
		color: #4B5563;
		margin-bottom: .5rem;
	}

	.card-icons {
		display: flex;
		justify-content: space-between;
		align-items: center;
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

	.heart {
		margin-right: .5rem;
	}

	.star, .heart, .comment {
		color: #9CA3AF;
	}

	.rated {
		color: #FBBF24;
	}

	.heart:hover, .liked {
		color: #F87171;
	}

	.comment:hover {
		color: #60A5FA;
	}

	.remove-button {
		background-color: #EF4444;
		padding: .25rem .5rem;
		border-radius: .5rem;
		color: white;
		position: absolute;
		top: 1rem;
		right: 1rem;
	}

	.food-image {
		height: 250px;
		width: 100%;
		object-fit: cover;
	}

	.avatar {
		width: 25%;
		border-radius: 999px;
		border: 4px solid white;
		position: absolute;
		right: 1rem;
		transform: translateY(-50%);
	}

	.close-button {
		position: absolute;
		right: 1rem;
		top: 1rem;
	}

	.close-button:focus {
		outline: none;
	}

	.messages {
		flex: 1;
		overflow: auto;
	}

	form {
		display: flex;
		border-top: 1px solid #E5E7EB;
	}

	form input {
		flex: 1;
		padding: 1rem;
	}

	form input:focus, form button:focus {
		outline: none;
	}

	form button {
		font-weight: bold;
		color: white;
		background-color: #3B82F6;
		padding: 1rem;
	}
</style>