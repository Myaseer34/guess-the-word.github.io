const guessGrid = document.querySelector(".guess-grid")

const TILE_HTML = '<div class="tile"></div>'
for (let i = 0; i < 30; i++) {
    guessGrid.innerHTML += TILE_HTML
}