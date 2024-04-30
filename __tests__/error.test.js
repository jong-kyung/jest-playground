class DisgustingFlavorError extends Error {
  constructor(message) {
    super(message);
    this.name = "DisgustingFlavorError";
  }
}

function drinkFlavor(flavor) {
  if (flavor == "octopus") {
    throw new DisgustingFlavorError("yuck, octopus flavor");
  }
}

test("octopus 에러", () => {
  function drinkOctopus() {
    drinkFlavor("octopus");
  }

  // 테스트 메시지에 "yuck"이 포함되어 있는지 확인
  expect(() => drinkFlavor("octopus")).toThrow(/yuck/);
  expect(drinkOctopus).toThrow("yuck");

  // 테스트 메시지가 에러 메시지와 정확히 일치하는지 확인
  expect(drinkOctopus).toThrow(/^yuck, octopus flavor$/);
  expect(drinkOctopus).toThrow(new Error("yuck, octopus flavor"));

  // 오류가 DisugustingFlavorError와 일치하는지 확인
  expect(drinkOctopus).toThrow(DisgustingFlavorError);
});
