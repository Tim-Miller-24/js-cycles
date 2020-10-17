
function askStart() {
    var start = confirm("Хочешь сыграть в игру с угадыванием чисел?");
    if (start == true) {
        startGame();
    }
    else {
        window.close();
    }


}

function startGame() {

    function randomNumb(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }

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

        else if (userNumb == rnd) {
            alert("Поздравляю, ты угадал! Игра закончена.");
            return askStart();
        }
    }

    var rnd = randomNumb(1, 100);

    alert("Угадай число от 1 до 100. У тебя 5 попыток");



    var firstTry = +prompt("Попытка № 1");

    var condition1 = (firstTry == '' && typeof firstTry !== "number") || (firstTry >= 1 && firstTry <= 100);


    while (condition1 == false) {
        var firstTry = +prompt("Введённые данные не соответсвуют условиям");
        var condition1 = (firstTry == '' && typeof firstTry !== "number") || (firstTry >= 1 && firstTry <= 100);
    }






    var firstCompare = smoothing(rnd, firstTry);




    var secondTry = +prompt("Попытка № 2");

    var condition2 = (secondTry == '' && typeof secondTry !== "number") || (secondTry >= 1 && secondTry <= 100 && secondTry !== firstTry);

    while (condition2 == false) {
        var secondTry = +prompt("Введённые данные не соответсвуют условиям");
        var condition2 = (secondTry == '' && typeof secondTry !== "number") || (secondTry >= 1 && secondTry <= 100 && secondTry !== firstTry);
    }

    var secondCompare = smoothing(rnd, secondTry);



    var thirdTry = +prompt("Попытка № 3");

    var condition3 = (thirdTry == '' && typeof thirdTry !== "number") || (thirdTry >= 1 && thirdTry <= 100 && thirdTry !== secondTry);

    while (condition3 == false) {
        var thirdTry = +prompt("Введённые данные не соответсвуют условиям");
        var condition3 = (thirdTry == '' && typeof thirdTry !== "number") || (thirdTry >= 1 && thirdTry <= 100 && thirdTry !== secondTry);
    }

    var thirdCompare = smoothing(rnd, thirdTry);




    var fourthTry = +prompt("Попытка № 4");

    var condition4 = (fourthTry == '' && typeof fourthTry !== "number") || (fourthTry >= 1 && fourthTry <= 100 && fourthTry !== thirdTry);

    while (condition4 == false) {
        var fourthTry = +prompt("Введённые данные не соответсвуют условиям");
        var condition4 = (fourthTry == '' && typeof fourthTry !== "number") || (fourthTry >= 1 && fourthTry <= 100 && fourthTry !== thirdTry);
    }

    var fourthCompare = smoothing(rnd, fourthTry);




    var fifthTry = +prompt("Попытка № 5");

    var condition5 = (fifthTry == '' && typeof fifthTry !== "number") || (fifthTry >= 1 && fifthTry <= 100 && fifthTry !== fourthTry);

    while (condition5 == false) {
        var fifthTry = +prompt("Введённые данные не соответсвуют условиям");
        var condition5 = (fifthTry == '' && typeof fifthTry !== "number") || (fifthTry >= 1 && fifthTry <= 100 && fifthTry !== fourthTry);
    }

    var fifthCompare = smoothing(rnd, fifthTry);

    alert('Ты проиграл! Открой консоль чтоб узнать нужное число (f12)');

    console.log(`Случайное число: ${rnd}`);
}





