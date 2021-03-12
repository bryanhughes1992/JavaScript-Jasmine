describe("testToPassSuite", function() {
  it("If you pass an empty username, should return 'No username entered'", function() {
    expect(checkLogin("", "Something")).toMatch("No username entered.");
  });
  it("If passed an empty password, should return 'No password entered'", function() {
    expect(checkLogin("Something", "")).toMatch("No password entered.");
  });
  it("If passed the correct username and password, should return 'true'", function() {
    expect(checkLogin("SeanDoyle", "FoiledByDoyle3030")).toBeTruthy();
  });
  it("If passed values, but are incorrect, should return 'Invalid Username or Password'", function() {
    expect(checkLogin("WrongUser", "WrongPass")).toMatch("Invalid Username or Password");
  });
});

describe("testToFailSuite", function() {
  it("If passed an empty value, should not return 'true'", function() {
    expect(checkLogin("WrongUser", "WrongPass")).not.toEqual("true");
  });
  it("If passed empty values, should not return 'Invalid Username or Password'", function() {
    expect(checkLogin()).not.toMatch("Invalid Username or Password");
  });
});

describe("BoundarySuite", function() {
  it("If you put in both values with one letter off, should not equal 'true'.", function() {
    expect(checkLogin("SeanDoyle", "FoiledByDoyle3031")).not.toEqual("true");
  });
  it("If you enter the correct password case insensitive, should not equal 'true'.", function() {
    expect(checkLogin("seandoyle", "foiledbydoyle3031")).not.toEqual('true');
  });
});