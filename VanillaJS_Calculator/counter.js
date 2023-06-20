import { Calculator } from "./calculator"

const setupButtons = function(){
  document.getElementById('add').addEventListener('click', function(){
    Calculator.calculate('x','y','add')
  })

  document.getElementById('sub').addEventListener('click',function(){
    Calculator.calculate('x','y','sub')
  })

  document.getElementById('mul').addEventListener('click', function(){
    Calculator.calculate('x','y','mul')
  })

  document.getElementById('div').addEventListener('click', function(){
    Calculator.calculate('x','y','div')
  })
}

export {setupButtons}