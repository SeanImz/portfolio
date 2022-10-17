const textIntro =
  "This portfolio is made with plain HTML, CSS (SCSS) and vanilla JavaScript. No templates, frameworks or libraries have been used.";
const titleIntro = "Used on this website:";

const textHtml =
  "I like to write clear, well-structured, semantic HTML. This makes the code easier to understand for other developers, more easily interpreted by both browsers and search engines, and better for accessibility.";
const titleHtml = "HTML";

const textCss =
  "I started using CSS in my own hobby websites many years ago, and more recently brushed up on my understanding of CSS3 including Flexbox and Grid.";
const titleCss = "CSS";

const textSass =
  "I've found that I enjoy using the additional capabilities provided by SASS/SCSS, such as the nested structure for easier understanding and maintenance of code, and the use of variables for easier updating.";
const titleSass = "SASS / SCSS";

const textRwd =
  "With web access now possible via a huge variety of devices, designing for these different devices and viewport sizes has become an essential skill, using media queries, flexible images, utilising the power of Flexbox and Grid, flexible font sizes, etc..";
const titleRwd = "Responsive Web Design";

const textJs =
  "Having learnt the fundamentals of JavaScript, I'm currently building smaller components and projects to reinforce these skills and apply them to real-world problems.";
const titleJs = "JavaScript";

const textReact =
  "In parallel with continued JS learning, I have started learning how to build components with the popular React.js framework.";
const titleReact = "React.js";

const textAccess =
  "&quot;The power of the Web is in its universality. Access by everyone regardless of disability is an essential aspect.&quot; - Tim Berners-Lee. Designing for easier accessibility also tends to improve a website for all users, as well as improving SEO - clearly a win-win for everyone!";
const titleAccess = "Accessibility";

const textGit =
  "I have familiarised myself with the fundamentals of using Git for version control and collaboration, and pushing to GitHub to maintain a remote repository.";
const titleGit = "Git / GitHub";

const textPhp =
  "I have learnt the fundamentals of PHP, and I'm continuing my learning of this very widely used programming language.";
const titlePhp = "PHP";

const textWordpress =
  "Having learnt the basics of using the WordPress CMS, I have built a website to continue learning more advanced use.";
const titleWordpress = "WordPress";

const textMysql =
  "I first wrote a database program in BASIC many years ago! Having now learnt the fundamentals of MySQL, I am currently using it to build a large database for use on one of my older websites, in order to create dynamic content to replace static pages.";
const titleMysql = "MySQL";

const textPs =
  "I use Photoshop regularly for manipulating photos and other images, and for creating banners and other graphics.";
const titlePs = "Photoshop";

const textDigMarket =
  "A website or app isn't much good if nobody finds or uses it. Digital marketing is about making sure users and potential customers can find the website, and analysing how they interact with it, to see where improvements can be made.";
const titleDigMarket = "Digital Marketing";

const textVsc =
  "I used to code solely in Notepad, but VSC has so many advantages, it's hard to imagine coding without it (or a similar editor) now!";
const titleVsc = "Visual Studio Code";

const textUx =
  "User Experience is all about making sure users of your website or app find it intuitive and easy to use.";
const titleUx = "User Experience (UX)";

const textSoft =
  "So-called Soft Skills are just as vital as technical skills in the workplace, and I have been able to hone important skills such as communication, teamwork and analytical skills in my various job roles.";
const titleSoft = "Soft Skills";

const textOther =
  "I also have some knowledge or experience of a number of other tools, including NPM, Jira, Slack, Agile Development Practices and MS Office.";
const titleOther = "Other Skills";

function textDefault(title, text) {
  document.getElementById("textWindow").style.transitionDuration = "0.75s";
  document.getElementById("textWindow").style.color = "#cfdbec";
  document.getElementById("title").style.opacity = "0.3";
}

function textSwap(title, text) {
  document.getElementById("textWindow").style.transition = "all 1.25s";
  document.getElementById("title").style.opacity = "1";
  document.getElementById("textWindow").style.color = "#26364d";
  document.getElementById("title").innerHTML = title;
  document.getElementById("textWindow").innerHTML = text;
}
