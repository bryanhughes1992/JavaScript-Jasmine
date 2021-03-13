/**
 * MD5ENCRYPT TEST SUITE
 */
describe("MD5 ENCRYPT TEST SUITE", function(){
  describe("Test To Pass", function() {
    it("The string returned should be less than 33 characters", function() {
      expect(md5Encrypt("bababooey").length).toBeLessThan(33);
    });
    it("The string returned should be greater than 31 characters", function() {
      expect(md5Encrypt("HelloSean").length).toBeGreaterThan(31);
    });
  });
});