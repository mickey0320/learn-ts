let arr: [string, number, boolean] = ["1", 2, true];

arr.push("xx");
arr.push(1);
arr.push(false);
arr.push("xx");
arr.push("xx");

console.log(arr);

function test(val: string) {
  if (typeof val === "string") {
  } else {
    val;
  }
}

// never可以用来做代码完整性校验
