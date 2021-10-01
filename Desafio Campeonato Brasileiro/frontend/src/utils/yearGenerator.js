export default function yearGenerator() {
    let initialYear = 2003;
    const lastYear = 2015;

    let vetorYears = []

    while (initialYear <= lastYear) {
        vetorYears.push(initialYear)
        initialYear += 1;
    }
    return vetorYears
}

