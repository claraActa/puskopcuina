<template>
	<div>
		<button type="button" class="btn btn-light btn-block" @click.prevent="fetchAktivitas(1)">
			<i class="icon-sync" :class="{'spinner' : activityStat === 'loading'}"></i>
		</button>

		<hr/>
		
		<div class="card-group-control card-group-control-right" id="accordion-control-right" v-if="activityStat == 'success'">

			<div class="card" v-for="(item, index) in activity.data" :key="index">
				<div class="card-header text-white" :class="{'bg-primary' : item.description == 'created', 'bg-warning' : item.description == 'updated', 'bg-danger' : item.description == 'deleted'}">
					<h6 class="card-title">
						<a data-toggle="collapse" class="text-white collapsed" :href="'#v' + item.id" aria-expanded="false">{{ item.description | description }} data <b>{{ item.subject_type | subjectType }}</b> dengan id {{ item.subject_id}} pada {{ item.created_at | relativeHour }}</a>
					</h6>
				</div>

				<div :id="'v' + item.id" class="collapse" data-parent="#accordion-control-right" style="">
					<div class="card-body">
						<strong>Tanggal Aktivitas: </strong> <span v-html="$options.filters.dateTime(item.created_at)"></span>
						<hr/>
						<strong v-if="item.description == 'created'">Data yang ditambah:</strong>
						<strong v-else-if="item.description == 'updated'">Data yang diubah:</strong>
						<strong v-else-if="item.description == 'deleted'">Data yang dihapus:</strong>

						<div v-if="item.properties">
							<pre class="pre-scrollable language-markup content-group text-left"><code>{{ item.properties.attributes }}</code></pre>

							<div v-if="item.properties.old">
								<hr/>
								<strong>Data sebelum diubah</strong>
								<pre class="pre-scrollable language-markup content-group text-left"><code>{{ item.properties.old }}</code></pre>
							</div>
						</div>

					</div>
				</div>
			</div>

			<div  v-if="activity.data.length == 0">
				<div class="card">
					<div class="card-body">
						<h3>Belum terdapat aktivitas apapun...</h3>
					</div>
				</div>
			</div>
		</div>

		<div v-if="activityStat == 'loading'">
			<div class="card">
				<div class="card-body">
					<h4>Mohon tunggu...</h4>
					<div class="progress">
						<div class="progress-bar progress-bar-info progress-bar-striped progress-bar-animated" style="width: 100%">
							<span class="sr-only">100% Complete</span>
						</div>
					</div>
				</div>
			</div>
		</div>

		<pagination v-if="activityStat == 'success'" :data="activity" :limit="10" @pagination-change-page="fetchAktivitas" class="pre-scrollable"></pagination>
	</div>
</template>

<script>
	import pagination from "laravel-vue-pagination";
	
	export default {
		props: ['activity','activityStat'],
		components: {
			pagination
		},
		data() {
			return {
			}
		},
		methods: {
			fetchAktivitas(page = 1){
				this.$emit('fetchAktivitas',page);
			},
		},
		filters: {
			description: function (value) {
				if(value == 'created'){
					return 'Menambah';
				}else if(value == 'updated'){
					return 'Mengubah';
				}else if(value == 'deleted'){
					return 'Menghapus';
				}
			},
			subjectType: function (value) {
				return value;
			}
		}
	}
</script>