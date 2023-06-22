const quotes = [
	{ quote: "He who is brave is free.", author: "Seneca" },
	{ quote: "Try again. Fail again. Fail better.", author: "Samuel Beckett" },
	{ quote: "My life is my message.", author: "Mahatma Gandhi" },
	{ quote: "Each day provides its own gifts.", author: "Marcus Aurelius" },
	{ quote: "Every wall is a door.", author: "Ralph Waldo Emerson" },
	{ quote: "If youth knew; if age could.", author: "Sigmund Freud" },
	{
		quote: "I am not young enough to know everything.",
		author: "Oscar Wilde",
	},
	{
		quote: "Never regret anything that made you smile.",
		author: "Mark Twain",
	},
	{ quote: "Whatever you do, do it well.", author: "Walt Disney" },
	{ quote: "Du kannst, denn du sollst.", author: "Immanuel Kant" },
];

const quote = document.querySelector("#quote p:first-child");
const author = document.querySelector("#quote p:last-child");

const index = Math.floor(Math.random() * quotes.length);
quote.innerHTML = `"${quotes[index].quote}"`;
author.innerHTML = `- ${quotes[index].author}`;
