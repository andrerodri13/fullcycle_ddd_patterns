import OrderItem from "../entity/order_item";
import Order from "../entity/order";
import OrderService from "./order.service";
import Custumer from "../entity/custumer";

describe("Order Service Unit tests", () => {

    it("should place an order", () => {
        const custumer = new Custumer("c1", "Custumer 1");
        const item1 = new OrderItem("i1", "item 1", 10, 'p1', 1);

        const order = OrderService.placeOrder(custumer, [item1]);

        expect(custumer.rewardPoints).toBe(5);
        expect(order.total()).toBe(10);
    });

    it("should get total of all orders", () => {
        const item1 = new OrderItem("i1", "item 1", 100, 'p1', 1);
        const item2 = new OrderItem("i2", "item 2", 200, 'p1', 2);

        const order = new Order("o1", "c1", [item1]);
        const order2 = new Order("o2", "c1", [item2]);

        const total = OrderService.total([order, order2]);

        expect(total).toBe(500);
    });

})