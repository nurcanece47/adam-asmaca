const wordsection=document.
querySelector(".word")
const boardsection=document.
querySelector(".board")
const figure=document.
querySelector(".figure")
const letters = [
    "A",
    "B",
    "C",
    "Ç",
    "D",
    "E",
    "F",
    "G",
    "Ğ",
    "H",
    "İ",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "Ö",
    "P",
    "R",
    "S",
    "Ş",
    "T",
    "U",
    "Ü",
    "V",
    "Y",
    "Z",
];

const human = ["head", "body", "rightarm",
"leftarm", "rightleg", "leftleg"];
let randomword = ""; 

const createkeyboard = () => {
    boardsection.innerHTML = "";
    for (let a = 0; a < letters.length; a++) {
        let square = document.createElement("div");
        square.classList.add("lettersquare");
        square.textContent = letters[a];
        boardsection.appendChild(square);
    }
};

const createword = () => {
    wordsection.innerHTML = "";
    randomword = selectword();
    for (let a = 0; a < 8; a++) {
        let square = document.createElement("div");
        square.classList.add("square");
        square.setAttribute("data-value", randomword[a]);
        wordsection.appendChild(square);
    }
};

const selectword=()=>{
    const word = [
    "ABACILIK",
    "ABAJURCU",
    "ABAURLU",
    "ABANDONE",
    "BABAANNE",
    "BABAESKİ",
    "BABAİLİK",
    "BABAYANİ",
    "CAFCAFLI",
    "CAHİLANE",
    "CAHİLLİK",
    "CAMCILIK",
    "ÇABALAMA",
    "ÇABUKLUK",
    "ÇAĞIRMAK",
    "ÇAĞIRTMA",
    "DADANMAK",
    "DADAŞLIK",
    "DAĞARCIK",
    "DAĞCILIK",
    "EBEDİLİK",
    "EBEDİYEN",
    "EBEDİYET",
    "EBELEMEK",
    "FAALİYET",
    "FAÇETALI",
    "FAHİŞLİK",
    "FAHİLİK",-
    "GABARDİN",
    "GADDARCA",
    "GADİRLİK",
    "GADRETME",
    "HABANERA",
    "HABERDAR",
    "HABERLİK",
    "HABERSİZ",
    "İBLİSANE",
    "İBRANAME",
    "İBRANİCE",
    "İBRETLİK",
    "IHTIRMAK",
    "ILGINCAR",
    "IRAKSAMA",
    "IRALAMAK",
    "JAKUZULİ",
    "JALUZİLLİ",
    "JANDARMA",
    "JANJANLI",
    "KABADAYI",
    "KABAKLIK",
    "KABALACI",
    "KABALİST",
    "LABİRENT",
    "LABORANT",
    "LABRADOR",
    "LACİVERT",
    "MAALESEF",
    "MAARİFÇİ",
    "MACARLIK",
    "MACERACI",
    "NAÇARLIK",
    "NAÇİZANE",
    "NAÇİZLİK",
    "NADANLIK",
    "OBJEKTİF",
    "OBSESYON",
    "OCAKBAŞI",
    "ODACILIK",
    "ÖBÜRLERİ",
    "ÖÇLENMEK",
    "ÖDENEKLİ",
    "ÖDETİLME",
    "PAPUÇLUK",
    "PAPUÇSUZ",
    "PADİŞAHİ",
    "PAFTASIZ",
    "RABITALI",
    "RADYATÖR",
    "RADYOEVİ",
    "RADYALOG",
    "SAADETLE",
    "SAADETLİ",
    "SAATİNDE",
    "ŞABANLIK",
    "ŞABANÖZÜ",
    "ŞABLONCU",
    "ŞADIRVAN",
    "TABAKALI",
    "TABAKLLIK",
    "TABAKSIZ",
    "TABANLIK",
    "UBİDİYET",
    "UCULAMA",
    "UÇABİLME",
    "UÇANKALE",
    "ÜCRETSİZ",
    "ÜÇÇÇEYREK",
    "ÜÇLEŞMEK",
    "ÜÇÜZLEME",
    "VADETMEK",
    "VAGOTONİ",
    "VAHİMLİK",
    "VAHŞİLİK",
    "YABALAMA",
    "YABANCIL",
    "YABANİCE",
    "YABANLIK",
    "ZABİTLİK",
    "ZAĞARLIK",
    "ZAĞCILIK",
    "ZAĞLAMAK",
    ];
    const randomword = Math.floor(Math.random()*
    word.length);
    console.log(word[randomword]);
    return (keyWord=Array.from(word
        [randomword]));
};

const generatebody=(value)=>{
    let bodypart=document.createElement("div")
    bodypart.classList.add(human[value])
    figure.appendChild(bodypart);
};

const startgame=()=>{
    createkeyboard();
    createword();
    let buttons=document.querySelectorAll(".lettersquare")
    let squares=document.querySelectorAll(".square")
    let figuresection=document.querySelectorAll(".figure div")
    let wrongcount=0
    let correctcount=0
    figuresection.forEach(item=>{
        if (!item.getAttribute(data-value)) item.remove()
    })
buttons.forEach(item=>{
    item.addEventListener("click", (e)=>{
        let chosenletter=e.target.textContent
        if (randomword.includes(chosenletter)){
            e.target.classList.add("corect")
            squares.forEach(item=>{
                if (item.getAttribute("data-value") === chosenletter){
                    item.textContent=item.getAttribute("data-valu");
                    item.classList.add("show");
                    correctcount++;
                }
            })
            if (correctcount===8){
                buttons.forEach(item=>{
                    item.classList.add("close")
                })
                squares.forEach(item=>{
                    item.style.background="green"
                })
                setTimeout(()=>{
                    startgame()
                },3000)
            }
        }
        else{
            e.target.classList.add("wrong")
            wrongcount++
            generatebody(wrongcount-1)
            if(wrongcount===6){
                buttons.forEach(item=>{
                    item. classList.add("close")
                })
                squares.forEach(item=>{
                    item.classList.add("show")
                    item.style. background="red"
                });
                setTimeout(() => {
                    startgame();
                },3000);
            }
        }
    });
 });
};

startgame();