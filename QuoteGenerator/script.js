var generateBtn = document.getElementById("generate-btn");
var selectedQuote = document.getElementById("quote-view");
// list of 10 Quotes
var quotes = [
  "Be yourself; everyone else is already taken. \n― Oscar Wilde",
  "So many books, so little time. \n― Frank Zappa",
  "Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind. \n― Bernard M. Baruch",
  "In three words I can sum up everything I've learned about life: it goes on. \n― Robert Frost",
  "If you want to know what a man's like, take a good look at how he treats his inferiors, not his equals. \n― J.K. Rowling, Harry Potter and the Goblet of Fire",
  "To live is the rarest thing in the world. Most people exist, that is all. \n― Oscar Wilde",
  "Live as if you were to die tomorrow. Learn as if you were to live forever. \n― Mahatma Gandhi",
  "I am so clever that sometimes I don't understand a single word of what I am saying. \n― Oscar Wilde, The Happy Prince and Other Stories",
  "Insanity is doing the same thing, over and over again, but expecting different results. \n― Narcotics Anonymous",
  "It is better to be hated for what you are than to be loved for what you are not. \n― Andre Gide, Autumn Leaves",
];
generateBtn.onclick = displayQuote;
// create list to store index of displayed Quotes.
var displayed = [];
function displayQuote() {
  var box = "";
  var count = Math.floor(Math.random() * 10);
  // check if Quote is displayed already.
  if (!displayed.includes(count)) {
    displayed.push(count);
    box = quotes[count];
  } else {
    box = "***please click again to generate new Quote***";
  }
  // clear displayed list after displaying all Quotes.
  if (displayed.length == 10) {
    displayed = [];
  }
  selectedQuote.innerHTML = `<p>${box}</p>
  <p class="fs-6">Remaining Quotes: ${10 - displayed.length}</p>`;
}
