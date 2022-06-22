const Game = (() => {
    let gameboard = [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ']

    const isUniqueArr = arr => {
        const tmp = new Set(arr);
        if(tmp.size > 1) {
        return false;
        }
        return true;
    }

    const get_win = () => {
        if (isUniqueArr(gameboard.slice(0, 2)) == true) {
            return [0, 1, 2]
        } 
        if (isUniqueArr(gameboard.slice(3, 5)) == true) {
            return [3, 4, 5]
        } 
        if (isUniqueArr(gameboard.slice(6, 8)) == true) {
            return [6, 7, 8]
        } 
        if (isUniqueArr([gameboard[0], gameboard[3], gameboard[6]]) == true) {
            return [0, 3, 6]
        } 
        if (isUniqueArr([gameboard[1], gameboard[4], gameboard[7]]) == true) {
            return [1, 4, 7]
        } 
        if (isUniqueArr([gameboard[2], gameboard[5], gameboard[8]]) == true) {
            return [2, 5, 8]
        } 
        if (isUniqueArr([gameboard[0], gameboard[4], gameboard[8]]) == true) {
            return [0, 4, 8]
        } 
        if (isUniqueArr([gameboard[2], gameboard[4], gameboard[6]]) == true) {
            return [2, 4, 6]
        } 
        return []
    }

    const check_win = () => { 
        if (get_win().length == 3 && get.win() == ['x', 'x', 'x']) {
          alert(player1.name + ' Won!')
        }else if (get_win().length == 3 && get.win() == ['o', 'o', 'o']) {
            alert(player2.name + ' Won!')
        }
    }
    

    return {
        gameboard,
        get_win,
        check_win,
        isUniqueArr
    }
})();


const Person_creation = (name, mark) => {
    let options = 0;

    return { name, mark }
}

const player1 = Person_creation('Player 1', 'x');
const player2 = Person_creation('player2', 'o')

const DisplayController = (() => {
    const array_to_html = () => {
        const grid = document.getElementById('game--container');
        for (let i = 0; i < 9; i++) {
            let cell = document.getElementById(i);
            let btn = document.getElementById(i+"-"+i);
            btn.innerHTML = Game.gameboard[i];
            cell.appendChild(btn);
            grid.appendChild(cell);
        }
    }

    let options = 0;

    const who_is_first = () => {
        if ((options % 2) == 0) {
            options += 1;
            return 'x'
        }else {
            options += 1 ;
            return 'o'
        }
    }

    const on_hover = () => {
        let btn = document.querySelectorAll('button');
        for (let i = 0; i < btn.length; i++) {
            btn[i].addEventListener('click', () => {
                Game.gameboard[i] = who_is_first();
                array_to_html();
            })
        } 
    }


    return {
        array_to_html, 
        on_hover,

    }
})();
DisplayController.on_hover();
DisplayController.array_to_html();