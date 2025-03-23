const vocabDatabases = {
    "cs-en": [
        // Unit 7: Where I live
        // 7.1 Places to live
        { cs: "blok bytů", en: "block of flats" },
        { cs: "chata", en: "cottage" },
        { cs: "dům", en: "house" },
        { cs: "byt", en: "flat" },
        { cs: "polodomek", en: "semi-detached house" },
        { cs: "řadový dům", en: "terraced house" },
        { cs: "v městě", en: "in a city" },
        { cs: "v městečku", en: "in a town" },
        { cs: "na vesnici", en: "in a village" },
        { cs: "na venkově", en: "in the country" },
        { cs: "na ostrově", en: "on an island" },

        // 7.1 Vocabulary: Parts of the house
        { cs: "balkón", en: "balcony" },
        { cs: "suterén", en: "basement" },
        { cs: "první patro", en: "first floor" },
        { cs: "přízemí", en: "ground floor" },
        { cs: "výtah", en: "lift" },
        { cs: "schody", en: "stairs" },
        { cs: "horní patro", en: "top floor" },

        // 7.2 Say it!
        { cs: "to záleží", en: "it depends" },
        { cs: "pamatovat si", en: "remember" },
        { cs: "uvidíme se později", en: "see you later" },
        { cs: "chytit autobus", en: "catch the bus" },
        { cs: "budoucnost", en: "future" },
        { cs: "jet na služební cestu", en: "go on a business trip" },
        { cs: "spěchat", en: "in a hurry" },
        { cs: "za pět minut", en: "in five minutes" },
        { cs: "příští týden", en: "next week" },
        { cs: "vyzvednout mě", en: "pick me up" },
        { cs: "tento večer", en: "this evening" },
        { cs: "v zahradě", en: "in the garden" },
        { cs: "dnes večer", en: "tonight" },
        { cs: "příští víkend", en: "next weekend" },
        { cs: "stěhujeme se", en: "we're moving house" },

        // 7.3 Vocabulary: In the house
        { cs: "knihovna", en: "bookcase" },
        { cs: "skříň", en: "cupboard" },
        { cs: "zásuvka", en: "drawer" },
        { cs: "zrcadlo", en: "mirror" },
        { cs: "umyvadlo", en: "sink" },
        { cs: "kohoutek", en: "tap" },

        // 7.3 Other
        { cs: "pravidla domu", en: "house rules" },
        { cs: "okamžitě", en: "immediately" },
        { cs: "odjet", en: "leave" },
        { cs: "udělat nepořádek", en: "make a mess" },
        { cs: "uklidit", en: "put things away" },
        { cs: "voda", en: "wet" },
        { cs: "spínač", en: "switch" },
        { cs: "vypnout", en: "switch off" },

        // 7.4 Communication: Making an invitation
        { cs: "Máš v neděli čas?", en: "Are you free on Sunday?" },
        { cs: "Chtěl bys vyrazit ven?", en: "Would you like to hang out?" },
        { cs: "Chceš v neděli vyrazit?", en: "Do you want to hang out on Sunday?" },
        { cs: "Můžeme se setkat v parku v sobotu. Můžeš přijít?", en: "Mum's taking us to the adventure park on Saturday. Can you come?" },
        { cs: "To zní skvěle. Děkuji.", en: "That sounds fun. Thank you." },
        { cs: "Ty jsi skvělý. Děkuji.", en: "That sounds great. Thank you." },
        { cs: "Ano, rád bych přišel. Děkuji.", en: "Yes, I'd love to. Thanks." },
        { cs: "Rád bych, ale v sobotu nemůžu.", en: "I'd love to, but we're visiting our cousins this Saturday." },
        { cs: "Omlouvám se, v sobotu nemůžu.", en: "I'm sorry, I can't come on Saturday." },
        { cs: "Možná příště.", en: "Sorry, maybe next time." },

        // 7.5 Vocabulary: Phrases
        { cs: "zkontrolovat", en: "check out" },
        { cs: "uklidit", en: "clean up" },
        { cs: "zjistit", en: "find out" },
        { cs: "vstát", en: "get up" },
        { cs: "probudit se", en: "wake up" },
        { cs: "hrozný", en: "awful" },
        { cs: "pták obojživelník", en: "bird bath" },
        { cs: "uklidit po tvém psovi", en: "clean up after your dog" },
        { cs: "odstranit nepořádek", en: "drop litter" },
        { cs: "čekat", en: "expect" },
        { cs: "květináč", en: "flower pot" },
        { cs: "půda", en: "ground" },
        { cs: "sousedství", en: "neighbourhood" },
        { cs: "rostliny", en: "plant" },
        { cs: "květiny", en: "flowers" },
        { cs: "i když", en: "though" },
        { cs: "užitečný", en: "useful" },

        // 7.6 Get culture
        { cs: "je to skvělý způsob, jak se setkat", en: "it's a great way to meet" },
        { cs: "mokré", en: "wet" },
        { cs: "vypnout", en: "switch off" },

        // 7.6 Very British food
        { cs: "sušenka", en: "cracker" },
        { cs: "přichází v mnoha příchutích", en: "it comes in many flavours" },
        { cs: "sýr a kvasnice", en: "yeast and kvas in klaz" },
        { cs: "hořčice", en: "mustard" },
        { cs: "koláč", en: "pie" },
        { cs: "mořské plody", en: "seaside" },
        { cs: "sdílet", en: "share" },
        { cs: "jednoduchý", en: "simple" },
        { cs: "jídlo na cestu", en: "takeaway food" },
        { cs: "chutný", en: "tasty" },
        { cs: "velšský", en: "Welsh" },
        { cs: "Yorkshirský pudink", en: "Yorkshire pudding" },

        // Unit 8: A happy life
        // 8.1 Vocabulary: Life ambitions
        { cs: "být lékařem", en: "be a doctor" },
        { cs: "být slavný", en: "be famous" },
        { cs: "být bohatý", en: "be rich" },
        { cs: "mít rodinu", en: "have a family" },
        { cs: "mít zajímavou práci", en: "have an interesting job" },
        { cs: "mít vlastní firmu", en: "have my own business" },
        { cs: "naučit se cizí jazyk", en: "learn a foreign language" },
        { cs: "naučit se řídit", en: "learn to drive" },
        { cs: "žít v zahraničí", en: "live abroad" },
        { cs: "žít sám", en: "live on my own" },
        { cs: "manžel", en: "husband" },
        { cs: "manželé", en: "perhaps" },

        // 8.2 Say it!
        { cs: "to je myšlenka", en: "here's a thought" },
        { cs: "je těžké rozhodnout", en: "it's hard to decide" },
        { cs: "je těžké rozhodnout", en: "it's hard to decide" },
        { cs: "teď už musím jít", en: "Mum now, I must" },

        // 8.3 Vocabulary: Being with people
        { cs: "volat", en: "call" },
        { cs: "dát někomu objetí", en: "give someone a hug" },
        { cs: "pozvat", en: "invite" },
        { cs: "polibek", en: "kiss" },
        { cs: "potřást rukama", en: "shake hands" },
        { cs: "navštívit", en: "visit" },

        // 8.4 Communication: Agreeing and disagreeing
        { cs: "souhlasím s tebou", en: "I agree (with you)" },
        { cs: "to je pravda", en: "That's right" },
        { cs: "to je pravda, myslím si to taky", en: "That's what I think too" },
        { cs: "máš pravdu", en: "You're right" },
        { cs: "nesouhlasím s tebou", en: "I disagree (with you)" },
        { cs: "myslím, že ne", en: "I don't think so" },
        { cs: "to není pravda", en: "That isn't right" },
        { cs: "to není pravda", en: "That's not true" },
        { cs: "dát někomu objetí na rozloučenou", en: "give someone a 'goodbye' hug" },
        { cs: "druhá ruka", en: "second-hand" },
        { cs: "ztišit hudbu", en: "turn the music down" },

        // 8.5 Good manners
        { cs: "přijít včas", en: "arrive on time" },
        { cs: "požádat o povolení", en: "ask for permission" },
        { cs: "být zdvořilý", en: "be polite" },
        { cs: "přerušit", en: "interrupt" },
        { cs: "čekat na svůj tah", en: "wait your turn" },
        { cs: "starat se o", en: "care about" },
        { cs: "být obyčejný", en: "common" },
        { cs: "vysvětlit", en: "explain" },
        { cs: "vysvětlit někomu něco", en: "explain something to someone" },
        { cs: "držet někoho čekajícího", en: "keep someone waiting" },

        // 8.6 Other
        { cs: "každý", en: "everybody" },
        { cs: "jet na kole", en: "ride a bicycle" }
    ],
    "cs-de": [
        { cs: "Dům", de: "Haus" },
        { cs: "Kočka", de: "Katze" },
        { cs: "Auto", de: "Auto" }
    ]
};