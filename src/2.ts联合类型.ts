export {};

// ?运算符的使用
function str1(str: string | null) {
  return str?.length ?? 0;
}

// 通过分支判断
function str2(str: string | null) {
  if (str) {
    return str.length;
  }
  return 0;
}

// ！运算符的使用
function str3(str: string | null) {
  function set() {
    str = str || "";
  }
  set();

  return str!.length;
}

// ??的使用, ??左边的表达式为null或者undefined使用右边的值，否则使用左边的值
// 注意和||运算符的区别
function getLength(str: any) {
  return (str ?? "").length;
}

function xx(val: string | number) {
  const x = val as string;
  const y = val as number;
  // 会报错，因为as只能转为联合类型中存在的类型
  const z = val as boolean;
}

//字面量类型
type IType = "post" | "get";
let method: IType;
