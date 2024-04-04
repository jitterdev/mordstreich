
JEIEvents.hideItems (event => 
{
    event.hide('minecraft:copper_ingot')
    event.hide('minecraft:iron_ingot')
    event.hide('minecraft:gold_ingot')
    event.hide('minecraft:netherite_helmet')
    event.hide('minecraft:netherite_chestplate')
    event.hide('minecraft:netherite_boots')
    event.hide('create:crushed_raw_silver')
    event.hide('create:crushed_raw_tin')
    event.hide('create:crushed_raw_nickel')
    event.hide('create:zinc_ingot')
    event.hide('create:brass_ingot')
    event.hide('create:copper_sheet')
    event.hide('create:brass_sheet')
    event.hide('create:iron_sheet')
    event.hide('create:golden_sheet')

    event.hide('create:empty_blaze_burner')
    event.hide('create:blaze_cake')
    event.hide('tfc:food/dried_kelp')
    event.hide('kubejs:incomplete_brass_mechanisms')
    event.hide('kubejs:incomplete_circular_saw')
})

JEIEvents.hideFluids (event =>
{
    event.hide('kubejs:potion_beer')
    event.hide('kubejs:potion_cider')
    event.hide('kubejs:potion_rum')
    event.hide('kubejs:potion_sake')
    event.hide('kubejs:potion_vodka')
    event.hide('kubejs:potion_whiskey')
    event.hide('kubejs:potion_corn_whiskey')
    event.hide('kubejs:potion_rye_whiskey')

    event.hide('kubejs:potion_strong_beer')
    event.hide('kubejs:potion_strong_cider')
    event.hide('kubejs:potion_strong_rum')
    event.hide('kubejs:potion_strong_sake')
    event.hide('kubejs:potion_strong_vodka')
    event.hide('kubejs:potion_strong_whiskey')
    event.hide('kubejs:potion_strong_corn_whiskey')
    event.hide('kubejs:potion_strong_rye_whiskey')
})

JEIEvents.removeCategories (event => {
    event.remove('minecraft:anvil')
    event.remove('minecraft:brewing')
    event.remove('minecraft:blasting')
    event.remove('minecraft:campfire')
    event.remove('minecraft:compostable')
    event.remove('minecraft:fuel')
    event.remove('minecraft:furnace')
    event.remove('minecraft:smithing')
    event.remove('minecraft:smoking')
    event.remove('minecraft:stonecutting')

    event.remove('create:fan_haunting')
})