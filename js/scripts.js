let who = ['The Coronavirus','Iron Man','Mark Zuckerberg','Artificial Intelligence','GoogleMaps'];
let what = ['give me wrong address','stole my time','crash my car','blow my mind','call me'];
let when = ['last night','5 minutes ago','at midnight','whole weekend'];

let myRandomSentenceVariable = who[Math.floor(Math.random() * Math.floor(who.length))] + ' ' + what[Math.floor(Math.random() * Math.floor(what.length))] + ' ' + when[Math.floor(Math.random() * Math.floor(when.length))];

document.querySelector('#excuse').innerHTML = myRandomSentenceVariable;

