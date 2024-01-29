import blog, { ga, redirects } from "./blog.tsx";

blog({
  author: "Eitan B.",
  title: "Shaijyy's Blog ✌️",
  description: "A place where I'll post daily cool stuff and other things 😅",
  avatar: "favicon.ico",
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
      "/intro.html": "/intro",
      "/eat_shit.html": "/eat_shit",
    }),
  ],
  favicon: "favicon.ico",
}); 
