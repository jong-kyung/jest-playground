test("숫자 0은 false 문자 0은 true", () => {
  expect(0).toBeFalsy(); // 0은 false
  expect("0").toBeTruthy(); // 문자열이 비어있지 않으면 true
});
