import { describe, expect, it } from "vitest"

function sum(num1: number, num2: number) {
    return num1 + num2;
}

describe('sum', () => {
    it('should return the sum of two numbers', () => {
        expect(sum(1, 2)).toBe(3)
    })
})