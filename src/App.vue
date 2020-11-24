<template>
	<navbar></navbar>
	<main class="max-w-screen-xl mx-auto p-6">
		<router-view></router-view>
	</main>
</template>

<script>
	import Navbar from "./components/Navbar"
	
	export default {
		components: { Navbar }
	}
</script>