function mathOps(num1, num2, operator) {
    switch (operator) {
case '+':
        console.log(num1 + num2);
break;
case '-':
        console.log(num1 - num2);
break;
case '*':
        console.log(num1 * num2);
break;
case '/':
        console.log(num1 / num2);
break;
case '%':
        console.log(num1 % num2);
break;
case '**':
        console.log(num1 ** num2);
break;
    }
}
mathOps(3, 5.5, '*')