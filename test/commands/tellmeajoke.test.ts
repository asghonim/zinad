import { expect, test } from "@oclif/test";

describe("whoareyou", () => {
  test
    .stdout()
    .command(["whoareyou"])
    .it("run whoareyou and reply 'I am ZINAD!'", ctx => {
      expect(ctx.stdout).to.be.not.equal(null);
    });
});
