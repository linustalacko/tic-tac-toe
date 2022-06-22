const Game = (() => {
    let gameboard = ['', '', '', '', '', '', '', '', '']

    function allEqual(array) {
        if ((array[0] == 'x' && array[1] == 'x' && array[2] == 'x') || (array[0] == 'o' && array[1] == 'o' && array[2] == 'o')){
            return true
        }
    }

    const get_win = () => {
        if (allEqual(gameboard.slice(0, 3)) == true) {
            return gameboard.slice(0, 3)
        } 
        if (allEqual(gameboard.slice(3, 6)) == true) {
            return gameboard.slice(3, 6)
        } 
        if (allEqual(gameboard.slice(6, 9)) == true) {
            return gameboard.slice(6, 9)
        } 
        if (allEqual([gameboard[0], gameboard[3], gameboard[6]]) == true) {
            return [gameboard[0], gameboard[3], gameboard[6]]
        } 
        if (allEqual([gameboard[1], gameboard[4], gameboard[7]]) == true) {
            return [gameboard[1], gameboard[4], gameboard[7]]
        } 
        if (allEqual([gameboard[2], gameboard[5], gameboard[8]]) == true) {
            return [gameboard[2], gameboard[5], gameboard[8]]
        } 
        if (allEqual([gameboard[0], gameboard[4], gameboard[8]]) == true) {
            return [gameboard[0], gameboard[4], gameboard[8]]
        } 
        if (allEqual([gameboard[2], gameboard[4], gameboard[6]]) == true) {
            return [gameboard[2], gameboard[4], gameboard[6]]
        } 
        return []
    }

    const check_win = () => { 
        if (get_win()[0] == 'x')  {
            setTimeout(function(){ alert("Player 1 wins!"); location.reload(); }, 500)

        }else if (get_win()[0] == 'o') {
            setTimeout(function(){ alert("Player 2 wins!"); location.reload(); }, 500)
        }
        let empty_array = [];

        for (let i = 0; i < 9; i++) {
            if (gameboard[i] != '') {
                empty_array.push(gameboard[i])
            }
        }
        if (empty_array.length == 9){
            setTimeout(function(){ alert("It's a draw!"); location.reload(); }, 500)
        }
    }
    

    return {
        gameboard,
        get_win,
        check_win,
        allEqual
    }
})();

Game.check_win();


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
                console.log(Game.get_win());
                Game.check_win();
            })
        } 
    }


    return {
        array_to_html, 
        on_hover,
        who_is_first
    }
})();
DisplayController.on_hover();
DisplayController.array_to_html();