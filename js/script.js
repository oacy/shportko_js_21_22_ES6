"use strict";


$(function () {

    let html = $('#test').html();

    let data = {
        pageTitle: 'Тест по программированию',

        categories: [
            {
                categoryName: "1. Какие варианты правильно объявляют переменную для f, возвращающей сумму двух аргументов ?",

                variant: [
                    "var f = function(a,b) { return a+b }",
                    "var f = new Function('a,b', 'return a+b')",
                    "var f = new Function('a', 'b', 'return a+b')",
                    "Никакие"
                ],

                answer: [
                    1,
                    1,
                    1,
                    0
                ]
            },
            {
                categoryName: "2. JSON - это..",

                variant: [
                    "Название следующей версии javascript	невыбрано",
                    "JavaScript Object Notation",
                    "Имя создателя javascript",
                    "JavaScript Over Network"
                ],

                answer: [
                    0,
                    1,
                    0,
                    0
                ]
            },
            {
                categoryName: "3. Что делает оператор ===?",

                variant: [
                    'Сравнивает без приведения типа',
                    'Нет такого оператора',
                    'Сравнивает по ссылке, а не по значению'
                ],

                answer: [
                    1,
                    0,
                    0
                ],
            },
            {
                categoryName: "4. Какие конструкции для циклов есть в javascript?",

                variant: [
                    'Три: for, while и do...while.',
                    'Только две: for и while.',
                    'Только одна: for'
                ],

                answer: [
                    1,
                    0,
                    0
                ],
            },
            {
                categoryName: "5. Может ли javascript записать файл на компьютер посетителя ?",

                variant: [
                    'Может в Firefox или IE, при дополнительных настройках безопасности браузера',
                    'Может в Opera, если javascript запущен локально.',
                    'Нет, ни при каких условиях'
                ],

                answer: [
                    1,
                    0,
                    0
                ],
            }
        ],
        result: "Проверить мои результаты"
    };

    let str = JSON.stringify(data);
    localStorage.setItem('test', str);
    let str2 = localStorage.getItem('test');
    let data2 = JSON.parse(str2);
    console.log(data2);
    let content = tmpl(html, data2);
    $('body').append(content);

    $('#foo').click(function () {
        let numtruec = 0;
        for (let i in Object.keys(data2.categories)) {
            let numtrue = 0;
            for (let j in Object.keys(data2.categories[i].variant)) {
                let ckb = $('#cb_' + [i] + [j]).is(':checked');
                if (ckb == data2.categories[i].answer[j]) {
                    numtrue++;
                }
            }
            if (numtrue == Object.keys(data2.categories[i].variant).length) {
                numtruec++;
            }
        };

        let mes;
        if (numtruec == 1) {
            mes = " вопрос";
        } else {
            mes = " вопроса";
        }

        if (numtruec == Object.keys(data2.categories).length) {
            let br = '<br>';
            $("#testpass").text("Поздравляем Вас, тест пройден!");
            $("#comment").text("Вы ответили верно на все вопросы");

        } else {
            $("#testpass").text("Попробуйте ещё раз!...");
            $("#comment").text("Вы ответили верно на " + numtruec + mes);
        }
    });
});




    

