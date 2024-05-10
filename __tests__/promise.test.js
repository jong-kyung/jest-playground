import fetchDataPromise from "../src/fetchDataPromise";

describe("Promise 테스트", () => {
  test("데이터가 peanut butter인지 테스트", () => {
    return fetchDataPromise().then((data) => {
      expect(data).toBe("peanut butter");
    });
  });
});
