var mult= require('../../app2')

describe("Mulitiply Functionality", () => {

    it("should multiply positive numbers", () => {
        const result = mult(4, 5);
        expect(result).toEqual(20);
    });

    it("should multiply negative numbers", () => {
        const result = mult(-4, -5);
        expect(result).toEqual(20);
    });

    it("should multiply a negative and a positive number", () => {
        const result= mult(-4,5);
        expect(result).toEqual(-20);
    });

});