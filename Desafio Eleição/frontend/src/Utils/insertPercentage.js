function insertPercentage(infos) {
    infos.forEach(element => {
        const calculatingVotes = element.votes * 100 / element.cityPresenceVotes;
        const percentageVotes = parseFloat(calculatingVotes.toFixed(2));

        element.percentageVotes = percentageVotes
    });

    return infos;
}

export default insertPercentage;