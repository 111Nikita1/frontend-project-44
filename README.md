# Brain Games

Пакет «Игры разума» объединяет пять консольных мини-игр для умственной разминки. Каждая игра представляет собой серию вопросов. Для завершения игры нужно дать три правильных ответа.

## Минимальные требования

- Node.js версии 18 и выше

## Установка
1) Убедитесь, что у вас установлен [Node.js](https://nodejs.org/).
2) Склонируй репозиторий:

```bash
git clone git@github.com:111Nikita1/frontend-project-44.git
cd frontend-project-44
```

## Запуск

```bash
# Запуск игры "Проверка на чётность"
make brain-even
# Если Make отсутствует
node ./bin/brain-even.js

# Запуск игры "Калькулятор"
make brain-calc
# Если Make отсутствует
node ./bin/brain-calc.js

# Запуск игры "Наибольший общий делитель"
make brain-gcd
# Если Make отсутствует
node bin/brain-gcd.js

# Запуск игры "Арифметическая прогрессия"
make brain-progression
# Если Make отсутствует
node bin/brain-progression.js

# Запуск игры "Простое ли число"
make brain-prime
# Если Make отсутствует
node bin/brain-prime.js
```

## Игры

### Brain-even (Игра "Проверка на чётность")

Игроку необходимо определить, является ли предложенное число чётным.
(https://asciinema.org/a/MJIizV6ak0MCKTlo)

### Brain-calc (Игра "Калькулятор")

Пользователю нужно вычислить значение случайного арифметического выражения.
(https://asciinema.org/a/zWJyrhiMsNNfe6cn)

### Brain-gcd (Игра "Наибольший общий делитель (НОД)")

Задача игрока — найти наибольший общий делитель двух чисел.
(https://asciinema.org/a/ETAHruIyGTBPNpV1)

### Brain-progression (Игра "Арифметическая прогрессия")

В ряду чисел, образующих арифметическую прогрессию, пропущен один элемент. Игроку нужно его восстановить.
(https://asciinema.org/a/Z3mQWMsdXzp2GIca)

### Brain-prime (Игра "Простое ли число")

Пользователь должен определить, является ли заданное число простым.
(https://asciinema.org/a/LNLoqfiQeDi29jBn)


### Hexlet tests and linter status:
[![Actions Status](https://github.com/111Nikita1/frontend-project-44/actions/workflows/hexlet-check.yml/badge.svg)](https://github.com/111Nikita1/frontend-project-44/actions)
