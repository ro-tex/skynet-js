import {
  validateBigint,
  validateBoolean,
  validateInteger,
  validateNumber,
  validateObject,
  validateSkylinkString,
  validateString,
  validateStringLen,
  validateUint8Array,
  validateUint8ArrayLen,
} from "./validation";

describe("validateBigint", () => {
  it("Should reject non-bigint input", () => {
    expect(() => validateBigint("test", 123, "parameter")).toThrowError(
      "Expected parameter 'test' to be type 'bigint', was type 'number', value '123'"
    );
  });
});

describe("validateBoolean", () => {
  it("Should reject non-boolean input", () => {
    expect(() => validateBoolean("test", 123, "parameter")).toThrowError(
      "Expected parameter 'test' to be type 'boolean', was type 'number', value '123'"
    );
  });
});

describe("validateInteger", () => {
  const numberCases = [123.01, 0.5, NaN, -0.5];

  it.each(numberCases)("Should reject non-integer input '%s'", (input) => {
    expect(() => validateInteger("test", input, "parameter")).toThrowError(
      `Expected parameter 'test' to be an integer value, was type '${typeof input}', value '${input}'`
    );
  });

  const nonNumberCases = ["1", "asdf", false];

  it.each(nonNumberCases)("Should reject non-number input '%s'", (input) => {
    expect(() => validateInteger("test", input, "parameter")).toThrowError(
      `Expected parameter 'test' to be type 'number', was type '${typeof input}', value '${input}'`
    );
  });
});

describe("validateNumber", () => {
  it("Should reject non-number input", () => {
    expect(() => validateNumber("test", "123", "parameter")).toThrowError(
      "Expected parameter 'test' to be type 'number', was type 'string', value '123'"
    );
  });
});

describe("validateObject", () => {
  it("validateObject should catch null input", () => {
    expect(() => validateObject("test", null, "parameter")).toThrowError(
      "Expected parameter 'test' to be non-null, was type 'null'"
    );
  });
});

describe("validateSkylinkString", () => {
  it("validateSkylinkString should catch invalid skylinks", () => {
    expect(() => validateSkylinkString("skylink", "abc", "parameter")).toThrowError(
      "Expected parameter 'skylink' to be valid skylink of type 'string', was type 'string', value 'abc'"
    );
  });
});

describe("validateString", () => {
  it("validateString should catch undefined input", () => {
    expect(() => validateString("test", undefined, "parameter")).toThrowError(
      "Expected parameter 'test' to be type 'string', was type 'undefined'"
    );
  });
});

describe("validateStringLen", () => {
  it("Should reject string input of wrong length", () => {
    expect(() => validateStringLen("test", "hello", "parameter", 4)).toThrowError(
      "Expected parameter 'test' to be type 'string' of length 4, was length 5, was type 'string', value 'hello'"
    );
  });
});

describe("validateUint8Array", () => {
  it("Should reject non-byte array input", () => {
    expect(() => validateUint8Array("test", "123", "parameter")).toThrowError(
      "Expected parameter 'test' to be type 'Uint8Array', was type 'string', value '123'"
    );
  });
});

describe("validateUint8ArrayLen", () => {
  it("Should reject byte array input of wrong length", () => {
    expect(() => validateUint8ArrayLen("test", new Uint8Array(2), "parameter", 3)).toThrowError(
      "Expected parameter 'test' to be type 'Uint8Array' of length 3, was length 2, was type 'object', value '0,0'"
    );
  });
});
