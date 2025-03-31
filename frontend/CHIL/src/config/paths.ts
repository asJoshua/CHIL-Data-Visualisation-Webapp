const paths = {
<<<<<<< HEAD
  public: {
    root: {
      path: "/",
      getHref: () => "/",
=======
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
>>>>>>> 3b4c2ed4a5610451e2adedb03396e37dec4b693b
    },
    home: {
      path: "home",
      getHref: () => "/home",
    },
    deployments: {
      path: "deployments",
      getHref: () => "/deployments",
      view: {
        path: ":id",
        getHref: (id: string | number) => `/deployments/${id}`,
      },
      edit: {
        path: ":id/edit",
        getHref: (id: string | number) => `/deployments/${id}/edit`,
      },
    },
<<<<<<< HEAD
    individual_deployments: {
      path: "deployments/:id",
      getHref: () => "/deployments/:id",
    },
    login: {
      path: "login",
      getHref: () => "/login",
    },
    newsletter: {
      path: "newsletter",
      getHref: () => "/newsletter",
    },
  },
  collaborator: {
    root: {
      path: "/collaborator",
      getHref: () => "/collaborator",
    },
    test: {
      path: "test",
      getHref: () => "/test",
    },
    upload: {
      path: "upload",
      getHref: () => "/upload",
    },
  },
  admin: {
    root: {
      path: "/admin",
      getHref: () => "/admin",
    },
    test: {
      path: "test",
      getHref: () => "/test",
    },
    upload: {
      path: "upload",
      getHref: () => "/upload",
    },
  },
};
=======
    notFound: {  
        path: '*',
        getHref: () => '*'
    }
}
>>>>>>> 3b4c2ed4a5610451e2adedb03396e37dec4b693b

export { paths };
