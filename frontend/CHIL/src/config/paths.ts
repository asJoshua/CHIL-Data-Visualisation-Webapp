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
        },
        individual_deployments: {
            path: 'deployments/:id',
            getHref: () => '/deployments/:id'
        },
        login: {
            path: 'login',
            getHref: () => '/login'
        },
        aboutUs: {
            path: 'aboutUs',
            getHref: () => '/aboutUs'
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
        },
        upload: {
            path: 'upload',
            getHref: () => '/upload'
        },
    },
    admin: {
        root: {
            path: '/admin',
            getHref: () => '/admin',
        },
        test: {
            path: 'test',
            getHref: () => '/test',
        },
        contactSubmissions: { 
            path: 'contact-submissions',
            getHref: () => '/admin/contact-submissions'
        }
        },
        notFound: {  
            path: '*',
            getHref: () => '*'
        }
    }
    

export { paths };
