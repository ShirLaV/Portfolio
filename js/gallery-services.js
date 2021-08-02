'use strics'
const KEY = 'projsDB'
var gProjs;
createProjs();

function createProjs() {
    var projs = loadFromStorage(KEY);
    if (!projs) {
        projs = [];
        projs.push(createProj('Pacman', 'My first Game',
            'The known and loved PACMAN game, with ghosts, food and cherries.',
            'https://shirlav.github.io/Pacman/'));
        projs.push(createProj('Touch Numbers', 'Touch all the numbers on board',
            'In order to win, touch all the numbers by order. '
            + 'Pick your level wisely!',
            'https://shirlav.github.io/TouchNums/'));
        projs.push(createProj('Mine Sweeper', 'My first complete project',
            'This is the first full project I did from starts, '
            + 'in 2 days sprint. Try all the cool new features (safe click, hints and manual board).',
            'https://shirlav.github.io/mine-sweeper/'));
        projs.push(createProj('Book Shop', 'Editor page for seller',
            'The book seller can edit his books list, add new books and update the old ones.', 
            'https://shirlav.github.io/Book-shop/'));
        projs.push(createProj('guess who?', 'Let me guess your Mystery Person',
            'The game can guess the famous person you think of. If not, help it learn and improve!',
            'https://shirlav.github.io/Guess-Who/'));
        projs.push(createProj('Ball Board', 'Collect all balls',
            'In order to win- collect all the balls without running in gum!',
            'https://shirlav.github.io/Ball-board/'));
    }
    gProjs = projs;
    _saveProjsToStorage();
}

function createProj(name = "Project Name", title = 'Title',
    desc = "lorem ipsum lorem ipsum lorem ipsum", url, labels = ["Matrixes", "keyboard events"]) {
    return {
        id: makeId(),
        name,
        title,
        desc,
        url,
        publishedAt: _getTimeStr(),
        labels
    }
}

function getGProjs() {
    return gProjs;
}

function _saveProjsToStorage() {
    saveToStorage(KEY, gProjs);
}

function makeId(length = 6) {
    var txt = '';
    var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    for (var i = 0; i < length; i++) {
        txt += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return txt;
}

function _getTimeStr() {
    var date = new Date();

    var monthForDisplay = _getFormattedDigit(date.getMonth() + 1);
    var dateForDisplay = _getFormattedDigit(date.getDate());
    var houersForDisplay = _getFormattedDigit(date.getHours());
    var minutesForDisplay = _getFormattedDigit(date.getMinutes());

    return 'Published At ' + date.getFullYear() + '-' +
        monthForDisplay + '-' + dateForDisplay +
        ' ' + houersForDisplay + ':' + minutesForDisplay;
}

function _getFormattedDigit(digit) {
    return (digit < 10) ? '0' + digit : digit;
}
