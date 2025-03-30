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
        deployments: {
            path: 'deployments',
            getHref: () => '/deployments'
        },
        individual_deployments: {
            path: 'deployments/:id',
            getHref: () => '/deployments/:id'
        },
        login: {
            path: 'login',
            getHref: () => '/login'
        },
        newsletter: {
            path: 'newsletter',
            getHref: () => '/newsletter'
        },
        ContactUs: { 
            path: 'ContactUs',
            getHref: () => '/contactUs'
        }
    },
    collaborator: {
        root: {
            path: '/collaborator',
            getHref: () => '/collaborator',
        },
        test: {
            path: 'test',
            getHref: () => '/test',
        }
    },
    admin: {
        root: {
            path: '/admin',
            getHref: () => '/admin',
        },
        test: {
            path: 'test',
            getHref: () => '/test',
        }
    },
}

export { paths };
