import { cube } from './math';

function component(){
    var el = document.createElement('pre');
    el.innerHTML = [
        'Hello Webpack',
        '5 is cubed = ' + cube(5)
    ].join('\n\n');

    return el;
}

document.body.appendChild(component());