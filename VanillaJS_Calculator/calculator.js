const Calculator = {
    add(x,y){   
        return parseInt(x) + parseInt(y)
    },
    sub(x,y){
        return x-y
    },
    mul(x,y){
        return x*y
    },
    div(x,y){
        return x/y
    },
    calculate(v1, v2, symbol){
        const x = document.getElementById(v1).value
        const y = document.getElementById(v2).value

        let result = 0

        if(symbol == 'add'){
            result = this.add(x,y)
        }else if(symbol == 'sub'){
            result = this.sub(x,y)
        }else if(symbol == 'mul'){
            result = this.mul(x,y)
        }else if(symbol == 'div'){
            result = this.div(x,y)
        }

        document.getElementById('result').value = result
    }
}

export {Calculator}