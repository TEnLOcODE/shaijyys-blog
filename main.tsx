import blog, { ga, redirects } from "./blog.tsx";

blog({
  author: "Eitan B.",
  title: "Shaijyy's Blog",
  description: "A place where I'll post daily shit and other cool stuff.\nVersion 1.0.3",
  avatar: "https://deno-avatar.deno.dev/avatar/blog.svg",
  avatarClass: "rounded-full",
  links: [
    { title: "Email", url: "mailto:shaijyy@duck.com" },
    { title: "GitHub", url: "https://github.com/TEnLOcODE" },
    { title: "Twitter", url: "https://twitter.com/EitanBil" },
  ],
  lang: "en",
  // localised format based on https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat
  dateFormat: (date) =>
    new Intl.DateTimeFormat("en-GB", { dateStyle: "long" }).format(date),
  middlewares: [
    ga("UA-XXXXXXXX-X"),
    redirects({
      "/hello_world.html": "/hello_world",
    }),
  ],
  favicon: "favicon.ico",
}); 