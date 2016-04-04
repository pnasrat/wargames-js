import {greeting} from "../src/js/wargames"

describe('wargames', function() {
	//let wg = new Wargames();
	//var g = greeting();
    it("Should greet the professor", function() {
        expect(greeting()).toBe("SHALL WE PLAY A GAME?");
    });
});
