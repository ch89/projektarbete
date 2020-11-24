<template>
	<navbar></navbar>
	<main class="container mx-auto p-6">
		<router-view></router-view>
	</main>
</template>

<script>
	import Navbar from "./components/Navbar"
	
	export default {
		components: { Navbar }
	}
</script>