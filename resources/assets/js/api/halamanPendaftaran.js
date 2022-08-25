export default {

    index: function(p) {
        return axios.get('/api/halamanPendaftaran', { params: p });
    },

    create: function() {
        return axios.get('/api/halamanPendaftaran/create');
    },

    store: function(form) {
        return axios.post('/api/halamanPendaftaran/store', form);
    },

    edit: function(id) {
        return axios.get('/api/halamanPendaftaran/edit/' + id);
    },

    update: function(id, form) {
        return axios.post('/api/halamanPendaftaran/update/' + id, form);
    },

    destroy: function(id) {
        return axios.delete('/api/halamanPendaftaran/' + id);
    },

}