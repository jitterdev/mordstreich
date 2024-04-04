
StartupEvents.registry('fluid', event => 
{
    event.create('solder')  
    .stillTexture('tfc:block/molten_still')
    .flowingTexture('tfc:block/molten_flow')
    //.color(0x8393A6)
    .color(0x8388A6)
    .displayName(`Solder`)
    .noBlock()

    event.create('incandescent_oil')
    .stillTexture('kubejs:block/incandescent_oil_still')
    .flowingTexture('kubejs:block/incandescent_oil_flow')
    .color(0x6A7536)
    .displayName('Incandescent Oil')
    .noBlock()

    event.create('potion_beer')
    .stillTexture('minecraft:block/water_still')
    .flowingTexture('minecraft:block/water_flow')
    .color(0xC39E36)
    .displayName('Formulated Beer')
    .noBlock()
    event.create('potion_cider')
    .stillTexture('minecraft:block/water_still')
    .flowingTexture('minecraft:block/water_flow')
    .color(0xB0AE31)
    .displayName('Formulated Cider')
    .noBlock()
    event.create('potion_rum')
    .stillTexture('minecraft:block/water_still')
    .flowingTexture('minecraft:block/water_flow')
    .color(0x6E0122)
    .displayName('Formulated Rum')
    .noBlock()
    event.create('potion_sake')
    .stillTexture('minecraft:block/water_still')
    .flowingTexture('minecraft:block/water_flow')
    .color(0xB7D9BB)
    .displayName('Formulated Sake')
    .noBlock()
    event.create('potion_vodka')
    .stillTexture('minecraft:block/water_still')
    .flowingTexture('minecraft:block/water_flow')
    .color(0xDCDCDB)
    .displayName('Formulated Vodka')
    .noBlock()
    event.create('potion_whiskey')
    .stillTexture('minecraft:block/water_still')
    .flowingTexture('minecraft:block/water_flow')
    .color(0x583718)
    .displayName('Formulated Whiskey')
    .noBlock()
    event.create('potion_corn_whiskey')
    .stillTexture('minecraft:block/water_still')
    .flowingTexture('minecraft:block/water_flow')
    .color(0xD9C7B6)
    .displayName('Formulated Corn Whiskey')
    .noBlock()
    event.create('potion_rye_whiskey')
    .stillTexture('minecraft:block/water_still')
    .flowingTexture('minecraft:block/water_flow')
    .color(0xC77D50)
    .displayName('Formulated Rye Whiskey')
    .noBlock()

    event.create('potion_strong_beer')
    .stillTexture('minecraft:block/water_still')
    .flowingTexture('minecraft:block/water_flow')
    .color(0xC39E36)
    .displayName('Alchemical Beer')
    .noBlock()
    event.create('potion_strong_cider')
    .stillTexture('minecraft:block/water_still')
    .flowingTexture('minecraft:block/water_flow')
    .color(0xB0AE31)
    .displayName('Alchemical Cider')
    .noBlock()
    event.create('potion_strong_rum')
    .stillTexture('minecraft:block/water_still')
    .flowingTexture('minecraft:block/water_flow')
    .color(0x6E0122)
    .displayName('Alchemical Rum')
    .noBlock()
    event.create('potion_strong_sake')
    .stillTexture('minecraft:block/water_still')
    .flowingTexture('minecraft:block/water_flow')
    .color(0xB7D9BB)
    .displayName('Alchemical Sake')
    .noBlock()
    event.create('potion_strong_vodka')
    .stillTexture('minecraft:block/water_still')
    .flowingTexture('minecraft:block/water_flow')
    .color(0xDCDCDB)
    .displayName('Alchemical Vodka')
    .noBlock()
    event.create('potion_strong_whiskey')
    .stillTexture('minecraft:block/water_still')
    .flowingTexture('minecraft:block/water_flow')
    .color(0x583718)
    .displayName('Alchemical Whiskey')
    .noBlock()
    event.create('potion_strong_corn_whiskey')
    .stillTexture('minecraft:block/water_still')
    .flowingTexture('minecraft:block/water_flow')
    .color(0xD9C7B6)
    .displayName('Alchemical Corn Whiskey')
    .noBlock()
    event.create('potion_strong_rye_whiskey')
    .stillTexture('minecraft:block/water_still')
    .flowingTexture('minecraft:block/water_flow')
    .color(0xC77D50)
    .displayName('Alchemical Rye Whiskey')
    .noBlock()
})