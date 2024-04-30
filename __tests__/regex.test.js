const email1 = "user1@test.com";
const email2 = "user2@test.com";

describe("정규식 테스트", () => {
  test("단순 문자열 비교", () => {
    expect(email1).toBe("user1@test.com"); // 단순 문자열 비교
  });

  test("정규식 비교", () => {
    expect(email2).toMatch(/.*test.com$/); // 정규식 비교
  });
});
