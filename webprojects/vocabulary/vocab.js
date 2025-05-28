const vocabDatabases = {
    "cs-en": [
        // Unit 2: Working hard
        // 2.1 Jobs
        { cs: "architekt", en: "architect" },
        { cs: "uklízeč", en: "cleaner" },
        { cs: "programátor", en: "computer programmer" },
        { cs: "zubař", en: "dentist" },
        { cs: "inženýr", en: "engineer" },
        { cs: "tovární dělník", en: "factory worker" },
        { cs: "hasič", en: "firefighter" },
        { cs: "kadeřnice", en: "hairdresser" },
        { cs: "novinář", en: "journalist" },
        { cs: "sekretářka", en: "secretary" },
        { cs: "průvodce", en: "tour guide" },

        // 2.1 Describing jobs
        { cs: "špatně placený", en: "badly paid" },
        { cs: "nudný", en: "boring" },
        { cs: "náročný", en: "challenging" },
        { cs: "nebezpečný", en: "dangerous" },
        { cs: "jednoduchý, snadný", en: "easy" },
        { cs: "vzrušující", en: "exciting" },
        { cs: "bezpečný", en: "safe" },
        { cs: "dobře placený", en: "well-paid" },

        // 2.1 Other
        { cs: "poté", en: "after that" },
        { cs: "most", en: "bridge" },
        { cs: "zákazník", en: "customer" },
        { cs: "vydělat peníze", en: "earn money" },
        { cs: "kancelář", en: "office" },
        { cs: "cesta, silnice", en: "road" },
        { cs: "továrna na hračky", en: "toy factory" },

        // 2.2 Say it!
        { cs: "Je obzvlášť vytížená.", en: "She's super busy." },
        { cs: "Zvládnu to.", en: "I can manage." },

        // 2.2 Make and do
        { cs: "dělat domácí úkoly", en: "do my homework" },
        { cs: "umýt nádobí", en: "do the dishes" },
        { cs: "nakupovat", en: "do the shopping" },
        { cs: "udělat jak nejlépe umíš", en: "do your best" },
        { cs: "udělat nepořádek", en: "make a mess" },
        { cs: "udělat snídani/oběd/večeři", en: "make breakfast/lunch/dinner" },
        { cs: "ustlat postel", en: "make your bed" },

        // 2.2 Other
        { cs: "zástěra", en: "apron" },
        { cs: "chilli papričky", en: "chillies" },
        { cs: "přijít, přijet", en: "come round" },
        { cs: "splněný sen", en: "dream come true" },
        { cs: "džentlmen", en: "gentleman" },
        { cs: "rukavice", en: "gloves" },
        { cs: "pomíchat", en: "mix up" },
        { cs: "papriky", en: "peppers" },
        { cs: "pikantní", en: "spicy" },
        { cs: "servírka", en: "waitress" },

        // 2.3 Other
        { cs: "kánoe", en: "canoe" },
        { cs: "slovník", en: "dictionary" },
        { cs: "vzdát se", en: "give up" },
        { cs: "za mých časů", en: "in my day" },
        { cs: "ztracený kmen", en: "lost tribe" },
        { cs: "motorový člun", en: "motorboat" },
        { cs: "vybitá baterie", en: "out of battery" },
        { cs: "pádlo", en: "paddle" },
        { cs: "aplikace překladač", en: "translate app" },

        // 2.4 Communication
        // 2.4 Asking for advice
        { cs: "Můžu se tě zeptat na radu?", en: "Can I ask your advice?" },
        { cs: "Potřebuji tvoji radu.", en: "I need your advice." },
        { cs: "Co bych si měl vzít na sebe?", en: "What should I wear?" },

        // 2.4 Giving advice
        { cs: "Podle mého názoru by sis neměl brát tenisky.", en: "In my opinion, you shouldn't wear trainers." },
        { cs: "Co kdyby sis oblékl bílou košili?", en: "What about wearing a white shirt?" },
        { cs: "Nechceš si vzít kravatu?", en: "Why don't you put on a tie?" },
        { cs: "Měl bys vypadat elegantně.", en: "You should look smart." },
        { cs: "Neměl bys brát tenisky.", en: "You shouldn't wear trainers." },

        // 2.4 Other
        { cs: "záchranné středisko zvířat", en: "animal rescue centre" },
        { cs: "mimochodem", en: "by the way" },
        { cs: "uklidit klece", en: "clean the cages" },
        { cs: "dobrovolník", en: "volunteer" },

        // 2.5 Other
        { cs: "hořký", en: "bitter" },
        { cs: "artista; účinkující v cirkuse", en: "circus performer" },
        { cs: "cirkusová škola", en: "circus school" },
        { cs: "krémový", en: "creamy" },
        { cs: "nevýhoda", en: "disadvantage" },
        { cs: "odborník", en: "expert" },
        { cs: "žonglovat", en: "juggle" },
        { cs: "nože", en: "knives" },
        { cs: "trénovat; cvičit", en: "practise" },
        { cs: "skóre", en: "score" },
        { cs: "podívat se na", en: "take a look at" },
        { cs: "ochutnat", en: "taste" },
        { cs: "vlak", en: "train" },

        // 2.6 Learning and exams
        { cs: "opsat něčí práci", en: "copy someone's work" },
        { cs: "dařit se/nedařit se", en: "do well/badly" },
        { cs: "dostat dobrou/špatnou známku", en: "get a good/bad mark" },
        { cs: "odevzdat domácí úkol", en: "hand in your homework" },
        { cs: "udělat zkoušku/neudělat zkoušku", en: "pass/fail an exam" },
        { cs: "opakovat si na test", en: "revise for a test" },

        // 2.6 Expressions with take
        { cs: "vyfotit", en: "take a photo" },
        { cs: "psát test/dělat zkoušku", en: "take an exam" },
        { cs: "vzít si léky", en: "take medicine" },
        { cs: "dělat si poznámky", en: "take notes" },
        { cs: "jet autobusem", en: "take the bus" },

        // 2.6 Other
        { cs: "dostatek/dost", en: "enough" },
        { cs: "úspěšný", en: "successful" },

        // 2.7 Other
        { cs: "atmosféra", en: "atmosphere" },
        { cs: "venkov", en: "countryside" },
        { cs: "lunapark, kolotoče", en: "funfair" },
        { cs: "hřiště", en: "playground" },
        { cs: "školní klub/kroužek", en: "school club" },
        { cs: "školní výlet", en: "school trip" },
        { cs: "trampolína", en: "trampoline" }
    ],
    "cs-de": [
        { cs: "Sešity", de: "Hefte" },
        { cs: "Pera", de: "Kugelschreiber" },
        { cs: "Pravítka", de: "Lineale" },
        { cs: "Krabičky na make-up", de: "Make-up-Boxen" },
        { cs: "Vodovky", de: "Malkästen" },
        { cs: "Nůžky", de: "Scheren" },
        { cs: "Boty", de: "Schuhe" },
        { cs: "Zvýrazňovače", de: "Textmarker" },
        { cs: "Slovníky", de: "Wörterbücher" },
        { cs: "Banány", de: "Bananen" },
        { cs: "Tužky", de: "Bleistifte" },
        { cs: "Poznámkové bloky", de: "Blöcke" },
        { cs: "Vidličky", de: "Gabeln" },
        { cs: "Rtěnky", de: "Lippenstifte" },
        { cs: "Zvýrazňovače", de: "Marker" },
        { cs: "Sportovní boty", de: "Turnschuhe" },
        { cs: "Pera", de: "Kulis" },
        { cs: "Penály", de: "Mäppchen" },
        { cs: "Čepice", de: "Mützen" },
        { cs: "Svetry", de: "Pullover" },
        { cs: "Gumy", de: "Radiergummis" },
        { cs: "Tablety", de: "Tablets" },
        { cs: "Kalkulačky", de: "Taschenrechner" }
    ]
};
