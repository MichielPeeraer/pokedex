import { cleanInput } from "./repl.js";
import { describe, expect, test } from "vitest";

describe.each([
    {
        input: "  hello  world  ",
        expected: ["hello", "world"],
    },
    {
        input: "hello world",
        expected: ["hello", "world"],
    },
    {
        input: "   Charmander   Bulbasaur   PIKACHU   ",
        expected: ["charmander", "bulbasaur", "pikachu"],
    },
    {
        input: "One\tTwo\nThree",
        expected: ["one", "two", "three"],
    },
    {
        input: "   spaced   out   words   ",
        expected: ["spaced", "out", "words"],
    },
    {
        input: "single",
        expected: ["single"],
    },
])("cleanInput($input)", ({ input, expected }) => {
    test(`Expected: ${expected}`, () => {
        const actual = cleanInput(input);

        // The `expect` and `toHaveLength` functions are from vitest
        // they will fail the test if the condition is not met
        expect(actual).toHaveLength(expected.length);
        for (const i in expected) {
            // likewise, the `toBe` function will fail the test if the values are not equal
            expect(actual[i]).toBe(expected[i]);
        }
    });
});
