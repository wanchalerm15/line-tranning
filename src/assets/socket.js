const socket = io();
new Vue({
    el: '#app',
    data: {
        items: []
    },
    created() {
        socket.on('events', body => this.items.push(body));
        socket.on('connect', () => console.log(socket.id, ' Connected.'));
    },
    methods: {
        onSubmit(event) {
            const form = event.target;
            socket.emit('events', {
                name: socket.id,
                message: form.message.value
            });
            form.message.value = '';
        }
    }
});