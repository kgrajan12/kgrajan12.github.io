const CONST = {
    PRESENT: 'present'
}
const experiances = [
    {
        company: 'FOODHUB',
        joiningDate: '2022-01-01',
        exitDate: CONST.PRESENT,
        position: 'Senior Software Engineer'
    }, {
        company: 'FOODHUB',
        joiningDate: '2020-05-06',
        exitDate: '2021-12-31',
        position: 'Software Engineer L2'
    }, {
        company: 'Kshathriya Technologix',
        joiningDate: '2018-08-10',
        exitDate: '2020-03-31',
        position: 'Software Engineer'
    }, {
        company: 'Mymoon Software',
        joiningDate: '2017-12-01',
        exitDate: '2018-05-31',
        position: 'Software Developer Intern'
    }
];
const projects = [];
const experiance = calculateExp();
const info = {
    name: 'Gajarajan K',
    ...experiances[0],
    experianceYear: experiance.years,
    experianceMonth: experiance.months ? `${experiance.months} Month${experiance.months == 1 ? '' : 's'}` : ''
}

function setValue(field) {
    var doc = document.getElementById(field);
    doc && (doc.innerText = info[field]);
}

function calculateExp() {
    var exp = 0;
    experiances.forEach(exps => {
        let endDate = new Date().getTime(), joinDate = new Date(exps.joiningDate).getTime();
        exps.exitDate !== CONST.PRESENT && (endDate = new Date(exps.exitDate).getTime());
        exp += endDate - joinDate;
    });
    exp = moment.duration(exp);
    return exp._data;
}

Object.keys(info).forEach(setValue);
console.log(experiance);
console.log(info.experianceYear, info.experianceMonth);

function toggleHeader() {
    var navbarText = document.getElementById('navbarText');
    // if(screen.width <= 991) {
    //     setTimeout(function() {
    //         menu.click();
    //     }, 1000);
    // }
}