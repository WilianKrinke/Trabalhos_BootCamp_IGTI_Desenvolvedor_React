export default function rodadaGenerator() {
    let initialRodada = 1;
    const lastRodada = 46;

    let vetorRodadas = []

    while (initialRodada <= lastRodada) {
        vetorRodadas.push(initialRodada)
        initialRodada += 1;
    }
    return vetorRodadas.reverse()
}

