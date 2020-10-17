const adjectives = [
  'skidded',
  'scripted',
  'leaked',
  'working',
  'dead',
  'funny',
  'bruh',
  'cool',
  'letter',
  'obfuscated',
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
  'beagle'
]

/** @type {<Type>(arr: Type[]) => Type} */
const random = arr => arr[Math.floor(Math.random() * arr.length)]

/**
 * @param {string} sep The seperator between the words.
 * @returns {string}
 */
function generate(sep = '-') {
  return random(adjectives) + sep + random(nouns)
}

export { generate, nouns, adjectives }
export default generate
