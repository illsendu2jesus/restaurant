import {bx } from "./home.js";
import { cto } from "./about.js";
import {food} from "./menu.js";

import "./styles.css";


let bts = document.querySelectorAll('button');
let ctn = document.getElementById('content');

ctn.appendChild(bx);
let last = bx;

bts.forEach(button=>{
    button.addEventListener('click',()=>{
        let act = button.className ;
        if(act=='home'){
           ctn.removeChild(last);
           ctn.appendChild(bx);
           last = bx;
        }

        else if(act=='contact'){
            ctn.removeChild(last);
            ctn.appendChild(cto);
            last = cto;

        }

        else if(act=='menu'){
            ctn.removeChild(last);
            ctn.appendChild(food);
            last = food;
        }

    })
})
    


