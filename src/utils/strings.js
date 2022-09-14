export const capitalize = (word) => {
    if (word.length === 0) {
        return ""
    }
    const [firstLetter, ...rest] = word;
    return [firstLetter.toUpperCase(), ...rest].join("");
}