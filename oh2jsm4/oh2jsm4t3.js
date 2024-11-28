const form = document.querySelector("form")

async function myfunction(evt)  {
    evt.preventDefault()
    const query = document.querySelector("#query").value
    try {
        document.querySelector("#results").innerHTML = ""
        const response = await fetch(`https://api.tvmaze.com/search/shows?q=${query}`);
        const jsonData = await response.json();
        let html = ""

        for (let result of jsonData){
            html = html + `
                        <article>
                        <h2>${result.show.name}</h2>
                        <a href=${result.show.url} target="_blank">link</a>
                        <img src=${result.show.image?.medium} alt=${result.show.name}>
                        <div>${result.show.summary}</div>
                        </article>`
        }
        console.log(jsonData);
        document.querySelector("#results").innerHTML = html

    } catch (error) {
        console.log(error.message);
    }
}

form.addEventListener("submit", myfunction)



