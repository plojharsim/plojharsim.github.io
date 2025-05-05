const vocabDatabases = {
    "cs-en": [
        // Unit 1: Who we are
        // 1.1 Clothes and accessories
        { cs: "pásek", en: "belt" },
        { cs: "kozačky/vysoké boty", en: "boots" },
        { cs: "náramek", en: "bracelet" },
        { cs: "svetr (vpředu na knoflíky)", en: "cardigan" },
        { cs: "kabát", en: "coat" },
        { cs: "šaty", en: "dress" },
        { cs: "náušnice", en: "earrings" },
        { cs: "kabelka", en: "handbag" },
        { cs: "klobouk", en: "hat" },
        { cs: "mikina s kapucí", en: "hoodie" },
        { cs: "bunda, sako", en: "jacket" },
        { cs: "legíny", en: "leggings" },
        { cs: "prsten", en: "ring" },
        { cs: "sandály", en: "sandals" },
        { cs: "šátek", en: "scarf" },
        { cs: "košile", en: "shirt" },
        { cs: "kraťasy", en: "shorts" },
        { cs: "sukně", en: "skirt" },
        { cs: "ponožky", en: "socks" },
        { cs: "kravata", en: "tie" },

        // 1.1 Patterns
        { cs: "kostkovaný", en: "checked" },
        { cs: "květovaný", en: "floral" },
        { cs: "jednoduchý, bez ozdob", en: "plain" },
        { cs: "tečkovaný", en: "spotted" },
        { cs: "pruhovaný", en: "striped" },

        // 1.1 Style
        { cs: "plandavý", en: "baggy" },
        { cs: "neformální", en: "casual" },
        { cs: "elegantní", en: "smart" },
        { cs: "těsný/upnutý", en: "tight" },

        // 1.2 Say it!
        { cs: "To je nechutné!", en: "That's gross!" },
        { cs: "To je nejhorší den mého života!", en: "This is the worst day of my life!" },

        // 1.3 Other
        { cs: "Cornwallský páštik", en: "Cornish pasty" },
        { cs: "kilo", en: "meat pie" },
        { cs: "nastavit budík", en: "set an alarm" },
        { cs: "surfovací prkno", en: "surfboard" },
        { cs: "konvice na čaj", en: "teapot" },
        { cs: "práčka", en: "washing machine" },

        // 1.4 Communication
        { cs: "Hádej, co se stalo v sobotu!", en: "Guess what happened on Saturday!" },
        { cs: "Nejdříve jsme šli do Lacey.", en: "First, we went to Lacey's." },
        { cs: "Nakonec našla pár bot, který se jí líbil.", en: "Finally, she found a pair she liked." },

        // 1.4 Reacting
        { cs: "Jak těpné/tlapné/divné!", en: "How embarrassing/strange!" },
        { cs: "Ten má štěstí!", en: "Lucky him!" },
        { cs: "Pěkně!", en: "Nice one!" },
        { cs: "Tak co udělal?", en: "So what did he do?" },
        { cs: "Co se stalo potom?", en: "So what happened next?" },
        { cs: "Co potom?", en: "Then what?" },

        // 1.5 Hair styles
        { cs: "plešatý", en: "bald" },
        { cs: "vousatý/plnovous", en: "beard" },
        { cs: "kudrnaté vlasy", en: "curly hair" },
        { cs: "barvené vlasy", en: "dyed hair" },
        { cs: "knír", en: "moustache" },
        { cs: "ohlazené vlasy", en: "shaved hair" },
        { cs: "ježaté vlasy", en: "spiky hair" },
        { cs: "rovné vlasy", en: "straight hair" },
        { cs: "vlnité vlasy", en: "wavy hair" },

        // 1.6 Other
        { cs: "zraněná bunda", en: "leather jacket" },
        { cs: "hlasitý", en: "loud" },
        { cs: "mír", en: "peace" },
        { cs: "zavírací spínačik", en: "safety pins" },
        { cs: "triko", en: "trick" },

        // 1.6 Personality adjectives
        { cs: "přátelský", en: "friendly" },
        { cs: "štědrý", en: "generous" },
        { cs: "pracovitý/pilný", en: "hard-working" },
        { cs: "upřímný", en: "honest" },
        { cs: " laskavý", en: "kind" },
        { cs: "lenivý", en: "lazy" },
        { cs: "otevřený", en: "open" },
        { cs: "zdvořilý, slušný", en: "polite" },
        { cs: "drzý", en: "rude" },
        { cs: "sobecký", en: "selfish" },
        { cs: "vážný", en: "serious" },
        { cs: "plachý", en: "shy" },
        { cs: "upovídaný", en: "talkative" },

        // 1.6 Negative adjectives
        { cs: "nedůstojný", en: "dishonest" },
        { cs: "nechápavý", en: "disorganised" },
        { cs: "netrpělivý", en: "impatient" },
        { cs: "nezvůle", en: "impolite" },
        { cs: "nepřátelský", en: "unfriendly" },
        { cs: "nevlídný, nepříjemný", en: "unkind" },

        // 1.7 Other
        { cs: "obdivovat", en: "admire" },
        { cs: "první dojem", en: "first impression" },
        { cs: "reálný", en: "realise" },
        { cs: "vědec", en: "scientist" },

        // 1.7 Other
        { cs: "vycházet s opou dobe od prvního okamžiku", en: "get on well straight away" },

        // 1.8 Get Culture
        { cs: "střední škola", en: "secondary school" },

        // 1.8 Clothes for special occasions
        { cs: "dudy", en: "bagpipes" },
        { cs: "jasný, zářivý", en: "bright" },
        { cs: "slavit", en: "celebrate" },
        { cs: "přijet", en: "come over" },
        { cs: "nastrojit se, vyparádit se", en: "dress up" },
        { cs: "haggis", en: "haggis" },
        { cs: "boty na vysokém podpatku", en: "high-heeled shoes" },
        { cs: "příležitost", en: "occasion" },
        { cs: "poezie", en: "poetry" },
        { cs: "školní ples", en: "school prom" },
        { cs: "tweed", en: "tweed" },
        { cs: "svatba", en: "wedding" }
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
