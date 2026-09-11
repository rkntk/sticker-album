/* js/data.js */

var LS_COLLECTION = "my_collection";
var LS_REDEEMED = "redeemed_codes";

var STICKER_DATA = [
    { id: 1, name: "Звезда-2005", birthDate: "-", position: "-", photo: "https://soccerlife.ru/images/logos4/512/74424.png" },
    { id: 2, name: "Лорена", birthDate: "Россия", position: "Вратарь", photo: "https://pics.st/479/4d0/a9f14d08.png" },
    { id: 3, name: "Валентина Орлова", birthDate: "Россия", position: "Защитник", photo: "https://pics.st/66a/ad8/af5f13c3.png" },
    { id: 4, name: "Кармен Менайо", birthDate: "Испания", position: "Защитник", photo: "https://pics.st/0b5/69f/14330410.png" },
    { id: 5, name: "Дарья Макаренко", birthDate: "Россия", position: "Защитник", photo: "https://pics.st/b41/898/8b41e31f.png" },
    { id: 6, name: "Маргарита Мануйлова", birthDate: "Россия", position: "Защитник", photo: "https://pics.st/09c/828/b33d809d.png" },
    { id: 7, name: "Элина Самойлова", birthDate: "Россия", position: "Защитник", photo: "https://pics.st/68e/701/8e13d850.png" },
    { id: 8, name: "Виктория Козлова", birthDate: "Россия", position: "Защитник", photo: "https://pics.st/b7d/c6a/c2657495.png" },
    { id: 9, name: "Винона Хитли", birthDate: "Австралия", position: "Защитник", photo: "https://pics.st/443/5f0/d50ef7e9.png" },
    { id: 10, name: "Яна Шеина", birthDate: "Россия", position: "Полузащитник", photo: "https://pics.st/e7e/d59/99e2c86a.png" },
    { id: 11, name: "Мэделен Янодь", birthDate: "Швеция/Мали", position: "Полузащитник", photo: "https://pics.st/1ee/14c/6f8099a6.png" },
    { id: 12, name: "Эвелина Камчик", birthDate: "Польша", position: "Полузащитник", photo: "" },
    { id: 13, name: "Нора Эйде Лие", birthDate: "Норвегия", position: "Полузащитник", photo: "https://pics.st/190/e15/0ce15076.png" },
    { id: 14, name: "Солен Шампаньяк", birthDate: "Франция", position: "Полузащитник", photo: "https://pics.st/9de/fcb/fefcb58d.png" },
    { id: 15, name: "Анастасия Поздеева", birthDate: "Россия", position: "Полузащитник", photo: "https://pics.st/727/88b/f7e7fa5e.png" },
    { id: 16, name: "Екатерина Пантюхина", birthDate: "Россия", position: "Нападающий", photo: "https://pics.st/b04/e57/bbac9656.png" },
    { id: 17, name: "Рязань-ВДВ", birthDate: "-", position: "-", photo: "https://soccerlife.ru/images/logos4/512/74425.png" },
    { id: 18, name: "Фридерике Реполь", birthDate: "Германия", position: "Вратарь", photo: "https://pics.st/69b/9f4/4e767404.png" },
    { id: 19, name: "Жюли Бисманс", birthDate: "Бельгия", position: "Защитник", photo: "https://pics.st/6df/f46/dfe6f468.png" },
    { id: 20, name: "Анна Беломытцева", birthDate: "Россия", position: "Защитник", photo: "https://pics.st/96f/d4c/7e043d3c.png" },
    { id: 21, name: "Невена Дамьянович", birthDate: "Сербия", position: "Защитник", photo: "https://pics.st/e42/e42/f2fe200c.png" },
    { id: 22, name: "Алсу Гончаренко", birthDate: "Россия", position: "Защитник", photo: "https://pics.st/6d8/b07/6e083619.png" },
    { id: 23, name: "Алина Мягкова", birthDate: "Россия", position: "Защитник", photo: "https://pics.st/2d1/a5a/95a5a253.png" },
    { id: 24, name: "Дэяна Станкович", birthDate: "Сербия", position: "Полузащитник", photo: "https://pics.st/cba/ba5/cc52ddcb.png" },
    { id: 25, name: "Жоана Мартинш", birthDate: "Португалия", position: "Полузащитник", photo: "https://pics.st/e13/b77/3f885e46.png" },
    { id: 26, name: "Элене Гуртубай", birthDate: "Испания", position: "Полузащитник", photo: "" },
    { id: 27, name: "Алена Рузина", birthDate: "Россия", position: "Полузащитник", photo: "https://pics.st/1d8/fc0/e1d8ebc0.png" },
    { id: 28, name: "Присцила Шиншилла", birthDate: "Коста-Рика", position: "Полузащитник", photo: "https://pics.st/16c/16c/4d405d44.png" },
    { id: 29, name: "Маделине Гир", birthDate: "Германия", position: "Полузащитник", photo: "https://pics.st/f5a/2af/9d60f7c7.png" },
    { id: 30, name: "Александра Лобанова", birthDate: "Россия/Швеция", position: "Полузащитник", photo: "https://pics.st/200/cd1/a4b0aaaf.png" },
    { id: 31, name: "Аманда", birthDate: "Бразилия", position: "Нападающий", photo: "https://pics.st/4e4/a43/4e439834.png" },
    { id: 32, name: "Нелли Коровкина", birthDate: "Россия", position: "Нападающий", photo: "https://pics.st/1f5/b30/e31e71f5.png" },
	{ id: 33, name: "ЦСКА", birthDate: "-", position: "-", photo: "https://soccerlife.ru/images/logos4/512/78389.png" },
    { id: 34, name: "Анастасия Ананьева", birthDate: "Россия", position: "Вратарь", photo: "https://pics.st/7bf/898/874e46ee.png" },
    { id: 35, name: "Кейтлин Дикстра", birthDate: "Нидерланды", position: "Защитник", photo: "https://pics.st/c78/a36/59c78d0b.png" },
    { id: 36, name: "Мария Алексеева", birthDate: "Россия", position: "Защитник", photo: "https://pics.st/db0/7ec/818807ec.png" },
    { id: 37, name: "Анна Кожникова", birthDate: "Россия", position: "Защитник", photo: "https://pics.st/d25/f09/7a85c8ca.png" },
    { id: 38, name: "Жоанна Шавьер Празереш", birthDate: "Португалия", position: "Защитник", photo: "https://pics.st/706/ce1/9cb66c57.png" },
    { id: 39, name: "Юлия Плешкова", birthDate: "Россия", position: "Защитник", photo: "https://pics.st/18a/737/5ab1f900.png" },
    { id: 40, name: "Гутья Каршуни", birthDate: "Франция", position: "Полузащитник", photo: "https://pics.st/90c/c2e/fdf1f26a.png" },
    { id: 41, name: "Анна Заика", birthDate: "Россия", position: "Полузащитник", photo: "https://pics.st/e95/99a/5c47772f.png" },
    { id: 42, name: "Валерия Беспаликова", birthDate: "Россия", position: "Полузащитник", photo: "https://pics.st/72f/a98/728272f9.png" },
    { id: 43, name: "Саския Матайс", birthDate: "Германия", position: "Полузащитник", photo: "https://pics.st/1a6/625/9151bdcc.png" },
    { id: 44, name: "Дарья Яковлева", birthDate: "Россия", position: "Полузащитник", photo: "https://pics.st/d2e/249/40e1352a.png" },
    { id: 45, name: "Ксения Коваленко", birthDate: "Россия/Казахстан", position: "Полузащитник", photo: "https://pics.st/793/50f/4b79afe2.png" },
    { id: 46, name: "Зои ван де Вен", birthDate: "Нидерланды", position: "Полузащитник", photo: "https://pics.st/b4b/541/41f30b3f.png" },
    { id: 47, name: "Вилма Льюнг", birthDate: "Швещия", position: "Полузащитник", photo: "https://pics.st/ec2/9ec/414c6006.png" },
    { id: 48, name: "Шниа Деметрис Гордон", birthDate: "США", position: "Нападающий", photo: "https://pics.st/5a1/562/81f1a12d.png" },
    { id: 49, name: "Чертаново", birthDate: "-", position: "-", photo: "https://soccerlife.ru/images/logos4/512/74429.png" },
    { id: 50, name: "Мария Лопес Валенсуэла", birthDate: "Испания", position: "Вратарь", photo: "https://pics.st/00d/eb6/900d5de5.png" },
    { id: 51, name: "Любовь Шматко", birthDate: "Украина/Беларусь", position: "Защитник", photo: "https://pics.st/525/bb2/bb2005a6.png" },
    { id: 52, name: "Джамиля София Ранкин", birthDate: "Австралия", position: "Защитник", photo: "https://pics.st/a3a/1da/29e3a032.png" },
    { id: 53, name: "Джудит Пуйолс", birthDate: "Испания", position: "Защитник", photo: "https://pics.st/ce1/051/3a5cbed9.png" },
    { id: 54, name: "Изабелла Леоне", birthDate: "Бразилия", position: "Защитник", photo: "https://pics.st/0f2/9e8/265786ce.png" },
    { id: 55, name: "Ксения Джиникашвили", birthDate: "Россия", position: "Защитник", photo: "https://pics.st/9cd/fc4/d0b81a4f.png" },
    { id: 56, name: "Маргарита Черномырдина", birthDate: "Россия", position: "Полузащитник", photo: "https://pics.st/64e/ae8/cc0d3328.png" },
    { id: 57, name: "Кристина Ружичкова", birthDate: "Чехия", position: "Полузащитник", photo: "https://pics.st/e40/5e4/360db45e.png" },
    { id: 58, name: "Она Барадад", birthDate: "Испания", position: "Полузащитник", photo: "https://pics.st/9b6/499/0a51499b.png" },
    { id: 59, name: "Кристина Комиссарова", birthDate: "Россия", position: "Полузащитник", photo: "https://pics.st/c0d/1ff/a77e4c0d.png" },
    { id: 60, name: "Виктория Дубова", birthDate: "Россия", position: "Полузащитник", photo: "https://pics.st/d1e/33e/d1e8c5f8.png" },
    { id: 61, name: "Линнея Эрикссон", birthDate: "Швеция", position: "Полузащитник", photo: "https://pics.st/3ae/4c7/a4355563.png" },
    { id: 62, name: "Наталия Трофимова", birthDate: "Россия", position: "Полузащитник", photo: "https://pics.st/0ac/634/05c49c85.png" },
    { id: 63, name: "Олеся Березанская", birthDate: "Россия", position: "Полузащитник", photo: "https://pics.st/032/035/c472a25d.png" },
    { id: 64, name: "Роземонда Коуасси", birthDate: "Кот-д`Ивуар", position: "Нападающий", photo: "https://pics.st/0e0/410/e8b69f4d.png" },
    { id: 65, name: "Зенит", birthDate: "-", position: "-", photo: "https://soccerlife.ru/images/logos4/512/93404.png" },
    { id: 66, name: "Эрта Камингс", birthDate: "Шотландия", position: "Вратарь", photo: "https://pics.st/025/d17/470d4351.png" },
    { id: 67, name: "Вероника Куропаткина", birthDate: "Россия", position: "Защитник", photo: "https://pics.st/ee6/83c/17f477b0.png" },
    { id: 68, name: "Ксения Цыбутович", birthDate: "Россия", position: "Защитник", photo: "https://pics.st/50a/363/e17ac641.png" },
    { id: 69, name: "Эмиия Пурчер", birthDate: "Австрия", position: "Защитник", photo: "https://pics.st/928/a51/6a3d007c.png" },
    { id: 70, name: "Габриэла Гильен", birthDate: "Коста-Рика", position: "Защитник", photo: "https://pics.st/589/939/4a5895c6.png" },
    { id: 71, name: "Габриэла Гживиньска", birthDate: "Польша", position: "Полузащитник", photo: "https://pics.st/231/231/f3b17897.png" },
    { id: 72, name: "Малоу Марчетто", birthDate: "Дания", position: "Полузащитник", photo: "https://pics.st/fed/073/845b5147.png" },
    { id: 73, name: "Гюннхильдюр Йонсдоттир", birthDate: "Исландия", position: "Полузащитник", photo: "https://pics.st/6eb/f12/c69ac436.png" },
    { id: 74, name: "Юли Тавло", birthDate: "Дания", position: "Полузащитник", photo: "https://pics.st/037/698/6d5de030.png" },
    { id: 75, name: "Лина Якупова", birthDate: "Россия", position: "Полузащитник", photo: "https://pics.st/126/6b7/59126b00.png" },
    { id: 76, name: "Яна Эсман", birthDate: "Беларусь", position: "Полузащитник", photo: "https://pics.st/b27/b27/7b27f45f.png" },
    { id: 77, name: "Любовь Овсянникова", birthDate: "Россия", position: "Полузащитник", photo: "https://pics.st/a21/0cf/989401a2.png" },
    { id: 78, name: "Дарина Ишмухаметова", birthDate: "Россия", position: "Полузащитник", photo: "https://pics.st/20b/dc1/1dc1b72e.png" },
    { id: 79, name: "Нина Матейич", birthDate: "Сербия", position: "Нападающий", photo: "https://pics.st/6f6/5f3/5c588070.png" },
    { id: 80, name: "Жозеф Кики", birthDate: "Гаити", position: "Нападающий", photo: "https://pics.st/3aa/d95/95f65bea.png" },
    { id: 81, name: "Локомотив", birthDate: "-", position: "-", photo: "https://soccerlife.ru/images/logos4/512/83208.png" },
    { id: 82, name: "Келси Догерти", birthDate: "США", position: "Вратарь", photo: "https://pics.st/d4e/f39/9adaa5ba.png" },
    { id: 83, name: "Кьяра Пикетт", birthDate: "США", position: "Защитник", photo: "https://pics.st/ae5/666/0deb134b.png" },
    { id: 84, name: "Элиза Пфаттнер", birthDate: "Италия", position: "Защитник", photo: "https://pics.st/3ef/aa5/afaaec0c.png" },
    { id: 85, name: "Элли Шарлотт Жан", birthDate: "США/Доминиканская республика", position: "Защитник", photo: "https://pics.st/dc2/2ed/f1eea7fc.png" },
    { id: 86, name: "Ирина Подшибякина", birthDate: "Россия", position: "Защитник", photo: "https://pics.st/3f0/35b/0ff12e50.png" },
    { id: 87, name: "Кристина Машкова", birthDate: "Россия", position: "Защитник", photo: "https://pics.st/70f/4fa/b2770eb0.png" },
    { id: 88, name: "Анастасия Власова", birthDate: "Казахстан", position: "Защитник", photo: "https://pics.st/f9d/a76/cfcb8911.png" },
    { id: 89, name: "Марина Федорова", birthDate: "Россия", position: "Полузащитник", photo: "https://pics.st/c45/01e/f2bda3fb.png" },
    { id: 90, name: "Кети Бредли", birthDate: "Англия", position: "Полузащитник", photo: "https://pics.st/41b/1f6/bb65b1c9.png" },
    { id: 91, name: "Сандра Войтане", birthDate: "Латвия", position: "Полузащитник", photo: "https://pics.st/8fa/30f/a6a1ceca.png" },
    { id: 92, name: "Мелисса Бети", birthDate: "Алжир/Франция", position: "Полузащитник", photo: "https://pics.st/7e8/9ed/074884a9.png" },
    { id: 93, name: "Арина Колесникова", birthDate: "Россия", position: "Полузащитник", photo: "https://pics.st/ac9/1aa/c9737691.png" },
    { id: 94, name: "Наолия Траоре", birthDate: "Франция", position: "Полузащитник", photo: "https://pics.st/a72/d63/3bb7f64d.png" },
    { id: 95, name: "Дарья Новик", birthDate: "Россия", position: "Полузащитник", photo: "https://pics.st/4bb/5d5/7db0315d.png" },
    { id: 96, name: "Надежда Смирнова", birthDate: "Россия", position: "Нападающий", photo: "https://pics.st/2e3/150/4061cf48.png" },
    { id: 97, name: "ОрёлГУ", birthDate: "-", position: "-", photo: "https://soccerlife.ru/images/logos4/512/78398.png" },
    { id: 98, name: "Джемма Фонт", birthDate: "Испания", position: "Вратарь", photo: "https://pics.st/e51/6aa/18bddc48.png" },
    { id: 99, name: "Анна Кашинская", birthDate: "Беларусь", position: "Защитник", photo: "https://pics.st/334/334/bd52a03a.png" },
    { id: 100, name: "Мария Дигурова", birthDate: "Россия", position: "Защитник", photo: "https://pics.st/f80/ce0/cbac054f.png" },
    { id: 101, name: "Эрика Хямяляйнен", birthDate: "Финляндия", position: "Защитник", photo: "https://pics.st/dd6/54a/97b554a6.png" },
    { id: 102, name: "Моди Стоп", birthDate: "Нидерланды", position: "Защитник", photo: "https://pics.st/770/34d/95073d9a.png" },
    { id: 103, name: "Анастасия Шведова", birthDate: "Россия", position: "Защитник", photo: "https://pics.st/0c1/ac4/1afca991.png" },
    { id: 104, name: "Леа Вольски", birthDate: "Германия", position: "Защитник", photo: "https://pics.st/fa4/bd3/f1cc88b5.png" },
    { id: 105, name: "Эбру Топчу", birthDate: "Турция", position: "Полузащитник", photo: "https://pics.st/8d6/9ce/ce8d6eae.png" },
    { id: 106, name: "Ольга Осипян", birthDate: "Армения", position: "Полузащитник", photo: "https://pics.st/da6/6cf/856323d6.png" },
    { id: 107, name: "Салли Менти", birthDate: "США", position: "Полузащитник", photo: "" },
    { id: 108, name: "Вероника Калюта", birthDate: "Беларусь", position: "Полузащитник", photo: "https://pics.st/20c/bc1/cf7bcf97.png" },
    { id: 109, name: "Инка Сарьяноя", birthDate: "Финляндия", position: "Полузащитник", photo: "https://pics.st/226/63c/2297c226.png" },
    { id: 110, name: "Нела Антикайнен", birthDate: "Финляндия", position: "Полузащитник", photo: "" },
    { id: 111, name: "Екатерина Фролова", birthDate: "Россия", position: "Нападающий", photo: "https://pics.st/899/3a5/bb855399.png" },
    { id: 112, name: "Сара Карильо", birthDate: "Испания", position: "Нападающий", photo: "https://pics.st/876/0a5/b3a2eb88.png" },
    { id: 113, name: "Краснодар", birthDate: "-", position: "-", photo: "https://soccerlife.ru/images/logos4/512/94201.png" },
    { id: 114, name: "Татьяна Щербак", birthDate: "Россия", position: "Вратарь", photo: "https://pics.st/847/74d/63b4253c.png" },
    { id: 115, name: "Малгожата Грец", birthDate: "Польша", position: "Защитник", photo: "https://pics.st/1b5/1da/5ee48966.png" },
    { id: 116, name: "Адриана Ранера", birthDate: "Испания", position: "Защитник", photo: "https://pics.st/751/1ea/aa7714a0.png" },
    { id: 117, name: "Виктория Шкода", birthDate: "Россия", position: "Защитник", photo: "https://pics.st/842/06f/303654d6.png" },
    { id: 118, name: "Владислава Буткевич", birthDate: "Россия", position: "Защитник", photo: "https://pics.st/f9f/45b/548d830b.png" },
    { id: 119, name: "Даниэла Басаева", birthDate: "Россия", position: "Защитник", photo: "https://pics.st/d99/bc1/969df54c.png" },
    { id: 120, name: "Медея Жаркова", birthDate: "Россия", position: "Защитник", photo: "https://pics.st/4b5/091/a1ecb7f0.png" },
    { id: 121, name: "Бернадетти Амани", birthDate: "Кот-д`Ивуар", position: "Полузащитник", photo: "" },
    { id: 122, name: "Жанис Кеман", birthDate: "Бельгия", position: "Полузащитник", photo: "https://pics.st/754/6da/a9762839.png" },
    { id: 123, name: "Берглинд Торвальдсдоттир", birthDate: "Исландия", position: "Полузащитник", photo: "https://pics.st/5dc/0ae/d3d6ee83.png" },
    { id: 124, name: "Джоси Грин", birthDate: "Уэльс/Англия", position: "Полузащитник", photo: "https://pics.st/6e3/c39/4fc24c6e.png" },
    { id: 125, name: "Кэтлин Луана да Силва", birthDate: "Бразилия", position: "Полузащитник", photo: "https://pics.st/bba/93a/e1da1f07.png" },
    { id: 126, name: "Арина Шуба", birthDate: "Россия", position: "Полузащитник", photo: "https://pics.st/ed4/61e/9d314016.png" },
    { id: 127, name: "Алина Лихота", birthDate: "Россия", position: "Полузащитник", photo: "https://pics.st/109/50e/05810940.png" },
    { id: 128, name: "Каролин Мелер", birthDate: "Дания", position: "Нападающий", photo: "https://pics.st/af9/732/f045b247.png" },
    { id: 129, name: "Приалит", birthDate: "-", position: "-", photo: "https://soccerlife.ru/images/logos4/512/89257.png" },
    { id: 130, name: "Ирина Зварич", birthDate: "Украина", position: "Вратарь", photo: "https://pics.st/9de/f38/b27d087f.png" },
    { id: 131, name: "Валерия Имховик", birthDate: "Беларусь", position: "Защитник", photo: "https://pics.st/aed/96a/463339a9.png" },
    { id: 132, name: "Ноко Матлу", birthDate: "ЮАР", position: "Защитник", photo: "" },
    { id: 133, name: "Айгерим Айтымова", birthDate: "Казахстан", position: "Защитник", photo: "" },
    { id: 134, name: "Эльвира Уразаева", birthDate: "Беларусь", position: "Защитник", photo: "https://pics.st/a6f/d20/ff05c859.png" },
    { id: 135, name: "Сесили Лиане", birthDate: "Норвегия", position: "Защитник", photo: "https://pics.st/60a/0fe/ab0fe738.jpg" },
    { id: 136, name: "Людмила Шадрина", birthDate: "Россия", position: "Защитник", photo: "https://pics.st/e09/e09/8578b6aa.png" },
    { id: 137, name: "Лиза Макас", birthDate: "Австрия", position: "Полузащитник", photo: "https://pics.st/4ef/71e/504b192a.png" },
    { id: 138, name: "Аида Гайстенова", birthDate: "Казахстан", position: "Полузащитник", photo: "https://pics.st/5ab/58e/c3e1a5ab.png" },
    { id: 139, name: "Ася Туриева", birthDate: "Россия", position: "Полузащитник", photo: "https://pics.st/baa/bc5/c5251896.png" },
    { id: 140, name: "Жансая Козиева", birthDate: "Казахстан", position: "Полузащитник", photo: "" },
    { id: 141, name: "Илона Власенко", birthDate: "Россия", position: "Полузащитник", photo: "https://pics.st/f94/efe/fea2f944.png" },
    { id: 142, name: "Мадина Жанатаева", birthDate: "Казахстан", position: "Полузащитник", photo: "https://pics.st/f1b/fdf/90d06b93.png" },
    { id: 143, name: "Александра Кулакова", birthDate: "Россия", position: "Нападающий", photo: "" },
    { id: 144, name: "София Коггули", birthDate: "Греция", position: "Нападающий", photo: "https://pics.st/d37/8ef/4f1c7fcf.png" },
    { id: 145, name: "Ростов", birthDate: "-", position: "-", photo: "https://soccerlife.ru/images/logos4/512/97144.png" },
    { id: 146, name: "Елизавета Щербакова", birthDate: "Россия", position: "Вратарь", photo: "https://pics.st/e38/3d9/7e3834b2.png" },
    { id: 147, name: "Алазне Эстенсоро", birthDate: "Испания", position: "Вратарь", photo: "" },
    { id: 148, name: "Насиба Гасанова", birthDate: "Россия", position: "Защитник", photo: "https://pics.st/593/c1d/758d2179.png" },
    { id: 149, name: "Кристина Голощекова", birthDate: "Россия", position: "Защитник", photo: "https://pics.st/c83/c4a/b0189aa8.png" },
    { id: 150, name: "Екатерина Касина", birthDate: "Россия", position: "Защитник", photo: "https://pics.st/c5a/260/e584bb15.png" },
    { id: 151, name: "Анастасия Савко", birthDate: "Беларусь", position: "Защитник", photo: "https://pics.st/7b4/a1a/4236c07b.png" },
    { id: 152, name: "Инна Новикова", birthDate: "Россия", position: "Защитник", photo: "https://pics.st/afd/40f/b34fafd4.png" },
    { id: 153, name: "Несрин Акгун", birthDate: "Швеция/Турция", position: "Полузащитник", photo: "https://pics.st/6ac/7ac/3b51df2a.png" },
    { id: 154, name: "Ребека Коста да Силва", birthDate: "Бразилия", position: "Полузащитник", photo: "https://pics.st/dc4/cdc/cdc47b94.png" },
    { id: 155, name: "Лилия Мызникова", birthDate: "Россия", position: "Полузащитник", photo: "https://pics.st/64f/ec5/f827ec5e.png" },
    { id: 156, name: "Виктория Моура", birthDate: "Бразилия", position: "Полузащитник", photo: "https://pics.st/d23/23e/96d23e2e.png" },
    { id: 157, name: "Елизавета Лазарева", birthDate: "Россия", position: "Полузащитник", photo: "https://pics.st/a32/c17/b2b053a5.png" },
    { id: 158, name: "Виталина Родионенко", birthDate: "Россия", position: "Полузащитник", photo: "https://pics.st/9b8/374/aeb696f9.png" },
    { id: 159, name: "Ксения Лукина", birthDate: "Россия", position: "Полузащитник", photo: "https://pics.st/54f/ecd/31b02605.png" },
    { id: 160, name: "Анна Пешкова", birthDate: "Россия", position: "Нападающий", photo: "https://pics.st/147/4d5/4d5fbfd0.png" },
    { id: 161, name: "Звезда СПб", birthDate: "-", position: "-", photo: "https://soccerlife.ru/images/logos4/512/89264.png" },
    { id: 162, name: "Алёна Грязнова", birthDate: "Россия", position: "Вратарь", photo: "https://pics.st/8c1/882/8265a53a.png" },
    { id: 163, name: "Эмма Броунлай", birthDate: "Шотлендия", position: "Защитник", photo: "https://pics.st/6ba/589/2d17c589.jpg" },
    { id: 164, name: "Камилла Девес", birthDate: "Франция", position: "Защитник", photo: "" },
    { id: 165, name: "Амбер Мютсарс", birthDate: "Нидерланды", position: "Защитник", photo: "https://pics.st/47c/fbc/fbce08ef.png" },
    { id: 166, name: "Марта Турмо", birthDate: "Испания", position: "Защитник", photo: "https://pics.st/68c/607/5e14f815.png" },
    { id: 167, name: "Людмила Шматко", birthDate: "Украина/Беларусь", position: "Защитник", photo: "https://pics.st/2f4/aa8/d4a36406.jpg" },
    { id: 168, name: "Сабрина Флорес", birthDate: "США", position: "Защитник", photo: "https://pics.st/7ad/61e/961eb129.png"},
    { id: 169, name: "Айви Белинда Люик", birthDate: "Австралия", position: "Полузащитник", photo: "https://pics.st/139/49c/350e9a3a.png" },
    { id: 170, name: "Петра Пезель", birthDate: "Хорватия", position: "Полузащитник", photo: "https://pics.st/9a2/79a/6f75bd33.png" },
    { id: 171, name: "Анастасия Тренькина", birthDate: "Россия", position: "Полузащитник", photo: "https://pics.st/b66/8f7/c78f7d31.png" },
    { id: 172, name: "Анна Йельмквист", birthDate: "Швеция", position: "Полузащитник", photo: "https://pics.st/faa/7d7/af7fdd6b.png" },
    { id: 173, name: "Этте Шульц", birthDate: "Германия", position: "Полузащитник", photo: "" },
    { id: 174, name: "Валентина Нижегородова", birthDate: "Беларусь/Россия", position: "Полузащитник", photo: "https://pics.st/da9/597/8c348d72.png" },
    { id: 175, name: "Наталья Машина", birthDate: "Россия", position: "Нападающий", photo: "https://pics.st/788/e8b/7881c563.png" },
    { id: 176, name: "Оксана Пизлова", birthDate: "Армения", position: "Нападающий", photo: "https://pics.st/2d2/927/ea192719.png" },
    { id: 177, name: "Дончанка", birthDate: "-", position: "-", photo: "https://soccerlife.ru/images/logos4/512/78390.png" },
    { id: 178, name: "Маргарита Широкова", birthDate: "Россия", position: "Вратарь", photo: "https://pics.st/1fc/db7/0fcf4824.png" },
    { id: 179, name: "Илана Мендонса", birthDate: "Бразилия", position: "Защитник", photo: "https://pics.st/a61/ab0/1512bab0.png" },
    { id: 180, name: "Вера Симановская", birthDate: "Россия", position: "Защитник", photo: "https://pics.st/d09/ba9/65e46f6a.png" },
    { id: 181, name: "Яна Браун", birthDate: "Германия", position: "Защитник", photo: "https://pics.st/6ac/d37/f0716ac3.png" },
    { id: 182, name: "Татьяна Кенда", birthDate: "Беларусь", position: "Защитник", photo: "https://pics.st/169/c9c/c9c18150.png" },
    { id: 183, name: "Анна Десятник", birthDate: "Россия", position: "Защитник", photo: "https://pics.st/14c/39b/e2c7517f.png" },
    { id: 184, name: "Юлия Присяжнюк", birthDate: "Россия", position: "Защитник", photo: "https://pics.st/04f/04f/f0dd610b.png" },
    { id: 185, name: "Насера Бушенте", birthDate: "Франция", position: "Полузащитник", photo: "https://pics.st/78a/072/e52072ed.png" },
    { id: 186, name: "Наталья Перепечина", birthDate: "Россия", position: "Полузащитник", photo: "https://pics.st/ad0/604/0a7d6132.png" },
    { id: 187, name: "Анастасия Карандашова", birthDate: "Россия", position: "Полузащитник", photo: "https://pics.st/41d/dac/fb24a997.png" },
    { id: 188, name: "Саския Сало", birthDate: "Финляндия", position: "Полузащитник", photo: "https://pics.st/81b/a04/bf61a048.png" },
    { id: 189, name: "Зарина Шарифова", birthDate: "Россия", position: "Полузащитник", photo: "https://pics.st/4e7/e17/50e177c2.png" },
    { id: 190, name: "Галина Гейбиева", birthDate: "Россия", position: "Полузащитник", photo: "https://pics.st/e9b/a3c/7bc7d31d.png" },
    { id: 191, name: "Диляра Бондарева", birthDate: "Украина", position: "Нападающий", photo: "https://pics.st/27c/27c/be03209b.png" },
    { id: 192, name: "Валерия Бизенкова", birthDate: "Россия", position: "Нападающий", photo: "https://pics.st/494/d6c/4d6c778c.png" },
    { id: 193, name: "Академия Футбола", birthDate: "-", position: "-", photo: "https://soccerlife.ru/images/logos4/512/78392.png" },
    { id: 194, name: "Татьяна Чистик", birthDate: "Беларусь", position: "Вратарь", photo: "https://pics.st/67f/c67/9a2ec6a6.png" },
    { id: 195, name: "Ликси Родригес", birthDate: "Коста-Рика", position: "Защитник", photo: "https://pics.st/d0d/2cd/e561f62c.png" },
    { id: 196, name: "Екатерина Морозова", birthDate: "Россия", position: "Защитник", photo: "https://pics.st/2b7/88c/36cc35a5.png" },
    { id: 197, name: "Тэйлор Лич", birthDate: "США", position: "Защитник", photo: "" },
    { id: 198, name: "Ксения Кулинич", birthDate: "Россия", position: "Защитник", photo: "https://pics.st/461/f69/6cc461ce.png" },
    { id: 199, name: "Анастасия Акимова", birthDate: "Россия", position: "Защитник", photo: "https://pics.st/461/f69/6cc461ce.png" },
    { id: 200, name: "Роза Алауи Ламрен", birthDate: "Франция", position: "Защитник", photo: "https://pics.st/0cb/9f7/0cb61214.png" },
    { id: 201, name: "Кристина Бачило", birthDate: "Беларусь", position: "Защитник", photo: "" },
    { id: 202, name: "Элли Лемос", birthDate: "США", position: "Полузащитник", photo: "https://pics.st/b21/493/12183d3d.png" },
    { id: 203, name: "Ксения Шахова", birthDate: "Россия", position: "Полузащитник", photo: "https://pics.st/3c8/7fc/27fc50e4.png" },
    { id: 204, name: "Алена Нургалиева", birthDate: "Россия", position: "Полузащитник", photo: "https://pics.st/db3/11a/5c585dc0.png" },
    { id: 205, name: "Кристина Хорошева", birthDate: "Россия", position: "Полузащитник", photo: "https://pics.st/46e/5f9/5c476319.png" },
    { id: 206, name: "Оксана Еремеева", birthDate: "Россия", position: "Полузащитник", photo: "https://pics.st/f0f/39b/02d63359.png" },
    { id: 207, name: "Наталья Осипова", birthDate: "Россия", position: "Полузащитник", photo: "https://pics.st/c7f/732/53aa6ae2.png" },
    { id: 208, name: "Олеся Курочкина", birthDate: "Россия", position: "Нападающий", photo: "https://pics.st/3eb/e80/7ed5cb2c.png" },
    { id: 209, name: "Мастер-Сатурн", birthDate: "-", position: "-", photo: "https://soccerlife.ru/images/logos4/512/97224.png" },
    { id: 210, name: "Диана Пономарева", birthDate: "Россия", position: "Вратарь", photo: "https://pics.st/ae4/0a3/d64409ae.png" },
    { id: 211, name: "Ивонн Сантиллана", birthDate: "Мексика", position: "Защитник", photo: "https://pics.st/cfd/d2a/ab3f03e1.png" },
    { id: 212, name: "Наталья Аникина", birthDate: "Россия", position: "Защитник", photo: "https://pics.st/26f/577/547ccdd7.png" },
    { id: 213, name: "Валерия Бирюкова", birthDate: "Россия", position: "Защитник", photo: "https://pics.st/dc1/1a8/c45fc77e.png" },
    { id: 214, name: "Лилия Бибикова", birthDate: "Россия", position: "Защитник", photo: "https://pics.st/bce/2d6/4bd65064.png" },
    { id: 215, name: "Яна Пономаренко", birthDate: "Россия", position: "Защитник", photo: "https://pics.st/d35/d7d/d1a50d8e.png" },
    { id: 216, name: "Ева Пономарева", birthDate: "Россия", position: "Защитник", photo: "https://pics.st/6de/5e5/7bbb5cf0.png" },
    { id: 217, name: "Орор Папшицки", birthDate: "Франция", position: "Полузащитник", photo: "https://pics.st/f5a/4ea/3b50bfec.png" },
    { id: 218, name: "Кристи Грей", birthDate: "Канада", position: "Полузащитник", photo: "" },
    { id: 219, name: "Кения Теллес", birthDate: "Мексика", position: "Полузащитник", photo: "https://pics.st/a60/e60/8946e60a.png" },
    { id: 220, name: "Сиена Хигинботэм", birthDate: "США", position: "Полузащитник", photo: "https://pics.st/4fc/552/d00755ee.png" },
    { id: 221, name: "Евгения Павлова", birthDate: "Россия", position: "Полузащитник", photo: "https://pics.st/f0d/405/5b5dde75.png" },
    { id: 222, name: "Юлия Чехлатая", birthDate: "Россия", position: "Полузащитник", photo: "https://pics.st/674/f29/22457b14.png" },
    { id: 223, name: "Вусала Гаджиева", birthDate: "Азербайджан", position: "Полузащитник", photo: "https://pics.st/845/728/00d38457.png" },
    { id: 224, name: "Юлия Хёльчи", birthDate: "Швейцария", position: "Нападающий", photo: "https://pics.st/2ab/247/10e6960f.png" },
];

var STICKER_EMOJIS = [
    "⚽","⚽","⚽","⚽","⚽","⚽","⚽","⚽","⚽","⚽","⚽","⚽","⚽","⚽",
    "⚽","⚽","⚽","⚽","⚽","⚽","⚽","⚽","⚽","⚽","⚽","⚽","⚽","⚽",
    "⚽","⚽","⚽","⚽","⚽","⚽","⚽","⚽","⚽","⚽","⚽","⚽","⚽","⚽",
    "⚽","⚽","⚽","⚽","⚽","⚽","⚽","⚽","⚽","⚽","⚽","⚽","⚽","⚽",
    "⚽","⚽","⚽","⚽","⚽","⚽","⚽","⚽","⚽","⚽","⚽","⚽","⚽","⚽",
    "⚽","⚽","⚽","⚽","⚽","⚽","⚽","⚽","⚽","⚽","⚽","⚽","⚽","⚽",
    "⚽","⚽","⚽","⚽","⚽","⚽","⚽","⚽","⚽","⚽","⚽","⚽","⚽","⚽",
    "⚽","⚽","⚽","⚽","⚽","⚽","⚽","⚽","⚽","⚽","⚽","⚽","⚽","⚽",
    "⚽","⚽","⚽","⚽","⚽","⚽","⚽","⚽","⚽","⚽","⚽","⚽","⚽","⚽",
    "⚽","⚽","⚽","⚽","⚽","⚽","⚽","⚽","⚽","⚽","⚽","⚽","⚽","⚽",
    "⚽","⚽","⚽","⚽","⚽","⚽","⚽","⚽","⚽","⚽","⚽","⚽","⚽","⚽",
    "⚽","⚽","⚽","⚽","⚽","⚽","⚽","⚽","⚽","⚽","⚽","⚽","⚽","⚽",
    "⚽","⚽","⚽","⚽","⚽","⚽","⚽","⚽","⚽","⚽","⚽","⚽","⚽","⚽",
    "⚽","⚽","⚽","⚽","⚽","⚽","⚽","⚽","⚽","⚽","⚽","⚽","⚽","⚽",
    "⚽","⚽","⚽","⚽","⚽","⚽","⚽","⚽","⚽","⚽","⚽","⚽","⚽","⚽",
    "⚽","⚽","⚽","⚽","⚽","⚽","⚽","⚽","⚽","⚽","⚽","⚽","⚽","⚽",
];
    
var STICKERS_PER_PACK = 5;

var VALID_CODES = [
    "2JQDL4","2M4J8J","2M5MWQ","2SM2ZE","2VEBH3","2VWTBG","32XZYE","35ZEPF","3B9V55","3MRM9A",
    "3NPNCN","3QQ5ET","3RZX7P","3YR46L","4F2EZ7","4KL7TQ","4Q53N2","4SU4MF","4WBCR5","54FW67",
    "59CEDG","5A2E3B","5BLWJX","5CA9LN","5CSQU7","5F2EAW","5FAW34","62YMJ2","6BMLXL","6C4DGV",
    "6CVBPC","6GCFKJ","6JJ85J","6QACZU","6QJRQR","6RAFHG","6TRUMR","6YUZP2","75QG9C","78CDRK",
    "7BY66V","7CAJ7N","7HTJRF","7JVW9U","7QUFG6","7TXDMH","7UAW2Q","8KPXR8","8KTY6Q","8KWZQC",
    "8QQKY6","9439EN","98YZHQ","9JNPRC","9MLRJM","9PPXBP","9X3QJA","9XHDZ7","A3594Z","A4PRA4",
    "AGEYFF","AHCYZW","AKG7R8","ALFXCG","AUAQ65","AYAUF2","B59J8C","BKHKMA","BKVUN5","BSYT54",
    "BU58S8","BZU7ZU","C2XXDL","C87QP2","CEP8XJ","CMF9SL","CPKJVZ","CQNMS4","CTLNV9","CVX8PW",
    "D2VG7W","DDKH7F","DEHRUR","DFR78Y","DGGWFP","DTF4TG","E583WD","E6BFTE","E89UNW","E9CUJ8",
    "ELGJXN","EM7WE5","ENPY58","EQ2JG9","ESUL4Y","F8R63R","FNNBNT","G7EYEK","G83NAP","G9Z4MG",
    "GDRG4K","GJH7YB","GTHEZD","GUXJW5","GZQXFT","H2YGNN","H3EY2G","HB9BD3","HD55YK","HGVMB9",
    "HL25DJ","HQ8WEP","J22NAE","J4CUYW","J6N85A","J893BS","JAS4ZZ","JCY6PR","JFMT4L","JK5DZ3",
    "JLYJJV","JW97UK","JXXRLA","K5EN7L","KGD482","KNLLQ9","KQ75N3","KR5Z2L","KU2ZJX","KW8ZQC",
    "KZCJKL","L98RH5","LDQE6N","LFTVGR","LKNQV6","LNQ7WE","LNZMGJ","LUVVDR","M49GBS","MRMXP6",
    "MW6GN3","MYQX49","NAF4V9","NFE565","NSFHZM","NUM9B3","NUNDVN","NV4R6V","NXU8S9","P2XBMM",
    "P7EPPL","P9C5EK","PBZK7Q","PFM75M","Q8MK62","Q9XW4T","QFWFXJ","QLJSR5","QLRD9X","QVLN78",
    "QZG6DB","R5XKFA","R6T6YR","R8XQCM","RASZZH","RBSJTM","RPE3BA","RPWS3C","RVAETF","RVL6JZ",
    "S47XHJ","SHHXUV","SRNR6B","SVTRKP","SWJEQ6","SZ35AQ","SZJS4F","T38D24","TDNVVX","TNE346",
    "UF37GW","UFRD3Z","UHSWD2","UL2BSB","UMGAVS","UMVHUW","UW3YQD","VFZL4T","VG6BKS","VJWMUF",
    "VT8UJ3","WA7X7D","WCGRCY","WCPUWU","WJRKEZ","WS8CX4","X867T5","X8MRGD","XBNFZA","XJ67VH",
    "XM35GF","XMHB63","XNLCZD","XNM2D4","XP33EV","XX3E72","YBL4EK","YCM5X7","YJTYVE","YKJLVS",
    "YPDHJA","YQ3DU9","YSTFGA","YZ662K","Z4WYP6","ZBPV94","ZC3XGL","ZJNQBE","ZRFD2V","ZZL79E"
];

var ALBUMS = [
    {
        id: 1,
        title: "Суперлига 2026/2",
        name: "Суперлига 2026/2",
        totalStickers: 224,
        active: true,
        coverEmoji: "⚽",
        coverImage: "https://pics.st/dcc/c7d/0eb21cce.png",
        pages: [
            { name: "Звезда-2005", slots: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16] },
            { name: "Рязань-ВДВ", slots: [17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32] },
            { name: "ЦСКА", slots: [33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48] },
            { name: "Чертаново", slots: [49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64] },
            { name: "Зенит", slots: [65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80] },
            { name: "Локомотив", slots: [81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96] },
            { name: "ОрёлГУ", slots: [97,98,99,100,101,102,103,104,105,106,107,108,109,110,111,112] },
            { name: "Краснодар", slots: [113,114,115,116,117,118,119,120,121,122,123,124,125,126,127,128] },
            { name: "Приалит", slots: [129,130,131,132,133,134,135,136,137,138,139,140,141,142,143,144] },
            { name: "Ростов", slots: [145,146,147,148,149,150,151,152,153,154,155,156,157,158,159,160] },
            { name: "Звезда СПб", slots: [161,162,163,164,165,166,167,168,169,170,171,172,173,174,175,176] },
            { name: "Дончанка", slots: [177,178,179,180,181,182,183,184,185,186,187,188,189,190,191,192] },
            { name: "Академия Футбола", slots: [193,194,195,196,197,198,199,200,201,202,203,204,205,206,207,208] },
            { name: "Мастер-Сатурн", slots: [209,210,211,212,213,214,215,216,217,218,219,220,221,222,223,224] }
        ]
    }
];

if (!localStorage.getItem(LS_COLLECTION)) {
    localStorage.setItem(LS_COLLECTION, JSON.stringify({}));
}

function getStickerName(id) {
    var index = id - 1;
    if (index >= 0 && index < STICKER_DATA.length) return STICKER_DATA[index].name;
    return "Неизвестный игрок";
}

function getStickerBirthDate(id) {
    var index = id - 1;
    if (index >= 0 && index < STICKER_DATA.length) return STICKER_DATA[index].birthDate;
    return "";
}

function getStickerPosition(id) {
    var index = id - 1;
    if (index >= 0 && index < STICKER_DATA.length) return STICKER_DATA[index].position;
    return "";
}

function getStickerTeam(id) {
    var index = id - 1;
    var page = Math.floor(index / 16);
    if (page >= 0 && page < ALBUMS[0].pages.length) return ALBUMS[0].pages[page].name;
    return "";
}

function getStickerEmoji(id) {
    var index = id - 1;
    if (index >= 0 && index < STICKER_EMOJIS.length) return STICKER_EMOJIS[index];
    return "❓";
}

function getStickerImage(id) {
    var index = id - 1;
    if (index >= 0 && index < STICKER_DATA.length) {
        var photo = STICKER_DATA[index].photo;
        if (photo) return photo;
    }
    return null;
}


function getStickerCount(id) {
    var collection = JSON.parse(localStorage.getItem(LS_COLLECTION));
    return collection[id] ? collection[id] : 0;
}

function addSticker(id) {
    var collection = JSON.parse(localStorage.getItem(LS_COLLECTION));
    if (!collection[id]) collection[id] = 0;
    collection[id]++;
    localStorage.setItem(LS_COLLECTION, JSON.stringify(collection));
}

function removeSticker(id) {
    var collection = JSON.parse(localStorage.getItem(LS_COLLECTION));
    if (collection[id] && collection[id] > 0) {
        collection[id]--;
        if (collection[id] === 0) delete collection[id];
    }
    localStorage.setItem(LS_COLLECTION, JSON.stringify(collection));
}

function canExchange() {
    var collection = JSON.parse(localStorage.getItem(LS_COLLECTION));
    for (var id in collection) {
        if (collection[id] >= 2) return true;
    }
    return false;
}

function getDuplicatesList() {
    var collection = JSON.parse(localStorage.getItem(LS_COLLECTION));
    var duplicates = [];
    for (var id in collection) {
        if (collection[id] >= 2) {
            duplicates.push({ id: parseInt(id), count: collection[id] });
        }
    }
    duplicates.sort(function(a, b) { return b.count - a.count; });
    return duplicates;
}
