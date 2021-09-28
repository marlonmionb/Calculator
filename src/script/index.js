const calculateBtn = document.getElementById('btn')
const form = document.querySelector('.memory')
let leftOperand = document.querySelector('#left-operand')
let rightOperand = document.querySelector('#right-operand')
let operator = document.querySelector('#operator')



function calculate() {
    let registry = document.createElement("p");  

    if(isNumeric(leftOperand.value)){
        switch (operator.value) {
            case 'sum':
                result = parseInt(leftOperand.value) + parseInt(rightOperand.value);  
                registry.append(`${leftOperand.value} + ${rightOperand.value} = ${result}`)
                form.appendChild(registry)
                break;
    
            case 'subtraction':
                result = parseInt(leftOperand.value) - parseInt(rightOperand.value);
                registry.append(`${leftOperand.value} - ${rightOperand.value} = ${result}`)
                form.appendChild(registry)
                break;
    
            case 'multiplication':
                result = parseInt(leftOperand.value) * parseInt(rightOperand.value);
                registry.append(`${leftOperand.value} * ${rightOperand.value} = ${result}`)
                form.appendChild(registry)
                break;
    
            case 'division':
                result = parseInt(leftOperand.value) / parseInt(rightOperand.value);
                registry.append(`${leftOperand.value} / ${rightOperand.value} = ${result}`)
                form.appendChild(registry)
                break;
    
            default:
                return 'Insert a valid value'
        }
    } else{
        alert('oi')
    }
    
}

function isNumeric(input){
    if (typeof input != 'string'){
        return true;
    } else {
        return false
    }
}



calculateBtn.addEventListener('click', calculate);



/*
const alertOperands = () => {
    alert(parseInt(leftOperand.value) + parseInt(leftOperand.value));
}
*/


/*
const alertOperator = () => {
    alert(operator.value);
}
*/