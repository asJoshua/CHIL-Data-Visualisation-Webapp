const paths = {
    public: {
        root: {
            path: '/',
            getHref: () => '/',
        },
        home: {
            path: 'home',
            getHref: () => '/home'
        },
        login: {
            path: 'login',
            getHref: () => '/login'
        },
        deployments: {
            path: 'deployments',
            getHref: () => '/deployments'
        },
    }
}

export { paths };
