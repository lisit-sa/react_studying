// Место для первой задачи
function calculateVolumeAndArea(num) {
    if(typeof(num) === 'number' && Number.isInteger(num) === true && num > 0 ) {
        let vol = num * num * num;
        let area = 6 * num * num;
        return `Объем куба: ${vol}, площадь всей поверхности: ${area}`
    }
    
    else {
         return "При вычислении произошла ошибка"
     }
}

// Место для второй задачи
function getCoupeNumber(num) {
    let message = '';
    if( num > 0 && num < 36 && Number.isInteger(num) === true) {
        let k = -1;
        for(let i = 0; i < 40; i+=4) {
            k++;
            if (num <= i && num > (i - 4)) {
                return k;
            }    
        }
    }
    else if (num === 0 || num > 36) {
        message += 'Таких мест в вагоне не существует';
    } else if (typeof(num) != 'number' || num < 0 || Number.isInteger(num) === false) {
        message += "Ошибка. Проверьте правильность введенного номера места";
    }
    return message;
}

console.log(getCoupeNumber(7.5))

