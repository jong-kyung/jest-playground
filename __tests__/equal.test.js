const can1 = {
  flavor: "grapefruit",
  ounces: 12,
};
const can2 = {
  flavor: "grapefruit",
  ounces: 12,
};

describe("객체 테스트", () => {
  test("toBe() 사용 테스트", () => {
    // toBe()는 객체의 참조를 비교한다.
    expect(can1).toBe(can2);
  });

  test("toEqaul() 사용 테스트", () => {
    expect(can1).toEqual(can2); // toEqual()은 객체의 값을 비교한다.
  });
});
