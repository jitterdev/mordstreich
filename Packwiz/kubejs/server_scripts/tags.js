
ServerEvents.tags('block', event => {
    event.add('tfc:toughness_1', '@create')

    event.remove('tfc:toughness_1', 'create:controller_rail')
	
})
ServerEvents.tags('item', event => {
    const tfc_knives = event.get('forge:tools/knives').getObjectIds()
    tfc_knives.forEach(id => {
        event.add('c:tools/knives')
    })
})