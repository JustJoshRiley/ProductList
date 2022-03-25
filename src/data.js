import data from './data.json'

const allCategories = data.map(obj => obj.category)

// const uniqueCategories = new Set(allCategories)

const categories = allCategories.reduce((accumulator, category) => {
    accumulator[category] = 0
    return accumulator
}, {})

const uniqueCategories = Object.keys(categories)

const categoriesWithCounts = allCategories.reduce((accumluator, category) => {
    if (accumluator[category] === undefined) {
        accumluator[category] = 1
    } else {
        accumluator[category] += 1
    }
    return accumluator
}, {})

const categoriesAndCounts = uniqueCategories.map(name => {
    return {name, count : categoriesWithCounts[name]}
})

categoriesAndCounts.push({name:'All', count:data.length})

export {
    allCategories,
    uniqueCategories,
    categoriesWithCounts,
    categoriesAndCounts
}

export default data