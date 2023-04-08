function wordsUpperCase(str) {

    let matches = str.match(/[\w]+/g)
        .map((el) => el.toUpperCase())
        .join(', ')
    console.log(matches);
}
wordsUpperCase('koas koad ')