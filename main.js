// TJC - April Shop | Copyright TJC-Team 2021 //

/* Kurzer Disclaimer bevor der Spaß hier losgeht:
Diese Idee kam uns um 3 Uhr nachts im (überfüllten) Talk. Da wir für ein eintägiges Event keinen eigenen Backendserver aufsetzen wollten,
haben wir (bzw ich, hi, carsten mein name) das ganze per JS im Front-End geschrieben. Bevor ihr euch im Support versucht durch eine Abwertende Redung über diesen
Code initiativ als Developer zu bewerben, denkt bitte daran dass wir dieses Projekt zum <strong>SPAß</strong> geschrieben haben. Und nun, viel Spaß dabei meinen Code zu stalken! */


// Pre-Defined
var d = document;
var w = window;

let id = (element) => {
    return document.getElementById(element);
}

let setAttributes = (...args) => {
    // Auf diese Idee bin ich erst gekommen, kurz bevor ich fertig war. deshalb sind einige Sachen noch hardcoded.
    let el = document.createElement(args[0])
    var l = args.length;
    for (var i = 1; i < l; i++) {
        if (i % 2 != 0) {
            // Even
            var attribute = args[i];
        } else {
            // Odd
            var values = args[i];
            el.setAttribute(attribute, values);
        }
    }
    return el;
}

/* 
let checkCookies = () => {
    if (!(getCookie("consent") === "true")) {
        // Wenn Cookieerlaubnis nicht da ist
            var div = setAttributes("div", "class", "modal fade", "id", "cookieModal", "tabindex", "-1", "role", "dialog");
            var div1 = setAttributes("div", "class", "modal-dialog", "role", "document");
            var div2 = setAttributes("div", "class", "modal-content");
            var div3 = setAttributes("div", "class", "modal-body");
            var div4 = setAttributes("div", "class", "notice d-flex justify-content-between align-items-center");
            var div5 = setAttributes("div", "class", "cookie-text");
                div5.innerHTML = "Wir Nutzen Cookies bla bla bla";
            var div6 = setAttributes("div", "class", "buttons d-flex flex-column flex-lg-row");
            var a1 = setAttributes("a", "id", "accept", "class", "btn btn-success btn-sm", "data-dismiss", "modal");
                a1.innerHTML = "Okay!";
            var a2 = setAttributes("a", "id", "accept", "class", "btn btn-secondary btn-sm", "data-dismiss", "modal");
                a2.innerHTML = "Mehr...";
            
            div6.appendChild(a1);
            div6.appendChild(a2);
            div5.appendChild(div6);
            div4.appendChild(div5);
            div3.appendChild(div4);
            div2.appendChild(div3);
            div1.appendChild(div2);
            div.appendChild(div1);
            document.body.appendChild(div);
            $('#cookieModal').modal('show');

    }
}
*/




// Produkte per Array

var products = {
    "total": 20,
    "tjcplus": {
        0: {
            price: [4.99, 6.99]
        },
        1: {
            price: [9.99, 13.99]
        },
        2: {
            price: [19.99, 24.99]
        }
    },
    0: {
        "name": "Anti-Mute-Karte",
        "description": "Kennen Sie das auch? Sie benehmen sich wie der letze Horst und werden gemuted? Dieses Problem ist von nun an nicht mehr! Spielen Sie diese Karte aus, und Sie werden sofort entmuted!",
        "images": {
            0: "../images/products/unmute-karte/330x186.png" // Großes Preview
        },
        "ratings": {
            "total": 2,
            0: {
                "stars": 5,
                "name": "geht dich nix an!",
                "text": "Das Team kann mich mal! Ha! Mit dieser Karte kann ich strafen ganz einfach umgehen, und meine Invitelinks rumschicken!"
            },
            1: {
                "stars": 1,
                "name": "Josef Heinrich",
                "text": "Wer hat den Scheiß eingeführt?"
            }
        },
        "preis": 19.99,
        "sale": [true, 14.99],
        "copy": "Idee & Umsetzung: TJC-Team <br> Originalbild von Hasbro"
    },
    1: {
        "name": "Redstone auf Klinke",
        "description": "Lästige Techniken mit Redstone zu verbinden muss nun nicht mehr sein! Ob Notenblöcke, Kolben oder andere Techniken - verbinden Sie doch mit Klinke!",
        "images": {
            0: "../images/products/redstone-auf-klinke/330x330.png" // Großes Preview
        },
        "ratings": {
            "total": 3,
            0: {
                "stars": 3,
                "name": "Hans Wurst",
                "text": "Kabel funktioniert, bricht aber schnell durch."
            },
            1: {
                "stars": 4,
                "name": "Anonym",
                "text": "Wenn man nach einem Kabel sucht, welches mehr aushält als ein wenig Staub, ist hier richig! Leider nur etwas teuer."
            },
            2: {
                "stars": 5,
                "name": "Anonym",
                "text": null,
            }
        },
        "preis": 29.99,
        "sale": [false, 0],
        "copy": "Idee & Umsetzung: TJC-Team. Inspiriert von Traumshop.net"

    },
    2: {
        "name": "Shift-Taste",
        "description": "Während moderne Tastaturen bereits mehrere davon haben, gibt es hier einen Ersatz für ewig Gestrige! USB Plug and Play!",
        "images": {
            0: "../images/products/shift/330x330.png" // Großes Preview
        },
        "ratings": {
            "total": 4,
            0: {
                "stars": 1,
                "name": "xXGamer_SchorschXx",
                "text": "DAS IST ABZOCKE; DIE TASTE BLEIBT BEI ÖFTERER BENUTZUNG IMMER KLEMMEN: NICHT ZU EMPFEHLEN!!"
            },
            1: {
                "stars": 2,
                "name": "kühler_stein42",
                "text": "Der Tastendruck fühlt sich sehr schön an, nur leider sehe ich keine RGB-Effekte. Diese fehlenden Effekte beeinträchtigen meine FPS erheblich, welche für diverse Computerspiele von Nöten sind! Ich wäre bereit mehr zu zahlen, sollte sich dieses Problem behoben haben."
            },
            2: {
                "stars": 1,
                "name": "Anonym",
                "text": "Schlechte Verarbeitung! Nach nur 2 angeschauten Josef-Tutorials ist sie zur Matschepampe geworden! Wasserfest ist sie auch nicht..."
            },
            3: {
                "stars": 5,
                "name": "Motz",
                "text": "ICH KANN GAR NICHT MEHR GENUG VON DIESER TOLLEN TASTE KRIEGEN!!! % STERNE!"
            }
        },
        "preis": 12.99,
        "sale": [false, 0],
        "copy": "Umsetzung: TJC-Team. Foto: Unsplash. Danke an Nono für die Idee!"

    },
    3: {
        "name": "MineKart Vollversion",
        "description": "Ja, ich bin ehrlich zu euch. MineKart nicht fertig zu stellen, war eine geniale Idee! Genauer gesagt, ehr eine Art Promo-Move! Na dann, hier gibt es die Vollversion mit euren Maps!",
        "images": {
            0: "../images/products/minekart/330x.jpg"
        },
        "ratings": {
            "total": 2,
            0: {
                "stars": 5,
                "name": "Nils | Schlabananudel",
                "text": "ICH WUSSTE ES! DIESES PROJEKT WURDE INSGEHEIM WEITERENTWICKELT! HYPE!"
            },
            1: {
                "stars": 1,
                "name": "Anonym",
                "text": "Dieses Projekt hinter den Zuschauern weiter zu entwickeln ist unter aller Sau. Ich spiel lieber Fortnite."
            }
        },
        "preis": 9.99,
        "sale": [true, 8.99],
        "copy": "Umsetzung: TJC-Team. Danke an Josef persönlich für die Idee! Außerdem hat uns mjt01 ebenfalls bei der Idee geholfen."
    },
    4: {
        "name": "RickRoll per Post",
        "description": "Nervt es Sie auch so, ständig im Internet von anderen Menschen einen RickRoll verpasst zu bekommen? Dieses Problem schaffen wir heute aus der Welt! Selbst wenn ihr Strom ausfallen sollte, können Sie hiermit die Nerven ihrer Freunde auf ein Maximum treiben. Versenden Sie nun auch RickRolls... per Post!",
        "images": {
            0: "../../images/products/rickperpost/330x330.png",
            1: "../../images/products/rickperpost/972x972.png",
            2: "../../images/products/rickperpost/full.png"
        },
        "ratings": {
            "total": 2,
            0: {
                "stars": 5,
                "name": "Josef Heinrich",
                "text": "Dieses Produkt ist genial! Wusstet ihr, dass es zwischen mir und Carsten schon 42:2 steht? Eine Livereaktion von ihm könnt ihr hier sehen: <br> <i>Der Kunde hat einen Link angehängt. Klicken Sie <a href='../../outback.html?r=rating_014tgb3d0v2bnsfoebf2893r' target='_blank'> HIER </a>, um diesen anzusehen.",
            },
            1: {
                "stars": 2,
                "name": "Carsten",
                "text": "Ganz nett, nur dumm wenn der Empfänger so tut als hätte er die Briefe nie bekommen. "
            }
        },
        "preis": 19.66,
        "sale": [true, 6.02],
        "copy": "Umsetzung und Idee: TJC-Team. <br> Bildquellen: https://bit.ly/3kV9A6y <br> https://bit.ly/38htIum "
    },
    5: {
        "name": "NoPushToTalk-Free-Card",
        "description": "Talktimes sind immer etwas besonderes! Besonders, wenn man mal selbst die Chance hat, mit Josef zu reden. Nur leider ist dies oft nicht möglich, da viel zu viele Nutzer im Talk sind. Mit dieser Karte bekommen Sie einmalig PushToTalk-Rechte, und können so durchgehend in Ihr Mikrofon 'THEJOCRAFT' schreien, bis wir Sie bannen!",
        "images": {
            0: "../../images/products/ptt/330.png",
            1: "../../images/products/ptt/full.png",
        },
        "ratings": {
            "total": 1,
            0: {
                "stars": 5,
                "name": "Wehbba",
                "text": null
            }
        },
        "preis": 9.99,
        "sale": [true, 4.99],
        "copy": "Umsetzung und Idee: Wehbba. Vielen Dank für deine Hilfe!"
    },
    6: {
        "name": "Die BannCard",
        "description": "Sie haben mal wieder DM-Werbung von irgendeinem Random Nutzer bekommen? Jemand nervt Sie mal wieder im Chat? Oder wollen Sie einfach mal anderen die Macht des Kindes eines Discord-Entwicklers zeigen? Kein Problem mit der BannCard 25 und der BannCard 50! Einfach die BannCard gezückt und mit einem Rabatt von 25% / 50% den Nutzer aus dem TJC-Netzwerk gebannt. Das Beste: Die BannCards gelten für genau ein Jahr, indem Sie mit der Reduzierung beliebig viele Nutzer bannen lassen können. <br><sub>Der Bann ist nicht im Preis enthalten und zu einem Preis von 750.000.000 <i class='fas fa-coins'></i> zzgl. MWSt. ausführbar.</sub>",
        "images": {
            0: "../../images/products/banncard/330x.png",
            1: "../../images/products/banncard/full.png"
        },
        "ratings": {
            "total": 1,
            0: {
                "stars": 2,
                "name": "Yasu",
                "text": "Endlich konnte ich diese nervigen DM-Werber loswerden, nur leider hat sich irgendein Moderator gedacht es wäre eine gute Idee Josef wieder zu entbannen, nachdem ich so viel für den Bann gezahlt habe..."
            }
        },
        "preis": 750.000,
        "sale": [false, 0],
        "copy": "Umsetzung und Idee: Yasu. Vielen Dank für deine Hilfe!"
    },
    7: {
        "name": "5-Minuten-Freundschaft",
        "description": "Sie suchen etwas, um mal wieder richtig bei ihren Freunden angeben zu können? Dann haben wir genau das richtige für Sie! Für 5 Minuten können Sie Josef persönlich in ihre Freundesliste hinzufügen! <br><sub>Keine Garantie dass alle Nachrichten gelesen werden</sub>",
        "images": {
            0: "../../images/products/5minF/330x.png"
        },
        "ratings": {
            "total": 2,
            0: {
                "stars": 1,
                "name": "xX_Itz_Deine_Mami_LP_HD_YT_Xx",
                "text": "DER LIEST NICHTS WAS MAN IHM SCHREIBT DAS IST TOTALER BESCHISS AUF KEINEN FALL KAUFEN!!!!!"
            },
            1: {
                "stars": 3,
                "name": "Anonym",
                "text": null
            }
        },
        "preis": 42.69,
        "sale": [true, 42.68],
        "copy": "Bild: TJC-Team, Unsplash. Idee: Yasu. Vielen Dank für deine Hilfe!"
    },
    8: {
        "name": "KIDDY STUMMINATOR 3000",
        "description": "Kennen Sie das auch, ein hörbar junger Nutzer betritt Ihren Sprachkanal und hat erneut den Zweck der Unterhaltung mit Göbbels Volksrede verwechselt und schreit nun mit ähnlicher Lautstärke in ein ähnlich gutes Mikrofon? Dann haben wir jetzt die Lösung für Sie: Der KIDDY STUMMINATOR 3000! Mit nur einem Klick machen Sie andere Nutzer stummer als Regierungsoppositionisten in Russland.",
        "images": {
            0: "../../images/products/stumminator/01.png"
        },
        "ratings": {
            "total": 2,
            0: {
                "stars": 5,
                "name": "Anonym",
                "text": "nice"
            },
            1: {
                "stars": 0,
                "name": "<i>Vom Seitenadministrator stummgeschaltet</i>",
                "text": null
            }
        },
        "preis": 5.01,
        "sale": [false, 0],
        "copy": "Umsetzung und Idee: Fabian. Vielen Dank für deine Hilfe!"
    },
    9: {
        "name": "Wasserfestes Redstone",
        "description": "Sie sind es satt, dass ihre Technik immer wieder durch Wasser zerstört wird und sie immer wieder alles neu aufbauen müssen? Ja, dann haben wir hier genau das richtige für Sie!",
        "images": {
            0: "../../images/products/wasserfestesredstone/330x330.png" // Idee: Redstone in Tüte
        },
        "ratings": {
            "total": 2,
            0: {
                "stars": 4,
                "name": "Josef Heinrich",
                "text": "Super dieses Zeug! Endlich kann ich auch mal wieder einen Wassereimer über die Technik kippen und nichts geht kaputt! 4 Sterne, weil leider kein Creeper-Schutz mit inbegriffen ist."
            },
            1: {
                "stars": 1,
                "name": "Troller1234",
                "text": "Bitte vom Markt nehmen. Wir können Jo nicht mehr trollen."
            }
        },
        "preis": 9.99,
        "sale": [true, 8.00],
        "copy": "Bilder: Metro. Umsetzung: TJC-Team. Idee: Luca. Vielen Dank für deine Hilfe!"
    },
    10: {
        "name": "Der RickBlocker™",
        "description": "Sie haben genug von den nervtötenden Rickrolls in ihrem Alltag? Wir haben jetzt die perfekte Lösung für Sie! Mit dem RickBlocker™ können Sie sich jetzt ganz bequem die mit dem Link verknüpfte Website anzeigen lassen. Das Ganze nur für 6,02  <i class='fas fa-coins'></i> erhältlich überall solange der Vorrat reicht. Wenn Sie sich selbst von der Notwendigkeit des RickBlocker™ überzeugen wollen, haben wir einen Link zu einem Video mit weiterführenden Produktinformationen für Sie erstellt: <a href='https://www.youtube.com/watch?v=xvFZjo5PgG0' target='_blank'>https://www.youtube.com/watch?v=xvFZjo5PgG0</a>",
        "images": {
            0: "../../images/products/rickblock/330x330.png"
        },
        "ratings": {
            "total": 3,
            0: {
                "stars": 1,
                "name": "anonymer_admin",
                "text": "Na toll, seit ich den RickBlocker™ nutze, werde ich gegen 2 Uhr nachts aus dem Schlaf gerissen und im Talk gerickrolled. Auf keinen Fall kaufen!"
            },
            1: {
                "stars": 2,
                "name": "wyldpörkmeddl",
                "text": "Freunde haben mir das Produkt empfohlen. Es funktioniert einwandfrei wie beschrieben. Leider gibt es noch kein Add on zum Kopf einschalten. Nachdem ich durch das naive Klicken auf mir zugesendete Links auch ohne Vorschau bereits des öfteren gerickrolled wurde, habe ich das Produkt zurückgegeben."
            },
            2: {
                "stars": 5,
                "name": "xX_MegaSpeziell_Xx",
                "text": "Der RickBlocker™ hat mein Leben verändert! Da ich jetzt nur noch Links mit unverdächtiger Vorschau vertraue, schaffe ich es komplett Rickroll frei zu bleiben. Definitiv ein must have!"
            }
        },
        "preis": 6.02,
        "sale": [false, 0],
        "copy": "Bilder: Kisspng, SHOUTS. Umsetzung: TJC-Team. Idee: wildparkmaedel. Vielen Dank für deine Hilfe!"
    },
    11: {
        "name": "StreamerKit mit Stil ℮",
        "description": "Es ist kurz vor 18 Uhr und Sie verspüren schon ein leichtes Jucken in den Augen, Sie bekommen merklich weniger Luft und ein rötlicher Ausschlag bahnt sich an? Dann leiden Sie auch an der Ping Allergie, doch damit ist jetzt Schluss! Dank dem StreamerKit mit Stil ℮ gehören diese Qualen jetzt der Vergangenheit an. Mit nur einem Klick kurz vor dem Streamstart, können Sie ganz praktisch alle Töne deaktivieren und für gerade einmal 17,59  <i class='fas fa-coins'></i> die Stille genießen.",
        "images": {
            0: "../../images/products/streamkit/330x.jpg"
        },
        "ratings": {
            "total": 2,
            0: {
                "stars": 5,
                "name": "Superstreamer0815",
                "text": "Seit ich das StreamerKit mit Stil ℮ regelmäßig nutze, muss ich mich nicht mehr über Pings während meines Streams auf meinem Discord Server ärgern. Definitiv eine Bereicherung für jeden Streamer!"
            },
            1: {
                "stars": 5,
                "name": "Besserwisser_HD",
                "text": "Top Produkt, ausnahmslos empfehlenswert! Besonders gut gefällt mir als Zuschauer, dass auch die Voice Call Töne unterdrückt werden und ich nicht jedes Mal denke, selbst angerufen zu werden."
            }
        },
        "preis": 17.59,
        "sale": [false, 0],
        "copy": "Umsetzung und Idee: wildparkmaedel. Vielen Dank für deine Hilfe!"
    },
    12: {
        "name": "TJC-Tinder",
        "description": "Sie fühlen sich einsam zu Zeiten von Corona und sehnen sich nach einem festen Partner oder einer virtuellen Beziehung? Da haben wir genau das Richtige für Sie! Mit TJC Tinder.net können Sie sich ganz entspannt online kennenlernen, wahlweise bekommen Sie mit unserem Fast Lane Angebot ohne große Wartezeit unkompliziert live einen durch Dritte zufällig ausgesuchten Partner zugesprochen. Schon ab 4,99  <i class='fas fa-coins'></i> monatlich können Sie heute noch eine Mitgliedschaft abschließen.",
        "images": {
            0: "../../images/products/tinder/330x.png"
        },
        "ratings": {
            "total": 3,
            0: {
                "stars": 5,
                "name": "SuperDev4321",
                "text": "Bisher war ich nicht sehr erfolgreich bei der Partnersuche aber TJC Tinder.net hat es möglich gemacht!"
            },
            1: {
                "stars": 4,
                "name": "Laura",
                "text": "Nach einem unfreiwilligen Probemonat des Fast Lane Angebots kann ich nur sagen, dass da wohl eine folgenreiche Fehleinschätzung unterlaufen ist. Er schien zwar sehr nett, hatte aber bereits eine Freundin. Wem die Außenwirkung allerdings wichtiger ist, diese war dennoch sehr effektiv und überzeugend. Das Kennenlern Programm war dafür aber umso erfolgreicher und ist daher absolut empfehlenswert!"
            },
            2: {
                "stars": 1,
                "name": "ich_bin_wichtig_yt",
                "text": "TJC Tinder.net war für mich eine Enttäuschung auf ganzer Linie. Es wirkte anfangs vielversprechend, dann distanzierte sie sich aber und hat jetzt auch noch einen Anderen über dieses Programm gefunden. Wie kann sowas bitte passieren?!?"
            }
        },
        "preis": "ab " + 4.99,
        "sale": [false, 0],
        "copy": "Umsetzung und Idee: MrSpecialFX. Vielen Dank für deine Hilfe!"
    },
    13: {
        "name": "Spoiler",
        "description": "Werde jetzt zu den neusten TJC-Projekten gespoilert, ganz gratis für nur 29.99 <i class='fas fa-coins'></i>!<br><sub>PS: Ironman stirbt.</sub>",
        "images": {
            0: "../../images/products/spoiler/01.jpg"
        },
        "ratings": {
            "total": 1,
            0: {
                "stars": 5,
                "name": "Ich-Spoiler-Dich",
                "text": "Hopper hat überlebt, Flynn ist nicht der Böse, Nina Myers ist die Böse, Michael Scofield ist nicht tot, Ray Monroe hat seine Frau und Tochter ermordet, T-Bag hat einen Sohn, Reddington ist nicht Reddington, Chicago ist nur ein soziales Experiment, Toni Almeida ist böse. Dann nicht mehr, und dann wieder. Ray Breslin ist auf einem Schiff gefangen, Sarah ist nicht tot, "
            }
        },
        "preis": "ab " + 4.99,
        "sale": [false, 0],
        "copy": "Bild: Amazon <br> Umsetzung und Idee: mos lo mos. Ironman stirbt."
    },
    14: {
        "name": "Lebensgroßer TheJoCraft®️-Pappaufsteller™️",
        "description": "Haben Sie auch keine Freunde? Hat Ihre Familie Sie schon verlassen? Fühlen Sie sich ebenfalls immer so einsam und allein gelassen? Sehnen Sie sich vergeblich nach einem unerschütterlichen Freund, der Ihnen immer zur Seite steht? DAMIT IST JETZT SCHLUSS! Denn WIR haben DIE LÖSUNG! Kaufen Sie jetzt den neuen TheJoCraft®️-Pappaufsteller™️ - In lebensgroß! Abgebildet ist der international bekannte Influenzer TheJoCraft - eine Persönlichkeit, mit der Sie leicht emotionale Bindungen aufbauen können!<br><br><ul id='special-id-for-zhyrd'><li>- Dank unserer innovativen Aufstell-Technologie ist das Stehenbleiben garantiert! Sie können ihn also auch auf besonders unebenen Boden aufstellen!</li><li>- Auch draußen ist der TheJoCraft®️-Pappaufsteller™️ nicht verkehrt: Er ist wasserdicht! Regen, Sturm und sonstiges Unwetter kann Pappe und Tinte nichts anhaben! Ist das nicht absolut kaufenswert?</li><li>- Es wird dafür gesorgt, dass nur klima- und umweltneutrale Stoffe für unsere Produkte verwendet werden. Unsere Pappe besteht zum Beispiel ausschließlich aus dem unzertifizierten, seltenen Tropenholz aus den bedrohten Urwäldern Südamerikas, von unterbezahlten Holzfällern rücksichtslos abgeholzt und von ausgebeuteten Kinderarbeitern verarbeitet! Sie brauchen sich also keine Gedanken machen! Dem Kauf steht nichts mehr im Wege!</li><li>- Sie hängen zu sehr an dem TheJoCraft®️-Pappaufsteller™️ und wollen ihn am liebsten überall mit hinnehmen? Dann ist vielleicht der neue Miniatur-TheJoCraft®️-Pappaufsteller™️-To-Go inklusive TheJoCraft®️-Tragetasche das Richtige für Sie! Mehr Informationen unter www.thejocraft-pappaufsteller.de</li></ul><br> Warum zögern Sie noch? Schlagen Sie zu! Bald wird der TheJoCraft®️-Pappaufsteller™️ nicht mehr verfügbar sein!",
        "images": {
            0: "../../images/products/pappaufsteller/330x.png",
            1: "../../images/products/pappaufsteller/full.png"
        },
        "ratings": {
            "total": 3,
            0: {
                "stars": 5,
                "name": "TheJoCraftFanboy42",
                "text": "DER BESTE KAUF MEINES LEBENS! Das letzte Stück meiner TheJoCraft-Sammlung ist gestern angekommen! Der Pappaufsteller steht wenn ich schlafe direkt neben mir, neben der TheJoCraft-Zimmerpflanze macht er sich echt gut! Jetzt habe ich nicht nur eine TheJoCraft-Bettdecke, ein TheJoCraft-Kopfkissen, dreißig TheJoCraft-Wandposter, einen TheJoCraft-Teppich und eine TheJoCraft-Schreibtischunterlage, sondern auch einen lebensgroßen TheJoCraft-Pappaufsteller! Ich überlege mir, gleich fünfzig weitere Pappaufsteller zu kaufen, dann kann ich mir endlich meine eigene TheJoCraft-Armee zusammenstellen! Ein Lebenstraum!"
            },
            1: {
                "stars": 5,
                "name": "Anonym",
                "text": "Endlich habe ich einen Freund, jetzt fühle ich mich nicht mehr so alleine. Wenn ich auf meinem Bett liege kann ich dem Pappaufsteller direkt in die Augen schauen, und das macht mir gar keine Angst, ich fühle mich überhaupt nicht beobachtet. So kann ich viel besser einschlafen. Ich weiß zwar nicht, warum der Darsteller einen Ziegelstein in der Hand hält, aber das stört mich nicht. Danke für dieses tolle Produkt."
            },
            2: {
                "stars": 1,
                "name": "ILoveYouBob",
                "text": "FEHLKAUF! ICH RATE ALLEN DAVON AB, DIESES PRODUKT ZU KAUFEN! Trotz den Informationen, die in der Produkt-Beschreibung angegeben wurden, lässt sich der Aufsteller kaum hinstellen! Er kippt sofort um! UND DAFÜR HABE ICH MEINE 110€ HINGEBLÄTTERT! ICH VERLANGE EINE RÜCKERSTATTUNG ODER ICH ZEIGE SIE AN! Ich bin zutiefst enttäuscht. Dabei wollte ich mit ihm meinem Sohn Bob eine Überraschung machen! Na ja, wenigstens lässt sich der TheJoCraft-Pappaufsteller immer noch als Bastelpappe verwenden und ich kann meine Wut daran auslassen, deshalb der halbe Stern."
            }
        },
        "preis": 109.99,
        "sale": [false, 0],
        "copy": "Idee und Umsetzung: Zhyrd. Vielen Dank für deine Hilfe (und die geniale Idee)."
    },
    15: {
        "name": "TJC-Soundkarte",
        "description": "Die Stimmen von Schauspielern in Filmen oder deiner Lehrer im Onlineunterricht sind fad und eintönig? Mit dieser von uns speziell angefertigten Soundkarte kannst du jede Stimme durch Josefs Stimme ersetzen! Für dich hört es so an als würde Josef dein Mathematikunterricht halten und du musst nicht mal warten, bis er wirklich Lehrer ist. Außerdem kannst du mit der Mikrofoneingabe deine Freunde mit deiner neuen Stimme begeistern!<br>Pro Version: 420€ | Nur die Pro-Version hat noch zusätzlich einen Übersetzer damit auch Deutsche unsere billigen österreichischen Supporter im Talk verstehen können.",
        "images": {
            0: "../../images/products/soundkarte/330x.png"
        },
        "ratings": {
            "total": 3,
            0: {
                "stars": 5,
                "name": "<i>Benutzer wurde gesperrt</i>",
                "text": "Das is ja ur toll, jetzt kann ich endlich die Schauspieler auf meiner Lieblingsinternetseite Po* mit Josefs Stimme hören!!!"
            },
            1: {
                "stars": 5,
                "name": "MoinMaierYT",
                "text": "Ich habe die Pro-Version aber die muss kaputt sein. Voll doff Alter. Ich kann jetzt zwar die Supporter verstehen aber die Übersetzung scheint falsch zu sein. Aus keine Ahnung was er sagt ich verstehe es ja nicht, wird immer was in die Richtung „Du bist so ein dummer Piefke“. Das letzte Wort wurde anscheinend nicht mal übersetzt. Was bedeutet das?"
            },
            2: {
                "stars": 1,
                "name": "TheJoCraft",
                "text": "Lieber Fabi, ich habe die Soundkarte bei meiner letzten YouTube Aufnahme getestet. Habe aber keinen Unterschied herausgehört. Das ist ein kompletter Dreck; wir verkaufens aber bitte trotzdem. LG Josef <br>Ps: bitte lösch diese Rezension, soll ja niemand wissen"
            }
        },
        "preis": 420.99,
        "sale": [true, 275.99],
        "copy": "Idee und Umsetzung: Flo. Vielen Dank für deine Hilfe (und die geniale Idee)."
    },
    16: {
        "name": "sliveBot SourceCode",
        "description": "Du möchtest selber in deinen Bot die Benachrichtigung einbauen, wenn ein Streamer live geht möchtest dafür aber nicht den sliveBot benutzen, dann wird dir dieses Produkt sicher gefallen, heute im Sonderangebot gibt es den Botcode sogar um 50% erniedrigt, so kannst du den Bot nach deinen Belieben erweitern. Für einen Aufpreis von 20€ gibts auch noch das Ticketsystem vom TJCBot dazu.",
        "images": {
            0: "../../images/products/slive/smol.png"
        },
        "ratings": {
            "total": 3,
            0: {
                "stars": 5,
                "name": "Faker532",
                "text": "Super! Nun kann ich endlich den Code den andere mühevoll geschrieben haben für mich selber nutzen und vor meinen Freunden damit angeben!"
            },
            1: {
                "stars": 1,
                "name": "Luca",
                "text": "Wer hatte diese bescheuerte Idee? Könnt ihr euch vorstellen wie lange wir daran gesessen haben?"
            },
            2: {
                "stars": 5,
                "name": "Gamer5321",
                "text": "Hah endlich hab ich den SourceKot vom Ticketbot jetzt habt ihr es doch nicht hinbekommen den Code mir nicht zu geben, LubLp und Natro ihr könnt halt nichts"
            }
        },
        "preis": 840.99,
        "sale": [true, 499.99],
        "copy": "Idee und Umsetzung: Luca. Vielen Dank für deine Hilfe (und den Code)."
    },
    17: {
        "name": "Pixelnator",
        "description": "Wussten Sie, dass Sie gerade telefonieren und die 42 Bildschirmübertragung zu viel Internet beansprucht? Verwenden Sie jetzt Pixelnator! Pixelnator pixeliert alle Bildschirmübertragungen, sodass Sie Ihre Internetnutzung speichern und nichts sehen können!",
        "images": {
            0: "../../images/products/pixelnator/330x1.png"
        },
        "ratings": {
            "total": 2,
            0: {
                "stars": 5,
                "name": "Der Berauschte",
                "text": "Danke, damit kann ich jetzt endlich auch mit Mobilen Daten Bildschirmübertragungen ansehen, ohne dass ich viel Internet verbrauche."
            },
            1: {
                "stars": 1,
                "name": "Der Dummkopf",
                "text": "Hööhh, man kan nichts mer lesen, dass produkt funcktioniert nicht."
            }
        },
        "preis": 0.99,
        "sale": [false, 0],
        "copy": "Idee und Umsetzung: Ari. Vielen Dank für deine Hilfe."
    },
    18: {
        "name": "Minecraft - Pädagogisch wertvoll?",
        "description": "Sie ist es! Die Facharbeit, welche damals die Welt Freude versetzte. Sie wollen Ihre Eltern von Minecraft überzeugen? Dann haben wir das richtige Produkt für Sie! Eine exklusive Facharbeit, welche den pädagogischen Charakter von Minecraft unter die Lupe nimmt.",
        "images": {
            0: "../../images/products/facharbeit/330x.png"
        },
        "ratings": {
            "total": 1,
            0: {
                "stars": 5,
                "name": "Anonym",
                "text": "MEINE ELTERN HABEN MIR MINECRAFT GEKAUFT JAAAAAHAHAHAHAHAHA DANKEEEEEE."
            }
        },
        "preis": 14.60,
        "sale": [false, 0],
        "copy": "Idee und Umsetzung: Flo. Vielen Dank für deine Hilfe."
    },
    19: {
        "name": "Shift! - Der Podcast",
        "description": 'Unterbrochen wird der Spaß von unpassenden und unlustigen Einspielern von diversen YouTuber-Kollegen, abgespielt von Josefs Soundboard um sich selbst Freunde vorzugaukeln; deplatzierten und völlig übernutzten Rick Rolls; sowie peinlicher Stille, nachdem Josef wieder als einziger über seine eigenen Witze gelacht hat. Eine melancholische Reise durch das bemitleidenswerte Leben von TheJoCraft. Fremdscham und Augenverdrehen garantiert. Erhältlich auf allen Streamingplattformen.',
        "images": {
            0: "../../images/products/podcast/330x.png"
        },
        "ratings": {
            "total": 1,
            0: {
                "stars": 5,
                "name": "Anonym",
                "text": "Dieser Podcast ist das was mir im Leben gefehlt hat. 11/10."
            }
        },
        "preis": 7.99 + "/Monat",
        "sale": [false, 0],
        "copy": "Idee und Umsetzung: Zhyrd. Vielen Dank für deine Hilfe."
    }
}

function makeid(length) {
    var result = '';
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}



let splitStringToArray = (string, split) => {
    return string.split(split);
}


const Toast = Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 4000,
    timerProgressBar: true,
    didOpen: (toast) => {
        toast.addEventListener('mouseenter', Swal.stopTimer)
        toast.addEventListener('mouseleave', Swal.resumeTimer)
    }
})

// Generiert einen HTML-String, jenachdem ob ein Produkt im Angebot ist

let calculateHomePrice = (produkt, e) => {
    if (produkt[e].sale[0] === true) {
        return "<del>" + produkt[e].preis + "</del> <strong class='price-text' style='color: red;'>" + produkt[e].sale[1] + " <i class='fas fa-coins'></i></strong>";
    } else return "<strong class='price-text'>" + produkt[e].preis + " <i class='fas fa-coins'></i></strong>";
}

// Definiert e basierend auf den Produkten

let eRnd = () => {
    return Math.floor(Math.random(1) * products.total) + 1;
}

let checkifEqual = (e) => {
    if (e[0] === e[1] || e[0] === e[2] || e[1] === e[2]) {
        return false;
    } else return true;
}

let generateRandomProductsHome = () => {
    var e = [];
    for (i = 0; i < 3; i++) {
        e.push(Math.floor(Math.random(1) * products.total));
    }
    if (!(checkifEqual(e) === true)) {
        e = null;
        generateRandomProductsHome();
    } else {
        sessionStorage.setItem('tjcm_promoted_product01', e[0])
        sessionStorage.setItem('tjcm_promoted_product02', e[1])
        sessionStorage.setItem('tjcm_promoted_product03', e[2])
    }
}

// Generiert die Produkte auf der Startseite


let generateHomeItems = () => {
    generateRandomProductsHome();
    if (products) {
        for (var i = 0; i < 3; i++) {
            var e = [];
            e.push(sessionStorage.getItem('tjcm_promoted_product01'));
            e.push(sessionStorage.getItem('tjcm_promoted_product02'));
            e.push(sessionStorage.getItem('tjcm_promoted_product03'));
        }
        var p = []
        for (var i = 0; i < 3; i++) {
            var div = d.createElement("div");
            div.setAttribute("class", "col-xl-4 col-lg-4 col-md-6 col-sm-12");
            var div2 = d.createElement("div");
            div2.setAttribute("class", "sport_product");
            var figure = d.createElement("figure");
            var img = d.createElement("img");
            var i1 = e[i]
            img.setAttribute("src", products[i1].images[0]);
            var h3 = d.createElement("h3");
            h3.innerHTML = calculateHomePrice(products, [e[i]]);
            var h4 = d.createElement("h4");
            h4.innerHTML = products[e[i]].name;
            figure.appendChild(img);
            div2.appendChild(figure);
            div2.appendChild(h3);
            div2.appendChild(h4)
            div.appendChild(div2);
            div.setAttribute("id", e[i]);
            div.setAttribute("style", "cursor: pointer;");
            d.getElementById("col-list-merger").appendChild(div);
            div.addEventListener("click", function() {
                window.location.href = "../../product.html?product=" + this.getAttribute("id");
            })
        }
    }
}


// Toggle Payment Interval
if (document.getElementById("payment_interval_switch")) {
    var yearly = true;
    document.getElementById("payment_interval_switch").addEventListener("click", function() {
        if (yearly === true) {
            // UNCHECKED 
            id("price_1").innerHTML = products.tjcplus[0].price[1] + " <i class='fas fa-coins'></i>";
            id("price_2").innerHTML = products.tjcplus[1].price[1] + " <i class='fas fa-coins'></i>";
            id("price_3").innerHTML = products.tjcplus[2].price[1] + " <i class='fas fa-coins'></i>";
            id("value1").innerHTML = "bis zu 20% höher";
            $('#term_monthly').addClass("active_term");
            $('#term_yearly').removeClass("active_term");
            yearly = false;
        } else {
            id("price_1").innerHTML = products.tjcplus[0].price[0] + " <i class='fas fa-coins'></i>";
            id("price_2").innerHTML = products.tjcplus[1].price[0] + " <i class='fas fa-coins'></i>";
            id("price_3").innerHTML = products.tjcplus[2].price[0] + " <i class='fas fa-coins'></i>";
            id("value1").innerHTML = "bis zu 50% höher";
            $('#term_monthly').removeClass("active_term");
            $('#term_yearly').addClass("active_term");
            yearly = true

        }
    })
}

// FOOTER-Change | Wechselt die Links zu den Kanälen.
if (document.getElementById("thejocraft_txt")) {
    document.getElementById("thejocraft_txt").addEventListener("click", function() {
        window.open("https://www.youtube.com/user/thejominecraft", "_blank");
        /*
        $('#links_team').animate({height: "0px"});
        setTimeout(() => {
            $('#links_team').css({display: "none"});
            $('#links_jo').velocity({height: "50px"});
        }, 1000); */
    })
}

// C O O K I E S //
// get cookies
function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

let generateProductList = () => {
    if (products) {
        for (var i = 0; i < products.total; i++) {
            var div = d.createElement("div");
            div.setAttribute("class", "col-xl-4 col-lg-4 col-md-6 col-sm-12");
            var div2 = d.createElement("div");
            div2.setAttribute("class", "sport_product");
            var figure = d.createElement("figure");
            var img = d.createElement("img");
            img.setAttribute("src", products[i].images[0]);
            var h3 = d.createElement("h3");
            console.log(i)
            h3.innerHTML = calculateHomePrice(products, i);
            var h4 = d.createElement("h4");
            h4.innerHTML = products[i].name;
            figure.appendChild(img);
            div2.appendChild(figure);
            div2.appendChild(h3);
            div2.appendChild(h4)
            div.appendChild(div2);
            div.setAttribute("id", i);
            div.setAttribute("style", "cursor: pointer;");
            d.getElementById("col-list-merger").appendChild(div);
            div.addEventListener("click", function() {
                window.location.href = "../../product.html?product=" + this.getAttribute("id");
            })

        }
    } else {
        // Wenn "products" (warum auch immer) nicht geladen werden kann
        var div = d.createElement("div");
        div.setAttribute("class", "col-xl-4 col-lg-4 col-md-6 col-sm-12");
        var div2 = d.createElement("div");
        div2.setAttribute("class", "sport_product");
        var figure = d.createElement("figure");
        var h3 = d.createElement("h3");
        h3.innerHTML = "Die Produkte wurden nicht geladen. Versuche diese Seite erneut zu laden!";
        var h4 = d.createElement("h4");
        h4.innerHTML = "Fehler beim Laden der Produkte!";
        div2.appendChild(figure);
        div2.appendChild(h3);
        div2.appendChild(h4)
        div.appendChild(div2);
        d.getElementById("col-list-merger").appendChild(div);

    }
}


// PRODUKTSEITE //

let setProductSite = () => {
    let res = window.location.search
    res = res.replace(/\?/g, '');
    var params = new URLSearchParams(res);
    if (params.has("product") === true) {
        var product = params.get("product");
        if (product > products.total) {
            window.location.href = "../../index.html?ref=404"
        }

        // BEWERTUNGEN
        var r = products[product].ratings;
        var total = r.total - 1

        for (var i = 0; i < r.total; i++) {
            var div = d.createElement("div");
            div.setAttribute("class", "carousel-item");
            if (i === 0) {
                div.setAttribute("class", "carousel-item active");
            }
            var div1 = d.createElement("div");
            div1.setAttribute("class", "titlepage");
            var div2 = d.createElement("div");
            div2.setAttribute("class", "john");
            var divRating = d.createElement("div");
            divRating.setAttribute("class", "john_image");
            divRating.setAttribute("id", "rating");
            console.log(i)
            for (var i1 = 0; i1 < r[i].stars; i1++) {
                var _i = d.createElement("i");
                _i.setAttribute("class", "fas fa-star checked");
                divRating.appendChild(_i);
            }
            if (!(r[i].stars === 5)) {
                var left = 5 - r[i].stars;
                for (var a = 0; a < left; a++) {
                    var _i = d.createElement("i");
                    _i.setAttribute("class", "fas fa-star");
                    divRating.appendChild(_i);
                }
            }
            var divName = d.createElement("div");
            divName.setAttribute("class", "john_text");
            divName.setAttribute("id", "name");
            divName.innerHTML = r[i].name;
            var p = d.createElement("p");
            p.setAttribute("class", "lorem_ipsum_text");
            p.setAttribute("id", "rating_text");
            if (r[i].text === "" || r[i].text === undefined || r[i].text === null) {
                p.innerHTML = "<i>Kunde hat keinen Text angegeben</i>";
            } else {
                p.innerHTML = r[i].text;

            }
            var divIcon = d.createElement("div");
            divIcon.setAttribute("class", "icon_image");
            var img = d.createElement("img");
            img.setAttribute("src", "images/icon-1.png");

            divIcon.appendChild(img);
            div2.appendChild(divRating);
            div2.appendChild(divName);
            div2.appendChild(p);
            div2.appendChild(divIcon);
            div1.appendChild(div2);
            div.appendChild(div1);
            document.getElementById("ratings-div").appendChild(div);

        }


        // PRODUKTINFORMATIONEN
        // Urheberrechtsangaben
        document.getElementById("cmodal_body").innerHTML = "Produkt: " + products[product].name + "<br>ID: " + product + "<br>" + products[product].copy;
        document.getElementById("product_img").setAttribute("src", products[product].images[0]);
        document.getElementById("produktname").innerHTML = products[product].name;
        document.getElementById("preis").innerHTML = calculateHomePrice(products, product);
        document.getElementById("description").innerHTML = products[product].description;
        document.title = "TJC | " + products[product].name;


        // IN DEN WARENKORB
        /*
        ! Dies ist eigentlich die funktion, welche dafür sorgt dass die Produkte in den Warenkorb gepackt werden. Wir haben uns aber dazu entschieden,
        ! dies weg zu lassen. Ein Warenkorb wäre verdammt umständlich, und wir hatten es hier sowieso nur auf einen Scherz abgesehen. Wer die verlorenen überbleibsel sehen möchte,
        ! kann diese unter basket.html bestaunen. 
        document.getElementById("addToBasket").addEventListener("click", function(){
            var done = false;
            var basketpre = getCookie("tjcm_basket_items")
            console.log(basketpre.length);
            if (basketpre.length == 0) {
                document.cookie = "tjcm_basket_items=" + product + "x1&; expires= Fri, 02 Apr 2021 00:00:00;";
            }
            // String: "idxtimes&idxtimes" | BSP: "0x1&3x4"
            var basketnr = getCookie("tjcm_basket_total");
            basketpre = splitStringToArray(basketpre, "&")
            basketpre.length = basketpre.length - 1;
            console.log(basketpre)
            for (var i = 0; i < basketpre.length; i++) {
                var temp = basketpre[i].split("x");
                if (temp[0] === product && done === false) {
                    if (temp[1] >= 10) {
                        Toast.fire({
                            icon: 'warning',
                            title: 'Du kannst nur 10 davon in den Warenkorb tun!'
                        });
                        done = true
                    } else {
                        var thisproductpre = temp.join("x")
                        temp[1]++
                        var thisproduct = temp.join("x")
                        var basketafter = "";
                        console.log("here!")

                        for (var e = 0; e < basketpre.length; e++) {
                            if (e === i) {
                                basketafter = basketafter + thisproduct + "&";
                            } else {
                                basketafter = basketafter + basketpre[e] + "&";
                            }
                        }
                        document.cookie = "tjcm_basket_items=" + basketafter + "; expires= Fri, 02 Apr 2021 00:00:00;";
                        done = true
                    }
                }
            }
            if (done === false) {
                var basketafter = ""
                // Wenn das Produk neu ist oder so
                for (var e = 0; e < basketpre.length; e++){
                    basketafter = basketafter + basketpre[e] + "&"
                }
                var basketafter = basketafter + product + "x1&";
                document.cookie = "tjcm_basket_items=" + basketafter + "; expires= Fri, 02 Apr 2021 00:00:00;";

            }

        }) */

        var confToken = makeid(30);
        var buyOrder = makeid(8);
        document.getElementById("addToBasket").setAttribute('href', 'outback.html?r=buyOrder&identicalBuyOrder=' + buyOrder + "&confirmationId=" + confToken + "&produktId=" + product);


    } else {
        window.location.href = "../../index.html?ref=404"
    }


}


// WARENKORB und so

let getItemsCount = () => {
    var basket = getCookie("tjcm_basket_items");
    // REGEX: ^((\d+)x(\d+)&)+$
    if (/^((\d+)x(\d+)&)+$/.test(basket) === true) {
        console.log(true);
        basket = basket.split("&")
        var totalitemsinbasket = 0
        for (var i = 0; i < basket.length - 1; i++) {
            var thisvar = basket[i]
            thisvar = thisvar.split("x");
            console.log(thisvar[1]);
            totalitemsinbasket++
        }
        if (document.getElementById("basket-nr")) {
            document.getElementById("basket-nr").innerHTML = totalitemsinbasket;
        }
    }
    /* else {
           document.cookie = "tjcm_basket_items=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;"
           window.location.href = "../../index.html?ref=illegalBasket";
           return; // ! Illegal Basket Error */
}



// Outback

let redirectOutback = () => {
    let res = window.location.search
    res = res.replace(/\?/g, '');
    var params = new URLSearchParams(res);
    if (params.has("r")) {
        console.log(r)
        var r = params.get("r")
        switch (r) {
            case "tutorial":
                window.location = "https://tjcteam.de/adminbewerbung";
                break;
            case "rating_014tgb3d0v2bnsfoebf2893r":
                window.location = "https://tjcteam.de/adminbewerbung";
                break;
            case "buyOrder":
                window.location = "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
                break;
            default:
                window.location.href = "../../index.html?ref=404"
        }
    } else {
        window.location.href = "../../index.html?ref=404"

    }

}

// ONLOAD - FUNCTION MANAGER

w.onload = () => { // "FILEMANAGER"
    let file = window.location.pathname;
    file = file.replace(/\//g, '');
    file = file.replace(/.html/g, '');
    switch (file) {
        case "index":
            generateHomeItems();
            break;
        case "products":
            generateProductList();
            break;
        case "product":
            setProductSite();
            break;
        case "outback":
            redirectOutback();
            break;
        case "basket":
            break;
        case "impressum":
            break;
        default:
            generateHomeItems();
    }

    // Da das hier sicherlich einige Interessiert, kommentiere ich mal was ich hier tu.
    // "window.location.search" gibt alles wieder, was hinter dem Dateinamen (bsp. index.html) mit einem "?" steht.
    let res = window.location.search
    // https://developer.mozilla.org/de/docs/Web/API/URLSearchParams
    res = res.replace(/\?/g, ''); // "?" am Anfang des Strings wird entfernt
    var params = new URLSearchParams(res); // Joa, kein Plan. JS regelt.

    if (params.has("ref") === true) {
        let ref = params.get("ref") // Der Wert hinter dem "="
        switch (ref) {
            case "404":
                // Produkt oder Seite nonexistent.
                Swal.fire({
                    icon: 'error',
                    title: 'Diese Seite existiert nicht!',
                    html: 'Das von dir aufgerufene Produkt oder die Seite gibt es nicht!',
                    showConfirmButton: 'true',
                    confirmButtonText: 'Okay!',
                    showCloseButton: 'true'
                });
                break;
                /* //! case "illegalBasket":
                    Swal.fire({ icon: 'error', title: 'Dein Warenkorb ist kaputt!', html: 'Der Inhalt deines Warenkorbs kann von uns nicht verarbeitet werden! Versuche es bitte erneut! (Developer: In der Console findet ihr mehr!)', showConfirmButton: 'true', confirmButtonText: 'Okay!', showCloseButton: 'true'});
                    console.log('%c[ERROR].' + '%cbasket |' + '%cWir konnten den Inhalt deines Warenkorbs nicht laden. Das liegt (vermutlich) daran, dass der Cookie, in welchem die Items gespeichert wurden, manipuliert wurde. Ein Idealer Cookie muss der folgenden RegEx entsprechen: /^((\d+)x(\d+)&)+$/. Schau dir den Cookie "tjcm_error_basket" an, und überprüfe ob dieser mit der RegEx übereinstimmt!', 'color: red;', 'color: lightgreen;', 'color: lightblue;');
                    break; */
        }
    }


    // Loading

    // Random Rick

    var rnd = Math.floor(Math.random(1) * 1000) + 1;
    if (rnd === 42) {
        document.getElementById("loadingScreenImg").setAttribute("src", "images/200_d.gif");
    }

    setTimeout(function() {
        $("#loadingScreen").fadeOut(500);

        console.log('%cHeyGuys!', 'font-weight: bold; font-size: 50px; color: red; text-shadow: 1px 1px 0px black, 1px -1px 0px black, -1px 1px 0px black, -1px -1px 0px black;');
        console.log('%cDir sagt jemand, du solltest etwas hier rein kopieren? Jemand sagt dir, hier kannst du kostenlose Produkte bekommen?', 'color: lightblue; font-size: 15px');
        console.log('%cDas wird halt nichts bringen lmao', 'color: red; font-size: 20px; font-style: bold;');
        console.log('%cdingens du kannst programmieren? Wir suchen Devs für unsere Projekte! Alles weitere findest du hier: https://www.youtube.com/watch?v=wXvJcisbqHE', 'color: lightblue; font-size: 15px')

    }, 1500);

}