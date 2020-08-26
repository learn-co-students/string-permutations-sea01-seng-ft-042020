const findAllPermutations = (string) => {
    if (string.length === 1) {return string}

    const permutations = []
    for (let i = 0; i < string.length; i++) {
        const firstChar = string[i]
        const charsLeft = string.slice(0, i) + string.slice(i + 1)
        const innerPermutations = findAllPermutations(charsLeft)
      for (var j = 0; j < innerPermutations.length; j++) {
        permutations.push(firstChar + innerPermutations[j])
      }
    }
    return permutations
}