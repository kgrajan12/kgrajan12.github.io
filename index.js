const CONST = {
  PRESENT: "present",
};
const experiances = [
  {
    company: "Photon Interactive Pvt Ltd",
    joiningDate: "2023-06-16",
    exitDate: CONST.PRESENT,
    position: "Senior Software Engineer",
  },
  {
    company: "FOODHUB",
    joiningDate: "2022-01-01",
    exitDate: "2023-06-14",
    position: "Senior Software Engineer",
  },
  {
    company: "FOODHUB",
    joiningDate: "2020-05-06",
    exitDate: "2021-12-31",
    position: "Software Engineer L2",
  },
  {
    company: "Kshathriya Technologix",
    joiningDate: "2018-08-10",
    exitDate: "2020-03-31",
    position: "Software Engineer",
  },
  // {
  //   company: "Mymoon Software",
  //   joiningDate: "2017-12-01",
  //   exitDate: "2018-05-31",
  //   position: "Software Developer Intern",
  // },
];
const projects = [];
const experiance = calculateExp();
const info = {
  name: "Gajarajan Kaliyappan",
  ...experiances[0],
  experianceYear: experiance.years,
  experianceMonth: experiance.months
    ? `${experiance.months} Month${experiance.months == 1 ? "" : "s"}`
    : "",
  profileImg: "assets/profile.jpg",
  // profileImg: "https://avatars.githubusercontent.com/u/31614308"
};

function setValue(field) {
  var doc = document.getElementById(field);
  var docs = document.getElementsByClassName(field);
  if (doc) {
    doc.innerText = info[field];
  }
  if (docs.length) {
    for (const doc of docs) {
      if (doc.tagName == "IMG") {
        doc.src = info[field];
        doc.alt = info.name;
      } else {
        doc.innerText = info[field];
      }
    }
  }
}

function calculateExp() {
  var exp = 0;
  experiances.forEach((exps) => {
    let endDate = new Date().getTime(),
      joinDate = new Date(exps.joiningDate).getTime();
    exps.exitDate !== CONST.PRESENT &&
      (endDate = new Date(exps.exitDate).getTime());
    exp += endDate - joinDate;
  });
  exp = moment.duration(exp);
  return exp._data;
}

const menu = [
  {
    href: "#",
    menu: "Home",
  },
  {
    href: "#my-journey",
    menu: "My Journey",
  },
];

menu.forEach((item) => {
  const menuElm = document.getElementsByClassName("menu");
  for (const elm of menuElm) {
    const link = document.createElement("a");
    link.href = item.href;
    link.innerText = item.menu;
    elm.appendChild(link);
  }
});
Object.keys(info).forEach(setValue);

console.log(experiance);
console.log(info.experianceYear, info.experianceMonth);

/* Set the width of the side navigation to 250px and the left margin of the page content to 250px and add a black background color to body */
function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
  document.getElementById("back-drop").classList.remove("d-none");
}

/* Set the width of the side navigation to 0 and the left margin of the page content to 0, and the background color of body to white */
function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  document.getElementById("back-drop").classList.add("d-none");
}
