<template>
	<div>
		<form @submit.prevent="save" data-vv-scope="form">

			<div class="alert bg-info alert-styled-left mt-2 pt-1 pb-1">
				<p>Apabila anda memiliki ide ataupun masukan atas fitur, tampilan aplikasi, cara pengoperasian ataupun menemukan bug, error dan kesalahan penyajian data, maka silahkan ceritakan kepada kami. Kami akan menampung semua informasi tersebut dan akan menjadi landasan untuk pengembangan selanjutnya. Terima Kasih.</p>
			</div>

			<!-- message -->
			<message v-if="errors.any('form') && submited" :title="'Oops terjadi kesalahan'" :errorItem="errors.items">
			</message>

			<!-- content -->
			<div class="form-group" :class="{'has-error' : errors.has('form.content')}">

				<!-- title -->
				<h5 :class="{ 'text-danger' : errors.has('form.content')}">
					<i class="icon-cross2" v-if="errors.has('form.content')"></i>
					Saran:
				</h5>

				<!-- textarea -->
				<textarea rows="5" type="text" name="content" class="form-control" placeholder="Silahkan masukkan saran anda"
					v-validate="'required|min:5'" v-model="form.content"></textarea>

				<!-- error message -->
				<small class="text-muted text-danger" v-if="errors.has('form.content')">
					<i class="icon-arrow-small-right"></i> {{ errors.first('form.content') }}
				</small>
				<small class="text-muted" v-else>&nbsp;
				</small>
			</div>

			<hr>
			<form-button
				:cancelTitle="cancelTitle"
				:cancelIcon="cancelIcon"
				:cancelState="cancelState"
				:formValidation="'form'"
				@cancelClick="cancelClick"></form-button>

		</form>

	</div>
</template>

<script>
	import message from "../../components/message.vue";
	import formButton from "../../components/formButton.vue";

	export default {
		props: ['id_user'],
		components: {
			message,
			formButton,
		},
		data() {
			return {
				kelas: 'saran',
				form: {
					id_user: '',
					content: ''
				},
				submited: false,
				cancelTitle: 'Tutup',
				cancelIcon: 'icon-cross',
				cancelState: 'methods'
			}
		},
		methods: {
			save() {
				this.form.id_user = this.id_user;
				this.$validator.validateAll('form').then((result) => {
					if(result){
						this.$store.dispatch(this.kelas + '/store',this.form);
					}else{
						window.scrollTo(0, 0);
						this.submited = true;
					}
				});	
			},
			cancelClick(){
				this.$emit('cancelClick');
			}
		}
	}
</script>