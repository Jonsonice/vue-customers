<template>
	<div class="edit container">
		<Alert v-bind:message="alert" v-if="alert"></Alert>
		<h1 class="page-header">编辑用户</h1>
		<form v-on:submit="updateCustomer">
			<div class="well">
				<h4>用户信息</h4>
				<div class="form-group">
					<label>姓名</label>
					<input type="text" class="form-control" placeholder="name" v-model="customer.name" />
					<label>电话</label>
					<input type="text" class="form-control" placeholder="phone" v-model="customer.phone" />
					<label>邮箱</label>
					<input type="text" class="form-control" placeholder="email" v-model="customer.email" />
					<label>学历</label>
					<input type="text" class="form-control" placeholder="education" v-model="customer.education" />
					<label>毕业学校</label>
					<input type="text" class="form-control" placeholder="graduationschool" v-model="customer.graduationschool" />
					<label>职业</label>
					<input type="text" class="form-control" placeholder="profession" v-model="customer.profession" />
					<label>个人简介</label>
					<textarea rows="10" class="form-control" placeholder="profile" v-model="customer.profile" />

					</div>
				<button type="submit" class="btn btn-primary">确认</button>
			</div>
		</form>
	</div>
</template>

<script>
	import Alert from './Alert'
	export default {
		name: 'edit',
		data() {
			return {
				customer:{},
				alert:""
			}
		},
		methods:{
			fetchCustomer(id){
				this.$http.get("http://localhost:3000/users/"+id)
				.then(function(response){
					// console.log(response);
					this.customer = response.body;
				})
			},
			updateCustomer(e){
				// console.log('test');
				if(!this.customer.name || !this.customer.phone || !this.customer.email){
					// console.log("请添加信息")
					this.alert= "必须添加姓名 电话 邮箱";
				}else{
					let updateCustomer = {
						name: this.customer.name,
						phone: this.customer.phone,
						email: this.customer.email,
						edcuation: this.customer.edcuation,
						graduationschool: this.customer.graduationschool,
						profession: this.customer.profession,
						profile: this.customer.profile
					}
					this.$http.put("http://localhost:3000/users/"+this.$route.params.id,updateCustomer)
					.then(function(response){
						// console.log(response);
						this.$router.push({
							path:"/",query:{alert:"用户信息更新成功!"}
							})
					})
					e.preventDefault();
				}
				e.preventDefault();
			}
		},
		created(){
			this.fetchCustomer(this.$route.params.id)
		},
		components:{
			Alert
		}
	}
</script>

<style>

</style>
