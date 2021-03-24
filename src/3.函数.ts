function add(num1: number, num2: number): number {
  return num1 + num2;
}

const add2 = (num1: number, num2: number): number => {
  return num1 + num2;
};

type IFn = (num1: number, num2: number) => number;
const sum: IFn = (a, b) => a + b;

// 函数重载,函数重载声明放在函数实现上面
function raw(val: number): number;
function raw(val: string): string;
function raw(val: number | string): number | string {
  return val;
}
raw("123").length;
raw(134).toFixed().length;
