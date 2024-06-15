// bible quotes arrayobjects 
var bibleQuotes = [
    { 
     bibleVerse: "But seek first the kingdom of God, and his righteousness; and all these things shall be added unto you.",
     quoteNumber: "Matthew 6: 33"
},
    { 
     bibleVerse: "So, if you think you are standing firm, be careful that you don't fall!.",
     quoteNumber: "1 Corinthians 10:12",
},
    { 
     bibleVerse: "Love is patient, love is kind. It does not envy, it does not boast, it is not proud",
     quoteNumber: "1 Corinthians 13:4"
},
    { 
     bibleVerse: "Be on your guard; stand firm in the faith; be courageous; be strong",
     quoteNumber: "1 Corinthians 16:33"
},
    { 
     bibleVerse: "Remember this: Whoever sows sparingly will also reap sparingly, and whoever sows generously will also reap generously.",
     quoteNumber: "2 Corinthians 9:6"
},
    { 
     bibleVerse: "There is a time for everything, and a season for every activity under the heavens",
     quoteNumber: "Ecclesiastes 3:1"
},
    { 
     bibleVerse: "Get rid of all bitterness, rage and anger, brawling and slander, along with every form of malice.",
     quoteNumber: "Ephesians 4:31"
},
    { 
     bibleVerse: "For our struggle is not against flesh and blood, but against the rulers, against the authorities, against the powers of this dark world and against the spiritual forces of evil in the heavenly realms.",
     quoteNumber: "Ephesians 6:12"
},
    { 
     bibleVerse: "But the fruit of the Spirit is love, joy, peace, patience, kindness, goodness, faithfulness ",
     quoteNumber: "Galatians 5:22"
},
    // Add more unique quotes here...
];


// function to generate quotes 
const generateQuote = () => {
    const randomQuotes = Math.floor(Math.random() * bibleQuotes.length)
    return bibleQuotes[randomQuotes]
}



console.log(generateQuote())