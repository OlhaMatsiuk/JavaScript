let styles = ["Джаз", "Блюз"];

styles.push("Рок-н-Рол");
console.log(styles);

styles.splice(-2,1,"Класика");
console.log(styles);

console.log(styles.shift());
console.log(styles);

styles.unshift("Реп", "Реггі");
console.log(styles);