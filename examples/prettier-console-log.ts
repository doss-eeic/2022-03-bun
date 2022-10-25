class DummyClass {
  method1() {
    return "DummyClass";
  }

  #private() {
    return "Private Dummy";
  }
}

const typedArr = new Uint8Array(20);

const testObj = {
  str: "this is a string.",
  undef: undefined,
  doub: 12345.6789,
  int: 1234567890,
  nil: null,
  bool: true,
  arr: [1, 2, 3, 4, 5, 6, 7, 8, 9],
  arrMixed: [123, { a: 100, b: 200 }],
  obj: { a: { a: 100, b: 200 }, s: { hello: "world" } },
  func: (a: number): string => {
    return "bun.js";
  },
  cls: new DummyClass(),
  typedArr: typedArr,
  map: new Map([
    ["a", 100],
    ["b", 200],
    ["c", 300],
  ]),
  set: new Set(["hello", 100, [100, 200]]),
  sym: Symbol("bun.js"),
  bigint: BigInt("0x1fffffffffffff"),
  // grobalObj: globalThis,
  promise: new Promise(() => {}),
  arrBuf: typedArr.buffer,
};

console.log(testObj);
