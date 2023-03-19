const WorkDetails = [
  {
    id: 1,
    title: "Sleep With Me",
    subtitle: "Sleep timer for your Mac",
    description:
      "Do you like to fall asleep listening to music or podcasts? Or maybe you like to watch some YouTube or Netflix. You can use Sleep With Me to set a timer after which your mac will pause your music or video and put your mac to sleep.",
    platforms: ["macOS", "Web"],
    languages: ["Swift"],
    links: [
      { type: "website", link: "https://www.an23lm.me/sleepwithme" },
      { type: "github", link: "https://www.github.com/an23lm/sleepwithme" },
      {
        type: "appstore",
        link: "https://apps.apple.com/in/app/sleep-with-me/id1396421003?mt=12",
      },
      {
        type: "award",
        link: "https://macdownload.informer.com/sleepwithme/awards/",
        icon: `<link href="https://macdownload.informer.com/style/mac/v4/css_modules/circle_v1.recom.css" rel="stylesheet"/><div class="award"><div class="circle_v1_recom blue exc"><div class="arc-heading "><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="170px" height="170px" viewBox="0 0 160 160"><defs><path id="ha2" d="M 30 80 a 50 50 0 1 1 100 0"></path></defs><text class="arc-heading__heading f9" fill="#000" text-anchor="middle"><textPath startOffset="50%" xlink:href="#ha2">recommended</textPath></text></svg></div><div class="sq_year">2023</div><a href="https://macdownload.informer.com/sleepwithme/" class="sq_center " target="_blank">SleepWithMe</a><div class="arc-heading arc-heading__bottom"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="140px" height="140px" viewBox="0 0 120 120"><defs><path id="sa2" d="M 12 60 a 48 48 0 0 0 96 0"></path></defs><text class="arc-heading__subheading" fill="#000" text-anchor="middle"><textPath startOffset="50%" xlink:href="#sa2"><a href="https://macdownload.informer.com/" target="_blank">by Mac Informer</a></textPath></text></svg></div></div></div>`,
      },
    ],
    images: [
      { url: "images/sleepwithme/m1.webp" },
      { url: "images/sleepwithme/m2.webp" },
    ],
  },
  {
    id: 2,
    title: "Tea-Plates.js",
    subtitle: "Another javascript templating engine",
    description:
      "Tea-Plates accepts JSON and a creates a templating string from the provided JSON Object.",
    platforms: ["Web"],
    languages: ["Javascript", "HTML", "CSS"],
    links: [
      { type: "github", link: "https://github.com/an23lm/tea-plates.js" },
    ],
    images: [
      {
        url: "https://user-images.githubusercontent.com/5507600/167162338-a3bf53a2-4130-4707-939a-367eda62a901.gif",
      },
    ],
  },
  {
    id: 3,
    title: "Moderno",
    subtitle:
      "An open source, simple, powerful, and modern implementation of tables for the web.",
    description:
      "Table Moderno was custom built for CBREX Pvt. Ltd. as there was no open source solution for the tabulation reqirements we had. Table Moderno was built for small to medium sized data-sets, with an empasis on ease of extensible.",
    platforms: ["Web"],
    languages: ["JavaScript", "HTML", "CSS"],
    links: [
      { type: "github", url: "https://github.com/an23lm/Table-Moderno/" },
    ],
    images: [
      {
        url: "https://user-images.githubusercontent.com/5507600/167161309-1bdbe776-5a58-4b12-b348-83a7c4c7f7b0.png",
      },
    ],
  },
  {
    id: 4,
    title: "HRate",
    subtitle: "Real time heart rate overlay",
    description:
      "With HRate you will be able to stream your heart rate from your Apple Watch to your desktop. Video game streamers can now use HRate to further engage their audience.",
    platforms: ["watchOS", "Web"],
    languages: ["Swift"],
    links: [
      { type: "website", link: "https://www.an23lm.me/hrate" },
      { type: "github", link: "https://github.com/H-Rate" },
    ],
    images: [{ url: "images/hrate/h1.webp" }, { url: "images/hrate/h2.webp" }],
  },
];

export default WorkDetails;
