document.addEventListener("DOMContentLoaded", function () {
    const crimeContainer = document.getElementById("crimeContainer");
    const generateSentenceBtn = document.getElementById("generateSentenceBtn");

    const crimeData = {
        'Wykroczenia drogowe':{
			'Jazda pod wpływem alkoholu lub substancji odurzających': {
                'Dodatkowe': 'Odholowanie pojazdu, Konfiskata prawo jazdy',
                'Kwota min': 5000,
                'Kwota max': 5000,
                'Więzienie min': 10,
                'Więzienie max': 15,
            },
			'Jazda bez prawa jazdy': {
                'Dodatkowe': 'Odholowanie pojazdu',
                'Kwota min': 5000,
                'Kwota max': 5000,
                'Więzienie min': 0,
                'Więzienie max': 0,
            },
			'Przekroczenie prędkości w mieście': {
                'Dodatkowe': 'Dopuszczalny błąd radaru - 10km/h',
                'Kwota min': 2000,
                'Kwota max': 8000,
                'Więzienie min': 0,
                'Więzienie max': 0,
            },
			'Brawurowa jazda': {
                'Dodatkowe': '',
                'Kwota min': 4000,
                'Kwota max': 4000,
                'Więzienie min': 0,
                'Więzienie max': 0,
            },
			'Stwarzanie zagrożenia w ruchu lądowym': {
                'Dodatkowe': 'Konfiskata prawo jazdy',
                'Kwota min': 10000,
                'Kwota max': 10000,
                'Więzienie min': 0,
                'Więzienie max': 0,
            },
			'Niezatrzymanie pojazdu do kontroli': {
                'Dodatkowe': '',
                'Kwota min': 3000,
                'Kwota max': 5000,
                'Więzienie min': 0,
                'Więzienie max': 0,
            },
			'Niewłaściwe parkowanie': {
                'Dodatkowe': '',
                'Kwota min': 1000,
                'Kwota max': 1000,
                'Więzienie min': 0,
                'Więzienie max': 0,
            },
			'Zły stan techniczny pojazdu': {
                'Dodatkowe': 'Odholowanie pojazdu',
                'Kwota min': 2000,
                'Kwota max': 5000,
                'Więzienie min': 0,
                'Więzienie max': 0,
            },
			'Przejazd na czerwonym świetle': {
                'Dodatkowe': '',
                'Kwota min': 500,
                'Kwota max': 500,
                'Więzienie min': 0,
                'Więzienie max': 0,
            },
			'Zniszczenie mienia': {
                'Dodatkowe': '',
                'Kwota min': 3000,
                'Kwota max': 3000,
                'Więzienie min': 0,
                'Więzienie max': 0,
            },
			'Spowodowanie kolizji/wypadku': {
                'Dodatkowe': '',
                'Kwota min': 2000,
                'Kwota max': 5000,
                'Więzienie min': 0,
                'Więzienie max': 0,
            },
			'Jazda pod prąd': {
                'Dodatkowe': '',
                'Kwota min': 4000,
                'Kwota max': 4000,
                'Więzienie min': 0,
                'Więzienie max': 0,
            },
			'Potrącenie przechodnia': {
                'Dodatkowe': '',
                'Kwota min': 5000,
                'Kwota max': 5000,
                'Więzienie min': 5,
                'Więzienie max': 5,
            },
			'Przechodzenie przez jezdnię w niedozwolonym miejscu': {
                'Dodatkowe': 'Upomnienie',
                'Kwota min': 500,
                'Kwota max': 500,
                'Więzienie min': 0,
                'Więzienie max': 0,
            },
		},
        'Przestępstwa lekkie': {
            'Niszczenie mienia publicznego': {
                'Dodatkowe': '',
                'Kwota min': 2000,
                'Kwota max': 4000,
                'Więzienie min': 0,
                'Więzienie max': 0,
            },
            'Niewykonywanie poleceń funkcjonariusza': {
                'Dodatkowe': 'Upomnienie',
                'Kwota min': 1500,
                'Kwota max': 5000,
                'Więzienie min': 10,
                'Więzienie max': 10,
            },
			'Obraza funkcjonariusza': {
                'Dodatkowe': 'Upomnienie',
                'Kwota min': 3000,
                'Kwota max': 6000,
                'Więzienie min': 5,
                'Więzienie max': 5,
            },
			'Utrudnianie pracy służbom publicznym': {
                'Dodatkowe': 'Upomnienie',
                'Kwota min': 1500,
                'Kwota max': 1500,
                'Więzienie min': 5,
                'Więzienie max': 5,
            },
			'Fałszywe zgłoszenie': {
                'Dodatkowe': '',
                'Kwota min': 1500,
                'Kwota max': 3000,
                'Więzienie min': 0,
                'Więzienie max': 0,
            },
			'Niszczenie cudzej własności': {
                'Dodatkowe': 'Pokrycie szkód',
                'Kwota min': 1500,
                'Kwota max': 3000,
                'Więzienie min': 0,
                'Więzienie max': 0,
            },
			'Składanie fałszywych zeznań': {
                'Dodatkowe': '',
                'Kwota min': 1000,
                'Kwota max': 3000,
                'Więzienie min': 5,
                'Więzienie max': 5,
            },
			'Kradzież pojazdu': {
                'Dodatkowe': 'Odholowanie pojazdu',
                'Kwota min': 2000,
                'Kwota max': 6000,
                'Więzienie min': 10,
                'Więzienie max': 15,
            },
			'Posiadanie kontrabandy': {
                'Dodatkowe': 'Konfiskata',
                'Kwota min': 3000,
                'Kwota max': 9000,
                'Więzienie min': 10,
                'Więzienie max': 20,
            },
			'Stawianie oporu': {
                'Dodatkowe': '',
                'Kwota min': 3000,
                'Kwota max': 3000,
                'Więzienie min': 10,
                'Więzienie max': 10,
            },
			'Kradzież cudzej własności': {
                'Dodatkowe': 'Pokrycie szkód',
                'Kwota min': 2000,
                'Kwota max': 5000,
                'Więzienie min': 5,
                'Więzienie max': 10,
            },
			'Chodzenie zamaskowanym po mieście': {
                'Dodatkowe': 'Upomnienie/Rewizja',
                'Kwota min': 5000,
                'Kwota max': 5000,
                'Więzienie min': 0,
                'Więzienie max': 0,
            },
			'Próba przekupstwa': {
                'Dodatkowe': 'Upomnienie',
                'Kwota min': 2000,
                'Kwota max': 2000,
                'Więzienie min': 5,
                'Więzienie max': 10,
            },
			'Kradzież radiowozu': {
                'Dodatkowe': 'Konfiskata',
                'Kwota min': 15000,
                'Kwota max': 15000,
                'Więzienie min': 10,
                'Więzienie max': 20,
            },
        }, 'Przestępstwa ciężkie': {
			'Groźby przy użyciu broni': {
                'Dodatkowe': 'Konfiskata licencji na broń',
                'Kwota min': 4000,
                'Kwota max': 8000,
                'Więzienie min': 10,
                'Więzienie max': 20,
            },
			'Ucieczka przed policją': {
                'Dodatkowe': '',
                'Kwota min': 7500,
                'Kwota max': 7500,
                'Więzienie min': 10,
                'Więzienie max': 15,
            },
			'Porwanie': {
                'Dodatkowe': 'Konfiskata licencji na broń',
                'Kwota min': 10000,
                'Kwota max': 10000,
                'Więzienie min': 15,
                'Więzienie max': 25,
            },
			'Pomoc w ucieczce': {
                'Dodatkowe': '',
                'Kwota min': 5000,
                'Kwota max': 5000,
                'Więzienie min': 10,
                'Więzienie max': 10,
            },
			'Współudział w przestępstwie': {
                'Dodatkowe': '',
                'Kwota min': 5000,
                'Kwota max': 20000,
                'Więzienie min': 10,
                'Więzienie max': 40,
            },
			'Napad na sklep': {
                'Dodatkowe': 'Konfiskata licencji na broń',
                'Kwota min': 5000,
                'Kwota max': 12000,
                'Więzienie min': 15,
                'Więzienie max': 20,
            },
			'Napad na konwój': {
                'Dodatkowe': 'Konfiskata licencji na broń, Konfiskata gotówki przy sobie',
                'Kwota min': 10000,
                'Kwota max': 20000,
                'Więzienie min': 15,
                'Więzienie max': 20,
            },
			'Napad na skarbiec': {
                'Dodatkowe': 'Konfiskata licencji na broń',
                'Kwota min': 15000,
                'Kwota max': 30000,
                'Więzienie min': 20,
                'Więzienie max': 40,
            },
			'Prowokacja policji': {
                'Dodatkowe': '',
                'Kwota min': 5000,
                'Kwota max': 15000,
                'Więzienie min': 10,
                'Więzienie max': 20,
            },
			'Próba napadu/napaści': {
                'Dodatkowe': '',
                'Kwota min': 500,
                'Kwota max': 10000,
                'Więzienie min': 10,
                'Więzienie max': 15,
            },
			'Podszywanie się pod funkcjonariusza LSPD': {
                'Dodatkowe': '',
                'Kwota min': 5000,
                'Kwota max': 5000,
                'Więzienie min': 15,
                'Więzienie max': 15,
            },
			'Nękanie obywatela/obywatelki': {
                'Dodatkowe': '',
                'Kwota min': 5000,
                'Kwota max': 5000,
                'Więzienie min': 0,
                'Więzienie max': 0,
            },
			'Terroryzm': {
                'Dodatkowe': 'Dożywocie/Rozprawa sądowa',
                'Kwota min': 360000,
                'Kwota max': 360000,
                'Więzienie min': 360,
                'Więzienie max': 360,
            },
		}, 'Przestępstwa związane z bronią i nielegalnymi substancjami': {
			'Posiadanie narkotyków miękkich (marihuana powyżej 5g)': {
                'Dodatkowe': 'Rewizja',
                'Kwota min': 5000,
                'Kwota max': 5000,
                'Więzienie min': 5,
                'Więzienie max': 10,
            },
			'Posiadanie narkotyków twardych (metamfetamina/kokaina)': {
                'Dodatkowe': 'Rewizja',
                'Kwota min': 10000,
                'Kwota max': 10000,
                'Więzienie min': 10,
                'Więzienie max': 15,
            },
			'Handel narkotykami miękkimi (marihuana)': {
                'Dodatkowe': 'Rewizja',
                'Kwota min': 7500,
                'Kwota max': 7500,
                'Więzienie min': 10,
                'Więzienie max': 20,
            },
			'Handel narkotykami twardymi (metamfetamina/kokaina)': {
                'Dodatkowe': 'Rewizja',
                'Kwota min': 10000,
                'Kwota max': 15000,
                'Więzienie min': 15,
                'Więzienie max': 30,
            },
			'Posiadanie broni bez zezwolenia': {
                'Dodatkowe': 'Konfiskata',
                'Kwota min': 30000,
                'Kwota max': 30000,
                'Więzienie min': 20,
                'Więzienie max': 20,
            },
			'Posiadanie rejestrowanej broni krótkiej': {
                'Dodatkowe': 'Konfiskata licencji na broń',
                'Kwota min': 30000,
                'Kwota max': 45000,
                'Więzienie min': 20,
                'Więzienie max': 30,
            },
			'Posiadanie nielegalnej broni klasy drugiej': {
                'Dodatkowe': 'Konfiskata licencji na broń',
                'Kwota min': 100000,
                'Kwota max': 100000,
                'Więzienie min': 40,
                'Więzienie max': 60,
            },
			'Handel bronią': {
                'Dodatkowe': 'Konfiskata licencji na broń',
                'Kwota min': 15000,
                'Kwota max': 15000,
                'Więzienie min': 15,
                'Więzienie max': 30,
            },
			'Bezpodstawne użycie broni': {
                'Dodatkowe': 'Konfiskata licencji na broń',
                'Kwota min': 10000,
                'Kwota max': 15000,
                'Więzienie min': 10,
                'Więzienie max': 20,
            },
		}, 'Przestępstwa związane z użyciem siły/uszczerbkiem na zdrowiu': {
			'Usiłowanie zabójstwa': {
                'Dodatkowe': 'Konfiskata licencji na broń',
                'Kwota min': 15000,
                'Kwota max': 30000,
                'Więzienie min': 15,
                'Więzienie max': 25,
            },
			'Usiłowanie zabójstwa funkcjonariusza LSPD': {
                'Dodatkowe': 'Konfiskata licencji na broń',
                'Kwota min': 20000,
                'Kwota max': 40000,
                'Więzienie min': 25,
                'Więzienie max': 40,
            },
			'Napaść na funkcjonariusza LSPD': {
                'Dodatkowe': '',
                'Kwota min': 10000,
                'Kwota max': 20000,
                'Więzienie min': 15,
                'Więzienie max': 25,
            },
			'Groźby karalne': {
                'Dodatkowe': '',
                'Kwota min': 5000,
                'Kwota max': 5000,
                'Więzienie min': 5,
                'Więzienie max': 10,
            },
			'Nieumyślne spowodowanie uszczerbku na zdrowiu': {
                'Dodatkowe': '',
                'Kwota min': 2000,
                'Kwota max': 2000,
                'Więzienie min': 5,
                'Więzienie max': 5,
            },
			'Naruszenie nietykalności cielesnej': {
                'Dodatkowe': '',
                'Kwota min': 2000,
                'Kwota max': 2000,
                'Więzienie min': 5,
                'Więzienie max': 5,
            },
			'Udział w bójce': {
                'Dodatkowe': '',
                'Kwota min': 1000,
                'Kwota max': 2000,
                'Więzienie min': 5,
                'Więzienie max': 5,
            },
			'Morderstwo': {
                'Dodatkowe': 'Dożywocie/Rozprawa sądowa',
                'Kwota min': 360000,
                'Kwota max': 360000,
                'Więzienie min': 360,
                'Więzienie max': 360,
            },
		}
    };
    function generateCrimeCheckboxes() {
        Object.keys(crimeData).forEach((category) => {
            const categoryDiv = document.createElement("div");
            categoryDiv.classList.add("category");
            categoryDiv.textContent = category;
            crimeContainer.appendChild(categoryDiv);
    
            Object.keys(crimeData[category]).forEach((crime) => {
                const crimeCard = document.createElement("div");
                crimeCard.classList.add("crimeCard");
    
                const checkbox = document.createElement("input");
                checkbox.type = "checkbox";
                checkbox.value = JSON.stringify(crimeData[category][crime]);
                crimeCard.appendChild(checkbox);
    
                const label = document.createElement("label");
                label.textContent = crime;
                const crimeId = crime.replace(/ /g, '-'); // Nazwa przestępstwa jako identyfikator
                label.setAttribute("for", crimeId);
                crimeCard.appendChild(label);
    
                // Dodaj właściwość "name" do obiektu crimeInfo
                checkbox.addEventListener("change", function () {
                    const crimeInfo = JSON.parse(this.value);
                    crimeInfo.name = crime;
                });
    
                // Disable text selection for the crime text.
                label.addEventListener("selectstart", function (e) {
                    e.preventDefault();
                });
    
                crimeContainer.appendChild(crimeCard);
            });
        });
    }
    
    function generateSuggestedSentence() {
        const selectedCrimes = [];
        const checkboxes = crimeContainer.querySelectorAll("input[type='checkbox']:checked");
        checkboxes.forEach((checkbox) => {
            const crimeInfo = JSON.parse(checkbox.value);
            crimeInfo.name = checkbox.nextElementSibling.textContent; // Dodaj właściwość "name" z nazwą przestępstwa
            crimeInfo.quantity = parseInt(prompt(`Podaj liczbę sztuk dla wykroczenia: ${checkbox.nextElementSibling.textContent}`, 1), 10);
            if (!isNaN(crimeInfo.quantity) && crimeInfo.quantity > 0) {
                selectedCrimes.push({ ...crimeInfo });
            }
        });
    
        if (selectedCrimes.length === 0) {
            alert("Najpierw wybierz wykroczenia!");
            return;
        }
    
        const suggestedSentence = {
            crimes: selectedCrimes,
            total_min_kwota: selectedCrimes.reduce((acc, crime) => acc + (crime["Kwota min"] * crime.quantity) / 10, 0),
            total_max_kwota: selectedCrimes.reduce((acc, crime) => acc + (crime["Kwota max"] * crime.quantity) / 10, 0),
            total_min_wiezienie: selectedCrimes.reduce((acc, crime) => acc + (crime["Więzienie min"] * crime.quantity), 0),
            total_max_wiezienie: selectedCrimes.reduce((acc, crime) => acc + (crime["Więzienie max"] * crime.quantity), 0),
            
        };
    
        // Reduce the amounts by one zero
        suggestedSentence.total_min_kwota /= 10;
        suggestedSentence.total_max_kwota /= 10;

        // Sformatuj sugestię wyroku
        let sentenceText = "Sugestia wyroku:\n\n";
        suggestedSentence.crimes.forEach((crime) => {
            sentenceText += `${crime.name} x${crime.quantity}\nSkutki: ${crime["Dodatkowe"]}\n\n`;
        });
        sentenceText += `Proponowana kara:\nGrzywna: ${suggestedSentence.total_min_kwota}$\nWięzienie: Od ${suggestedSentence.total_min_wiezienie} miesięcy do ${suggestedSentence.total_max_wiezienie} miesięcy`;
    
        alert(sentenceText);
    
        // Odznacz wszystkie checkboxy po wygenerowaniu sugestii wyroku
        checkboxes.forEach((checkbox) => {
            checkbox.checked = false;
        });
        
    }
    generateCrimeCheckboxes();
    generateSentenceBtn.addEventListener("click", generateSuggestedSentence);
    const crimeCards = document.querySelectorAll(".crimeCard");
    crimeCards.forEach((crimeCard) => {
        const checkbox = crimeCard.querySelector("input[type='checkbox']");
        const label = crimeCard.querySelector("label");
        crimeCard.addEventListener("click", () => {
            checkbox.checked = !checkbox.checked;
        });
        label.addEventListener("click", () => {
            checkbox.checked = !checkbox.checked;
        });
    });
});
