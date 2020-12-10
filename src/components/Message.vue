<template>
	<div class="message">
		<img src="/images/me.png" alt="Avatar">
		<div>
			<h3>Name</h3>
			<p>{{ message }}</p>
		</div>
		<span>Timestamp</span>
	</div>
</template>

<script>
	export default {
		props: ["message"]
	}
</script>

<style scoped>
	.message {
		display: flex;
		align-items: center;
		padding: 1rem;
		border-bottom: 1px solid #E5E7EB;
	}

	img {
		width: 3rem;
		border-radius: 999px;
		margin-right: 1rem;
	}

	h3 {
		font-weight: bold;
	}

	p {
		color: #6B7280;
	}

	span {
		color: #6B7280;
		font-size: 14px;
		margin-left: auto;
	}
</style>