import fetchDataCallback from "../src/fetchDataCallback";

test("데이터가 peanut butter인지 테스트(use done argument)", (done) => {
  function callback(data) {
    try {
      expect(data).toBe("peanut butter");
      done(); // 모든 검증이 성공적으로 완료되면 `done` 호출
    } catch (error) {
      done(error); // `expect` 검증 실패 시 오류를 `done`에 전달
    }
  }

  fetchDataCallback(callback);
});

test("데이터가 peanut butter인지 테스트 (no done argument)", () => {
  // 만약 fetchData()의 callback() 함수가
  function callback(data) {
    expect(data).toBe("peanut butter");
  }

  fetchDataCallback(callback);
});
