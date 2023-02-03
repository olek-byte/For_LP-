// LIBRARY SECTION
const librarySection = () => {
    const hideCardsFirstRow = document.getElementById('hide-cards-first-row');
    const hideCardsSecondRow = document.getElementById('hide-cards-second-row');

    const loadBtn = document.querySelector('.library__collapse-btn');

    loadBtn.addEventListener('click', () => {
        const result = loadBtn.classList.toggle('k');
        loadBtn.textContent = `${result ? "Hide" : "Load more"}`;

        hideCardsFirstRow.classList.add('open');
        hideCardsSecondRow.classList.add('open');

        if (!loadBtn.classList.contains('k')) {
            hideCardsFirstRow.classList.remove('open');
            hideCardsSecondRow.classList.remove('open');
        }
    })
}
librarySection();