import {salaryA} from './RenderSalary.js'

// Role Radio Box
let ct = document.getElementById('ct'); // Cto
let tl = document.getElementById('tl');//technical lead
let seii = document.getElementById('seii');//software engineer ii
let sei = document.getElementById('sei');//software engineer i

//company radio box

let b = document.getElementById('b'); // Big data
let m = document.getElementById('m'); //meduim Data
let s = document.getElementById('s'); //small data

//Salary Inputs

let text1=document.getElementById('details'); // paragraph



let choices = {

    // CTO > big data > medium > small data

    CTO:()=>{

ct.addEventListener('click',()=> {
    b.addEventListener('click',()=> {
        text1.innerHTML =`Role : ${salaryA[0].role} <br>
        company: ${salaryA[0].company}<br>
        salary : ${salaryA[0].salary}<br>
        `;
    
        })

        m.addEventListener('click',()=> {
            text1.innerHTML =`Role : ${salaryA[1].role} <br>
            company: ${salaryA[1].company}<br>
            salary : ${salaryA[1].salary}<br>
            `;
    
        })

        s.addEventListener('click',()=> {
            text1.innerHTML =`Role : ${salaryA[2].role} <br>
            company: ${salaryA[2].company}<br>
            salary : ${salaryA[2].salary}<br>
            `;
    
        })

}) 

  
},
    // Technical Lead > big data > medium > small data

technicalLead:() => {
    tl.addEventListener('click',()=> {
        b.addEventListener('click',()=> {
            text1.innerHTML =`Role : ${salaryA[3].role} <br>
            company: ${salaryA[3].company}<br>
            salary : ${salaryA[3].salary}<br>
            `;    
            })
            m.addEventListener('click',()=> {
                text1.innerHTML =`Role : ${salaryA[4].role} <br>
                company: ${salaryA[4].company}<br>
                salary : ${salaryA[4].salary}<br>
                `;    
            })
            s.addEventListener('click',()=> {
                text1.innerHTML =`Role : ${salaryA[5].role} <br>
                company: ${salaryA[5].company}<br>
                salary : ${salaryA[5].salary}<br>
                `;    
            })
    
    
    }) 

},

    // Software Engineer II > big data > medium > small data

softwareEnginnerii:()=> {

    seii.addEventListener('click',()=> {
        b.addEventListener('click',()=> {
            text1.innerHTML =`Role : ${salaryA[6].role} <br>
            company: ${salaryA[6].company}<br>
            salary : ${salaryA[6].salary}<br>
            `;    
            })
            m.addEventListener('click',()=> {
                text1.innerHTML =`Role : ${salaryA[7].role} <br>
                company: ${salaryA[7].company}<br>
                salary : ${salaryA[7].salary}<br>
                `;    
            })
            s.addEventListener('click',()=> {
                text1.innerHTML =`Role : ${salaryA[8].role} <br>
                company: ${salaryA[8].company}<br>
                salary : ${salaryA[8].salary}<br>
                `;    
            })
    
    
    }) 

}, 
    // Software Engineer I > big data > medium > small data

softwareEnginneri:()=> {

    sei.addEventListener('click',()=> {
        b.addEventListener('click',()=> {
            text1.innerHTML =`Role : ${salaryA[9].role} <br>
            company: ${salaryA[9].company}<br>
            salary : ${salaryA[9].salary}<br>
            `;    
            })
            m.addEventListener('click',()=> {
                text1.innerHTML =`Role : ${salaryA[10].role} <br>
                company: ${salaryA[10].company}<br>
                salary : ${salaryA[10].salary}<br>
                `;    
            })
            s.addEventListener('click',()=> {
                text1.innerHTML =`Role : ${salaryA[11].role} <br>
                company: ${salaryA[11].company}<br>
                salary : ${salaryA[11].salary}<br>
                `;    
            })
    
    
    }) 

}



}

  
choices.CTO(); // For CTO
choices.technicalLead();//for Technical Lead
choices.softwareEnginnerii(); //For software Enginner II
choices.softwareEnginneri(); //For software Enginner I
