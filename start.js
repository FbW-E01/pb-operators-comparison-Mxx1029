// 0. Declare two variables "apples" and "oranges". Assign a value of 20 to apples. Assign a value of 30 to oranges.
const apples = 20;
const oranges = 30;
console.log(`Q0: ${apples}, ${oranges}`);

// 1. Check whether apples and oranges are equal.
console.log(`Q1: ${apples === oranges}`);

// 2. Check whether apples and oranges are *not* equal.
console.log(`Q2: ${apples !== oranges}`);

// 3. Check whether apples is greater than oranges.
console.log(`Q3: ${apples > oranges}`);

// 4. Check whether apples is less than or equal to oranges.
console.log(`Q4: ${apples <= oranges}`);

// 5. Check whether oranges is greater than apples.
console.log(`Q5: ${oranges > apples}`);

// 6. Declare another variable "mangoes" and give it a value of 5. Multiply mangoes and apples, and check whether this result is greater than mangoes added to oranges.
const mangoes = 5;
console.log(`Q6: ${(mangoes * apples) > (mangoes + oranges)}`);

// 7. Subtract mangoes from apples and check whether this result is less than oranges divided by mangoes.
console.log(`Q7: ${(apples - mangoes) < (oranges / mangoes)}`);

// 8. Check whether mangoes, apples and oranges are equal.
console.log(`Q8: ${mangoes === apples === oranges}`);

// 9. Check whether the remainder of apples divided by mangoes and the remainder of oranges divided by mangoes are equal.
console.log(`Q9: ${(apples % mangoes) === (oranges % mangoes)}`);

// 10. Check whether mangoes added to apples is greater than oranges minus mangoes. If it is not, find an operator which will give a result of true.
console.log(`Q10: ${(apples + mangoes) > (oranges - mangoes) ? false : true}`);

// 11. BONUS CHALLENGE: Try increasing script readability by adding question headings to your output before each result.
