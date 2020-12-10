<template>
	<nav>
		<div class="container">
			<div class="nav-wrapper">
				<a href="#" class="nav-header">
					<h3>Recipes App</h3>
				</a>
				<button class="toggle" @click="show = ! show">
					<i class="fas fa-bars"></i>
				</button>
			</div>
			<div class="nav-items" :class="show ? 'block' : 'hidden'">
				<router-link to="/" class="nav-item">Home</router-link>
				<router-link to="/recipes" class="nav-item">Recipes</router-link>
			</div>
		</div>
	</nav>
</template>

<script>
	export default {
		data() {
			return {
				show: false
			}
		}
	}
</script>

<style scoped>
	nav {
		box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
		position: sticky;
		top: 0;
		z-index: 10;
		background-color: white;
	}

	.container {
		max-width: 1280px;
		margin: 0 auto;
	}

	.nav-wrapper {
		display: flex;
		justify-content: space-between;
	}

	.nav-header {
		display: block;
		padding: 1.5rem;
	}

	.nav-header h3 {
		font-weight: bold;
		font-size: 1.25rem;
	}

	.toggle {
		padding: 1.25rem;
	}

	.toggle:focus {
		outline: none;
	}

	.block {
		display: block;
	}

	.hidden {
		display: none;
	}

	.nav-item {
		display: flex;
		align-items: center;
		padding: 1.5rem;
	}

	.nav-item:hover {
		background-color: #E8E8E8;
	}

	@media (min-width: 768px) {
		.container {
			display: flex;
		}

		.toggle {
			display: none;
		}

		.nav-items {
			display: flex;
		}
	}
</style>