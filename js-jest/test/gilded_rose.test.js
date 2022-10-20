const {Shop, Item} = require("../src/gilded_rose");

describe("Aged Brie", function() {
  it("quality increases over time", function() {
    const gildedRose = new Shop([new Item("Aged Brie", 10, 40)]);
    const items = gildedRose.updateQuality();
    expect(items[0].sellIn).toBe(9);
    expect(items[0].quality).toBe(41);
  });

  it("quality cannot be over 50", function() {
    const gildedRose = new Shop([new Item("Aged Brie", 10, 50)]);
    const items = gildedRose.updateQuality();
    expect(items[0].sellIn).toBe(9);
    expect(items[0].quality).toBe(50);
  });
  
});
