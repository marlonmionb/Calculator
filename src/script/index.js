const calculateBtn = document.getElementById('btn-calculate')
const memoryContainer = document.querySelector('.memory')
const leftOperand = document.querySelector('#left-operand')
const rightOperand = document.querySelector('#right-operand')
const operator = document.querySelector('#operator')
const clearBtn = document.querySelector('#btn-clear')



function calculate() {
    let newParagraph = document.createElement("p");  

    switch (operator.value) {
        case 'sum':
            result = Number(leftOperand.value) + Number(rightOperand.value);  
            newParagraph.append(`${leftOperand.value} + ${rightOperand.value} = ${result}`)
            memoryContainer.appendChild(newParagraph)
            break;

        case 'subtraction':
            result = Number(leftOperand.value) - Number(rightOperand.value);
            newParagraph.append(`${leftOperand.value} - ${rightOperand.value} = ${result}`)
            memoryContainer.appendChild(newParagraph)
            break;

        case 'multiplication':
            result = Number(leftOperand.value) * Number(rightOperand.value);
            newParagraph.append(`${leftOperand.value} * ${rightOperand.value} = ${result}`)
            memoryContainer.appendChild(newParagraph)
            break;

        case 'division':
            result = Number(leftOperand.value) / Number(rightOperand.value);
            newParagraph.append(`${leftOperand.value} / ${rightOperand.value} = ${result}`)
            memoryContainer.appendChild(newParagraph)
            break;
        default:
            break;
    }

    
}

function clear(){

}



calculateBtn.addEventListener('click', calculate);
clearBtn.addEventListener('click', clear)
