const adjectives = [
  'skidded',
  'scripted',
  'leaked',
  'working',
  'dead',
  'funny',
  'bruh',
  'cool',
  'loadstring',
  'obfuscated',
  'roblox',
  'rgb'
]

const nouns = [
  'script',
  'game',
  'serverside',
  'skid',
  'localscript',
  'modulescript',
  'error',
  'tux',
  'beagle',
  'lmaocorp',
  'banisher',
  'noob',
  'octopus',
  'service'
]


/**
 * @param {{ [s: string]: any; }} messages
 */
const flatten = (messages) => {
  const result = Object.values(messages)
    .map(val => Array.isArray(val) ? val : Object.values(val).flat())
    .flat()

  return result.some(Array.isArray) ? flatten(result) : result
}

/** @type {<Type>(arr: Type[]) => Type} */
const random = arr => arr[Math.floor(Math.random() * arr.length)]

/**
 * @param {string} sep The seperator between the words.
 * @returns {string}
 */
function generate(sep = '-') {
  return random(flatten(adjectives)) + sep + random(flatten(nouns))
}

export { generate, nouns, adjectives }
export default generate
