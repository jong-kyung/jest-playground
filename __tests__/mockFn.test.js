describe("함수 mocking 테스트", () => {
  test("한번 해보기", () => {
    const myMock = jest.fn();
    console.log(myMock());
    // > undefined

    myMock.mockReturnValueOnce(10).mockReturnValueOnce("x").mockReturnValue(true);

    console.log(myMock(), myMock(), myMock(), myMock());
    // > 10, 'x', true, true
  });
});
