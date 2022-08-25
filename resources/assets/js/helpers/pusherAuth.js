import Echo from 'laravel-echo';

export function PusherAuth() {
    window.Echo = new Echo({
        broadcaster: 'pusher',
        key: '1f66d8e8b19ae22fe6f1',
        cluster: 'ap1',
        encrypted: true,
        auth: {
            headers: {
                Authorization: 'Bearer ' + JSON.parse(localStorage.getItem('user')).token
            },
        },
    });
}