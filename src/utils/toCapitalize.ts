const capitalizeWord = (word: string) => {
  return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
}

export const capitalizeStr = (str: string, splitter = ' ') => {
  return str.split(splitter).map(capitalizeWord).join(' ')
}
