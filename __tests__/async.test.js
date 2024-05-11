import fetchDataPromise from "../src/fetchDataPromise";

describe("async/await 테스트", () => {
  test("데이터가 peanut butter인지 테스트", async () => {
    const data = await fetchDataPromise();
    expect(data).toBe("peanut butter");
  });
});
