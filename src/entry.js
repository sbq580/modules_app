import { cube } from './math';
//import { double, addFive } from './es6-lib';

function component(){
    var el = document.createElement('pre');
    el.innerHTML = [
        'Hello Webpack',
        '5 is cubed = ' + cube(5)
    ].join('\n\n');

    return el;
}

document.body.appendChild(component());

/* console.log("The double: ", double(45));
console.log("Five added: ", addFive(100)); */