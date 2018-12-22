<template>
	<div class="details container">
		<h1 class="page-header glyphicon glyphicon-user"> {{customer.name}}</h1>
		<ul class="list-group">
			<li class="list-group-item">
				<span class="glyphicon glyphicon-earphone"> {{customer.phone}}</span>
			</li>
			<li class="list-group-item">
				<span class="glyphicon glyphicon-envelope"> {{customer.email}}</span>
			</li>
		</ul>
		<ul class="list-group">
			<li class="list-group-item">
				<span class="glyphicon glyphicon-education"> {{customer.edcuation}}</span>
			</li>
			<li class="list-group-item">
				<span class="glyphicon glyphicon-tent"> {{customer.graduationschool}}</span>
			</li>
			<li class="list-group-item">
				<span class="glyphicon glyphicon-grain"> {{customer.profession}}</span>
			</li>
			<li class="list-group-item">
				<span class="glyphicon glyphicon-list-alt"> {{customer.profile}}</span>
			</li>
		</ul>
	</div>
</template>

<script>
	export default {
		name: 'customerdetails',
		data() {
			return {
				customer: ""
			};
		},
		methods: {
			fetchCustomers(id) {
				this.$http.get("http://localhost:3000/users/" + id)
					.then(function(response) {
						// console.log(response);
						this.customer = response.body;
					})
			}
		},
		created() {
			this.fetchCustomers(this.$route.params.id);
		}
	}
</script>

<style scoped>

</style>
