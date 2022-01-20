export default {
  widgets: [
    { name: "structure-menu" },
    {
      name: "project-info",
      options: {
        __experimental_before: [
          {
            name: "netlify",
            options: {
              description:
                "NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.",
              sites: [
                {
                  buildHookId:
                    "61e9177f3a9093ce373e737b",
                  title: "Sanity Studio",
                  name: "sanity-gatsby-blog-studio-6mmc3d6s",
                  apiId: "3f649c06-4f23-498a-993d-1fc156975584",
                },
                {
                  buildHookId: "61e9178025f7efd08002dab8",
                  title: "Blog Website",
                  name: "sanity-gatsby-blog-web-n6zo96zw",
                  apiId: "d6960768-4d21-49d5-aeb7-b1e75fa2188e",
                },
              ],
            },
          },
        ],
        data: [
          {
            title: "GitHub repo",
            value:
              "https://github.com/Elin-Sohlberg/sanity-gatsby-blog",
            category: "Code",
          },
          {
            title: "Frontend",
            value: "https://sanity-gatsby-blog-web-n6zo96zw.netlify.app",
            category: "apps",
          },
        ],
      },
    },
    { name: "project-users", layout: { height: "auto" } },
    {
      name: "document-list",
      options: {
        title: "Recent blog posts",
        order: "_createdAt desc",
        types: ["post"],
      },
      layout: { width: "medium" },
    },
  ],
};
