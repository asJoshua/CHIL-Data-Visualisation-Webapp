const paths = {
  public: {
    root: {
      path: "/",
      getHref: () => "/",
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
    login: {
      path: "login",
      getHref: () => "/login",
    },
    newsletter: {
      path: "newsletter",
      getHref: () => "/newsletter",
    },
    aboutUs: {
      path: "aboutUs",
      getHref: () => "/aboutUs",
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
    admin_panel: {
      path: "dashboard",
      getHref: "/dashboard",
    },
    // campaign: {
    //   path: "campaign",
    //   getHref: () => "/home",
    //   create: {
    //     path: "/create",
    //     getHref: () => "/create",
    //   },
    // },
  },
  notFound: {
    path: "*",
    getHref: () => "*",
  },
};

export { paths };
