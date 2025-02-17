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
    },
    collaborator: {
        root: {
            path: '/collaborator',
            getHref: () => '/collaborator',
        },
    },
    admin: {
        root: {
            path: '/admin',
            getHref: () => '/admin',
        },
    },
}

export { paths };
