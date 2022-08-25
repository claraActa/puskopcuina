export default {

    index: function(p) {
        return axios.get('/api/halamanSaran', { params: p });
    },

    create: function() {
        return axios.get('/api/halamanSaran/create');
    },

    store: function(form) {
        return axios.post('/api/halamanSaran/store', form);
    },

    edit: function(id) {
        return axios.get('/api/halamanSaran/edit/' + id);
    },

    update: function(id, form) {
        return axios.post('/api/halamanSaran/update/' + id, form);
    },

    destroy: function(id) {
        return axios.delete('/api/halamanSaran/' + id);
    },

}