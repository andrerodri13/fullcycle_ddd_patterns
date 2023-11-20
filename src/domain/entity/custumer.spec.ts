import Custumer from "./custumer";
import Address from "./address";

describe("Custumer unit test", () => {

    it("should throw error when id is empty", () => {
        expect(() => {
            let custumer = new Custumer("", "Andre");
        }).toThrowError("Id is required")
    });

    it("should throw error when name is empty", () => {
        expect(() => {
            let custumer = new Custumer("123", "");
        }).toThrowError("Name is required")
    });

    it("should change name", () => {
        //Arrange
        const custumer = new Custumer("123", "Andre");
        // Act
        custumer.changeName("Jane")
        //Assert
        expect(custumer.name).toBe("Jane");
    });

    it("should activate custumer", () => {
        const custumer = new Custumer("1", "Custumer 1");
        const address = new Address("Street 1", 123, "18274-170", "City 1");
        custumer.setAddress(address);
        custumer.activate();
        expect(custumer.isActive()).toBe(true);
    });

    it("should deaactivate custumer", () => {
        const custumer = new Custumer("1", "Custumer 1");
        custumer.deactivate();
        expect(custumer.isActive()).toBe(false);
    });

    it("should throw error when address is undefined when you activate a custumer", () => {
        expect(() => {
            const custumer = new Custumer("1", "Custumer 1");
            custumer.activate();
            debugger;
        }).toThrowError("Address is mandatory to activate a custumer");
    });

    it("should add reward points", () => {
        const custumer = new Custumer("1", "Custumer 1");
        expect(custumer.rewardPoints).toBe(0);

        custumer.addRewardPoints(10);
        expect(custumer.rewardPoints).toBe(10);

        custumer.addRewardPoints(10);
        expect(custumer.rewardPoints).toBe(20);
    });

})