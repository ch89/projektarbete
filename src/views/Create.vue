<template>
	<form @submit.prevent="add">
		<div class="mb-4">
			<label for="title" class="block text-sm font-bold mb-2">Title</label>
			<input type="text" id="title" class="border rounded-lg px-4 py-2 w-full focus:outline-none focus:shadow-outline" v-model="form.title">
		</div>
		<div class="mb-4">
			<label for="content" class="block text-sm font-bold mb-2">Content</label>
			<input type="text" id="content" class="border rounded-lg px-4 py-2 w-full focus:outline-none focus:shadow-outline" v-model="form.content">
		</div>
		<div class="mb-4">
			<label for="content" class="block text-sm font-bold mb-2">Image URL</label>
			<input type="text" id="content" class="border rounded-lg px-4 py-2 w-full focus:outline-none focus:shadow-outline" v-model="form.image">
		</div>
		<button class="bg-blue-500 text-white px-4 py-2 font-bold rounded-lg">Add</button>
	</form>
</template>

<script>
	export default {
		data() {
			return {
				form: {}
			}
		},
		methods: {
			add() {
				if(this.form.title && this.form.content && this.form.image) {
					this.$store.commit("add", this.form)

					this.form = {}

					this.$router.push("/recipes")
				}
			}
		}
	}
</script>