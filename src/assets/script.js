new Vue({
    el: '#yam',
    data: {
        items: []
    },
    async created() {
        this.items = await fetch('/api/lists').then(res => res.json());
    }
});