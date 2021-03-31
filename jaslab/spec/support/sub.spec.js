var sub=require('../../app3')

describe("Subtract Functionality", () => {

    it("should subtract  positive numbers", () => {
        const result = sub(4, 5);
        expect(result).toEqual(-1);
    });
});