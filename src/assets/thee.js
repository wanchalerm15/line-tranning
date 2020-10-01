new Vue({
    el: '#orm',
    data: {
        items: []
    },
    async created() {
        this.items = await fetch('/api/messages').then(res => res.json());
    }
});