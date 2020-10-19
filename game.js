
function randomNumb(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}
// var rnd = randomNumb(1, 100);
var rnd = 50;

function askStart() {
    var start = confirm("Хочешь сыграть в игру с угадыванием чисел?");
    if (start == true) {
        startGame();
        console.log(`Случайное число: ${rnd}`);
    }
    else {
        document.location.href = "index.html";
    }


}



function startGame() {    

    function smoothing(rnd, userNumb) {
        if (rnd > userNumb) {
            let mistake1 = rnd - userNumb;

            if (mistake1 <= 3) {
                alert("Жарко");
            }
            else if (mistake1 <= 8) {
                alert("Тепло");
            }
            else if (mistake1 <= 25) {
                alert("Прохладно");
            }
            else if (mistake1 <= 40) {
                alert("Холодно");
            }
            else if (mistake1 >= 40) {
                alert('Совсем замрёрз');
            }
        }

        else if (userNumb > rnd) {
            let mistake2 = userNumb - rnd;

            if (mistake2 <= 3) {
                alert("Жарко");
            }
            else if (mistake2 <= 8) {
                alert("Тепло");
            }
            else if (mistake2 <= 25) {
                alert("Прохладно");
            }
            else if (mistake2 <= 40) {
                alert("Холодно");
            }
            else if (mistake2 >= 40) {
                alert('Совсем замрёрз');
            }
        }
    }

    


    alert("Угадай число от 1 до 100. У тебя 5 попыток");

    // while (firstTry !== rnd || secondTry !== rnd || thirdTry !== rnd || fourthTry !== rnd || fifthTry !== rnd) {
        var firstTry = +prompt("Попытка № 1");

        var condition1 = firstTry >= 1 && firstTry <= 100;


        while (condition1 == false) {
            var firstTry = +prompt("Введённые данные не соответсвуют условиям");
            var condition1 = firstTry >= 1 && firstTry <= 100;
        }


        var firstCompare = smoothing(rnd, firstTry);


        if (firstTry == rnd) {
            return alert('Поздравляю,ты угадал! Игра закончена');
            // break;
        }




        var secondTry = +prompt("Попытка № 2");

        var condition2 = secondTry >= 1 && secondTry <= 100 && secondTry !== firstTry;

        while (condition2 == false) {
            var secondTry = +prompt("Введённые данные не соответсвуют условиям");
            var condition2 = secondTry >= 1 && secondTry <= 100 && secondTry !== firstTry;
        }

        var secondCompare = smoothing(rnd, secondTry);


        if (secondTry == rnd) {
            return alert('Поздравляю,ты угадал! Игра закончена');
            // break;
        }



        var thirdTry = +prompt("Попытка № 3");

        var condition3 = thirdTry >= 1 && thirdTry <= 100 && thirdTry !== secondTry;

        while (condition3 == false) {
            var thirdTry = +prompt("Введённые данные не соответсвуют условиям");
            var condition3 = thirdTry >= 1 && thirdTry <= 100 && thirdTry !== secondTry;
        }

        var thirdCompare = smoothing(rnd, thirdTry);

        if (thirdTry == rnd) {
            return alert('Поздравляю,ты угадал! Игра закончена');
            // break;
        }



        var fourthTry = +prompt("Попытка № 4");

        var condition4 = fourthTry >= 1 && fourthTry <= 100 && fourthTry !== thirdTry;

        while (condition4 == false) {
            var fourthTry = +prompt("Введённые данные не соответсвуют условиям");
            var condition4 = fourthTry >= 1 && fourthTry <= 100 && fourthTry !== thirdTry;
        }

        var fourthCompare = smoothing(rnd, fourthTry);

        if (fourthTry == rnd) {
            return alert('Поздравляю,ты угадал! Игра закончена');
            // break;
        }




        var fifthTry = +prompt("Попытка № 5");

        var condition5 = fifthTry >= 1 && fifthTry <= 100 && fifthTry !== fourthTry;

        while (condition5 == false) {
            var fifthTry = +prompt("Введённые данные не соответсвуют условиям");
            var condition5 = fifthTry >= 1 && fifthTry <= 100 && fifthTry !== fourthTry;
        }

        var fifthCompare = smoothing(rnd, fifthTry);

        if (fifthTry == rnd) {
            return alert('Поздравляю,ты угадал! Игра закончена');
            // break;
        }
        else {
            return alert('Ты проиграл! Открой консоль чтоб узнать нужное число (f12)');
            // break;
        }
    // }


    // console.log(`Случайное число: ${rnd}`);
}





