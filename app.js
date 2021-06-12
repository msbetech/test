class auto2 {
    zeigen2() {
        console.log("Bin in auto2");
        let qay = new auto;
        qay.zeigen();
        let json = require('./data.json');
        console.log(json.employees[0].firstName);
        console.log(json.employees[0].lastName);
    }
}

// ****************************************
console.clear();
console.log("Hallo");

abc = new auto();
abc2 = new auto2()
abc.zeigen();
abc2.zeigen2();