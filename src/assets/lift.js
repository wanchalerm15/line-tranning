liff
    .init({
        liffId: '1655031880-ngzpd2KE'
    })
    .then(() => {
        new Vue({
            el: '#app',
            data: {
                userContext: null
            },
            created() {
                if (!liff.isLoggedIn()) return liff.login();
                this.userContext = liff.getContext();
            },
            methods: {
                onShowUserId() {
                    liff.sendMessages([{
                        'type': 'text',
                        'text': `User id ของคุณคือ : ${this.userContext.userId}.`
                    }]);
                    liff.closeWindow();
                }
            }
        });
    });