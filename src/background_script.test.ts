import rewire from "rewire"
const background_script = rewire("./background_script")
const main = background_script.__get__("main")
// @ponicode
describe("main", () => {
    test("0", async () => {
        await main()
    })
})
