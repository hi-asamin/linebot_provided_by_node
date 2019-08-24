import { assert } from "chai";
import { describe, it } from "mocha";
import LineAccessToken from "../../src/entity/line_access_token";

import * as dotenv from "dotenv";
dotenv.config();

describe("line_access_token", () => {
    it("renew", async () => {
        const token = new LineAccessToken();
        assert.isNull(token.get());
        assert.isNotNull(token.renew());
        assert.isNotNull(await token.get());
    });
});
