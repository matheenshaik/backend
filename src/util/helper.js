let today = new Date()

let day = today.getDate();
let mont = today.getMonth() + 1;

console.log(today)

let info = 'about'

let information = function(){
    console.log('info about',info)
}

module.exports.info = info
module.exports.information = information

module.exports.date = today

