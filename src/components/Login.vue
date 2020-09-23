<template>
 <div>
   <form class="login" @submit.prevent="login">
     <h1>Sign in</h1>
     <label>Email</label>
     <input required v-model="user.username" type="text" placeholder="Name"/>
     <label>Password</label>
     <input required v-model="user.password" type="password" placeholder="Password"/>
     <hr/>
     <button type="submit">Login</button>
	 <button @click.prevent="getMembers">Click</button>
   </form>
 </div>
</template>
<script>
	export default {
		data(){
			return {
				user : {
					username: 'new1@gmail.com',
					password: '123'
				},
            }
		},
		methods: {
		 	login: function () {
		   		this.$store.dispatch('auth/login', this.user)
		   		.then(() => {
					   //this.$router.push('/')
				})
		   		.catch(err => console.log(err))
			   },
			
			getMembers: function(){
				this.$store.dispatch('auth/getMembers');
			}
		}
	}
</script>