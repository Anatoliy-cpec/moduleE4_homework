const obj1 = {a:1, b:2, c:'3', d:'4'};

function getValues(obj) {

    for (let key in obj) {
        if (obj.hasOwnProperty(key)){
            console.log(`Key: ${key}, value: ${obj[key]}`);
        }
    }

};

getValues(obj1);