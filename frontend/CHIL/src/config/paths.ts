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
        aboutUs: {
            path: 'aboutUs',
            getHref: () => '/aboutUs'
        },
    }
}

export { paths };
