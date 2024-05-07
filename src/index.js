import './style.css'
import _ from "lodash";

function component() {
    const element = document.createElement('div');
  
    // Lodash, currently included via a script, is required for this line to work
    element.innerHTML = _.join('Hi ');
    element.classList.add('hello');
  
    return element;
  }
  
  document.body.appendChild(component());