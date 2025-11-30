const devData = {
  summary: [
    "My name is Abderrahim Abid, a Full-Stack Developer, UI/UX Designer, and QA & Automation Specialist based in Casablanca, Morocco.",
    "Practical experience in web development, user-centered design, and freelance projects for web applications.",
    "Passionate about continuous learning, creating high-performance digital solutions, and working remotely on global projects.",
  ],
  info: {
    name: "Abderrahim Abid",
    title: "Full-Stack Developer | UI/UX Designer | QA & Automation Specialist",
    email: "abidabderrahim.work@gmail.com",
    phone: "+212 632-473292",
    location: "Casablanca, Morocco",
    age: 25,
    linkedin: "https://linkedin.com/in/abidabderrahim",
    github: "https://github.com/abidabderrahim",
  },
  skills: {
    programmingLanguages: ["JavaScript", "Python", "C"],
    frontEnd: ["HTML5", "CSS3"],
    design: ["UI/UX Design", "Figma", "Responsive Design"],
    personalSkills: [
      "Problem Solving",
      "Communication",
      "Self-Learning",
      "Time Management",
      "Attention to Detail",
    ],
    tools: ["Git", "GitHub", "VS Code", "Linux Terminal"],
    spokenLanguages: {
      Arabic: "Native",
      English: "Intermediate",
      French: "Beginner",
    },
  },
  experience: [
    {
      role: "UI/UX Designer",
      company: "ALX Ventures / 2pi Startup",
      period: "2024 - Present",
      description:
        "Worked on user-centered design and smooth product experiences.",
    },
    {
      role: "Freelance Developer & Designer",
      period: "2023 - Present",
      description: "Delivering web solutions remotely for various clients.",
    },
    {
      role: "Various Jobs (Painter, Tailor, Commerce)",
      period: "2020 - 2023",
      description:
        "Developed communication, interpersonal skills, responsibility, and commitment.",
    },
  ],
  education: [
    {
      degree: "High School Diploma in Physics",
      institution: "Lycée Imam Ghazali, Morocco",
      year: 2020,
    },
    {
      degree: "Continuous Learning & Professional Development",
      institution:
        "ALX Professional Foundations, AI Career Essentials, IBM SkillsBuild Courses",
      period: "2023 - Present",
    },
  ],
  certifications: [
    "IBM SkillsBuild: Web Developer Fundamentals",
    "User Experience Design Fundamentals",
    "Exploring Emerging Technologies",
    "Cybersecurity Fundamentals",
  ],
  hobbies: [
    "Reading tech blogs",
    "Exploring new design trends",
    "Coding personal projects",
    "Weight training",
    "Long-distance running",
    "Hiking",
    "Photography",
    "Traveling",
  ],
  projects: [
    {
      name: "Personal Developer Portfolio",
      link: "https://github.com/abidabderrahim",
    },
    { name: "E-commerce Store", link: "https://github.com/abidabderrahim" },
    { name: "QA Automation Suite", link: "https://github.com/abidabderrahim" },
  ],
};

// Syntax highlight functions
const highlight = {
  keyword: (t) => `<span class="keyword">${t}</span>`,
  type: (t) => `<span class="type">${t}</span>`,
  string: (t) => `<span class="string">"${t}"</span>`,
  number: (t) => `<span class="number">${t}</span>`,
  comment: (t) => `<span class="comment">/* ${t} */</span>`,
};

// CONTENT1: PROFILE & SKILLS
const content1 = document.querySelector(".content1");

// Profile title
let titleHTML = `<div class="portfolio-title">
<pre>${highlight.keyword("struct")} Profile {
  ${highlight.type("string")} title = ${highlight.string("My Portfolio")};
};</pre></div>`;

// Skills sections
let skillsHTML = `<div class="skills">
<h3>${highlight.comment("Skills")}</h3>
<p>${highlight.keyword("enum")} ProgrammingLanguages {</p>
<ul>${devData.skills.programmingLanguages
  .map((i) => `<li>${highlight.type(i)};</li>`)
  .join("")}</ul>
<p>}</p>

<p>${highlight.keyword("struct")} FrontEnd {</p>
<ul>${devData.skills.frontEnd
  .map((i) => `<li>${highlight.type(i)};</li>`)
  .join("")}</ul>
<p>}</p>

<p>${highlight.keyword("struct")} Design {</p>
<ul>${devData.skills.design
  .map((i) => `<li>${highlight.type(i)};</li>`)
  .join("")}</ul>
<p>}</p>

<p>${highlight.keyword("struct")} PersonalSkills {</p>
<ul>${devData.skills.personalSkills
  .map((i) => `<li>${highlight.type(i)};</li>`)
  .join("")}</ul>
<p>}</p>

<p>${highlight.keyword("struct")} Tools {</p>
<ul>${devData.skills.tools
  .map((i) => `<li>${highlight.type(i)};</li>`)
  .join("")}</ul>
<p>}</p>

<p>${highlight.keyword("struct")} SpokenLanguages {</p>
<ul>${Object.entries(devData.skills.spokenLanguages)
  .map(
    ([lang, level]) =>
      `<li>${highlight.type(lang)} = ${highlight.string(level)};</li>`
  )
  .join("")}</ul>
<p>}</p></div>`;

content1.innerHTML = titleHTML + skillsHTML;

// CONTENT2: SUMMARY, INFO, EXPERIENCE, EDUCATION, PROJECTS, CERTIFICATIONS, HOBBIES
const content2 = document.querySelector(".content2");

const renderList = (title, arr) => `<div class="${title.toLowerCase()}">
<h3>${highlight.comment(title)}</h3>
<pre>${arr.map((i) => `  ${i}`).join("\n")}</pre></div>`;

const summaryHTML = `<div class="summary">
<h3>${highlight.comment("Summary")}</h3>
<pre>${devData.summary.map((s) => highlight.comment(s)).join("\n")}</pre>
</div>`;

// Info struct
const infoHTML = `<div class="info">
<h3>${highlight.comment("Info")}</h3>
<pre>${highlight.keyword("struct")} Info {
  ${highlight.type("string")} name = ${highlight.string(devData.info.name)};
  ${highlight.type("string")} title = ${highlight.string(devData.info.title)};
  ${highlight.type("string")} email = <a href="mailto:${devData.info.email}" style="color: var(--blue); text-decoration:none;">${highlight.string(devData.info.email)}</a>;
  ${highlight.type("string")} phone = <a href="tel:${devData.info.phone}" style="color: var(--blue); text-decoration:none;">${highlight.string(devData.info.phone)}</a>;
  ${highlight.type("string")} location = <a href="https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(devData.info.location)}" target="_blank" style="color: var(--blue); text-decoration:none;">${highlight.string(devData.info.location)}</a>;
  ${highlight.type("int")} age = ${highlight.number(devData.info.age)};
  ${highlight.type("string")} linkedin = <a href="${devData.info.linkedin}" target="_blank" style="color: var(--blue); text-decoration:none;">${highlight.string(devData.info.linkedin)}</a>;
  ${highlight.type("string")} github = <a href="${devData.info.github}" target="_blank" style="color: var(--blue); text-decoration:none;">${highlight.string(devData.info.github)}</a>;
};</pre></div>`;


// Experience functions
const experienceHTML = `<div class="experience">
<h3>${highlight.comment("Experience")}</h3>
${devData.experience
  .map(
    (e, i) => `<pre>${highlight.keyword("void")} experience${i + 1}() {
  ${highlight.type("string")} role = ${highlight.string(e.role)};
  ${highlight.type("string")} company = ${highlight.string(e.company || "")};
  ${highlight.type("string")} period = ${highlight.string(e.period)};
  ${highlight.type("string")} description = ${highlight.string(e.description)};
}</pre>`
  )
  .join("")}
</div>`;

// Education functions
const educationHTML = `<div class="education">
<h3>${highlight.comment("Education")}</h3>
${devData.education
  .map(
    (e, i) => `<pre>${highlight.keyword("void")} education${i + 1}() {
  ${highlight.type("string")} degree = ${highlight.string(e.degree)};
  ${highlight.type("string")} institution = ${highlight.string(e.institution)};
  ${highlight.type("string")} yearOrPeriod = ${highlight.string(
      e.year || e.period
    )};
}</pre>`
  )
  .join("")}
</div>`;

// Projects enum
const projectsHTML = `<div class="projects">
<h3>${highlight.comment("Projects")}</h3>
<p>${highlight.keyword("enum")} Projects {</p>
<ul>${devData.projects
  .map(
    (p) =>
      `<li><a href="${p.link}" target="_blank">${highlight.type(
        p.name
      )}</a>;</li>`
  )
  .join("")}</ul>
<p>}</p>
</div>`;

// Certifications & Hobbies
const certificationsHTML = `<div class="certifications">
<h3>${highlight.comment("Certifications")}</h3>
<pre>${devData.certifications.map((c) => highlight.string(c)).join("\n")}</pre>
</div>`;

const hobbiesHTML = `<div class="hobbies">
<h3>${highlight.comment("Hobbies")}</h3>
<pre>${devData.hobbies.map((h) => highlight.type(h)).join("\n")}</pre>
</div>`;

content2.innerHTML =
  summaryHTML +
  infoHTML +
  experienceHTML +
  educationHTML +
  projectsHTML +
  certificationsHTML +
  hobbiesHTML;
