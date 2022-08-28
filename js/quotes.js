
const loadQuote = () => {
    fetch('https://api.kanye.rest/')
        .then(res => res.json())
    .then(data=>displayQute(data))
}

const displayQute = quote => {
    // console.log(quote)
    const blockquote = document.getElementById('quote')
    blockquote.innerText = quote.quote

}