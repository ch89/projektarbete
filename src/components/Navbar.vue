<template>
	<nav class="shadow-md sticky z-10">
		<div class="max-w-screen-xl mx-auto md:flex">
			<div class="flex justify-between">
				<a href="#" class="block p-6">
					<img src="/images/logo.png" alt="Logo" class="h-8">
				</a>
				<button class="p-6 focus:outline-none md:hidden" @click="show = ! show">
					<i class="fas fa-bars"></i>
				</button>
			</div>
			<div class="md:flex" :class="show ? 'block' : 'hidden'">
				<router-link to="/" class="flex items-center p-6 hover:bg-gray-200">Home</router-link>
				<router-link to="/recipes" class="flex items-center p-6 hover:bg-gray-200">Recipes</router-link>
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