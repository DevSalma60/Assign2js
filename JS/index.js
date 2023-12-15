var lastindx = 0;

function getQuote() {
  var qoute = [
    "“You miss 100% of the shots you don't take.”",
    "“Be yourself, everyone else is already taken.”",
    "“Resentment is like drinking poison and waiting for your enemies to die.”",
    "“Do not take life too seriously. You will not get out alive.”",
    "“The best revenge is massive success.”",
    "“You only live once, but if you do it right, once is enough.”",
  ];

  var auother = [
    "--Wayne Gretzy",
    "--Oscar Wilde",
    "--Nelson Mandela",
    "--Elbert Hubbard",
    "--Frank Sinatra",
    "--Mae West",
  ];

  function changeindx() {
    do {
      var indx = Math.floor(Math.random() * qoute.length);
    } while (lastindx == indx);
    lastindx = indx;
    document.getElementById("quote").innerHTML = qoute[indx];
    document.getElementById("auother").innerHTML = auother[indx];
  }
  changeindx();
}
