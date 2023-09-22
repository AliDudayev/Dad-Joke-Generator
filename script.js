async function fetchJoke()
{
    const url = 'https://dad-jokes.p.rapidapi.com/random/joke';
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'a4b381b6c4mshbee8e2c8debe934p1efb8cjsnc88db0bb2fd4',
            'X-RapidAPI-Host': 'dad-jokes.p.rapidapi.com'
        }
    };
    
    try {
        const response = await fetch(url, options);
        const result = await response.text();
        console.log(result);
        document.getElementById("setup").innerHTML = result.substring(result.indexOf('setup') + 8, result.indexOf('punchline') -3);
        document.getElementById("punchline").innerHTML = result.substring(result.indexOf('punchline') +12, result.indexOf('type')-3);

    } catch (error) {
        console.error(error);
    }
}
fetchJoke();