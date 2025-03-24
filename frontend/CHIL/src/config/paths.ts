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
            getHref: () => '/deployments',
            view: { 
                path: ':id',
                getHref: (id: string | number) => `/deployments/${id}`
            },
            edit: { 
                path: ':id/edit',
                getHref: (id: string | number) => `/deployments/${id}/edit`
            }
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
