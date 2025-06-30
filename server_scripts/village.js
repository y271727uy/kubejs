MoreJSEvents.updateVillagerOffers(event => {
    event.getOffers().forEach(o => {
        let first_input = o.getFirstInput()
        if (first_input.is('emerald')) {
            o.setFirstInput(`${first_input.getCount()}x kubejs:silver_gt_credit`)
        }
        let second_input = o.getSecondInput()
        if (second_input.is('emerald')) {
            o.setSecondInput(`${second_input.getCount()}x kubejs:silver_gt_credit`)
        }
        let output = o.getOutput()
        if (output.is('emerald')) {
            o.setOutput(`${output.getCount()}x kubejs:silver_gt_credit`)
        }
    })
})

MoreJSEvents.updateWandererOffers(event => {
    event.getOffers().forEach(o => {
        let first_input = o.getFirstInput()
        if (first_input.is('emerald')) {
            o.setFirstInput(`${first_input.getCount()}x kubejs:silver_gt_credit`)
        }
        let second_input = o.getSecondInput()
        if (second_input.is('emerald')) {
            o.setSecondInput(`${second_input.getCount()}x kubejs:silver_gt_credit`)
        }
        let output = o.getOutput()
        if (output.is('emerald')) {
            o.setOutput(`${output.getCount()}x kubejs:silver_gt_credit`)
        }
    })
})

MoreJSEvents.updateAbstractVillagerOffers(event => {
    event.getOffers().forEach(o => {
        let first_input = o.getFirstInput()
        if (first_input.is('emerald')) {
            o.setFirstInput(`${first_input.getCount()}x kubejs:silver_gt_credit`)
        }
        let second_input = o.getSecondInput()
        if (second_input.is('emerald')) {
            o.setSecondInput(`${second_input.getCount()}x kubejs:silver_gt_credit`)
        }
        let output = o.getOutput()
        if (output.is('emerald')) {
            o.setOutput(`${output.getCount()}x kubejs:silver_gt_credit`)
        }
    })
})
