const form = document.querySelector("form")

async function myfunction(evt)  {
    evt.preventDefault()
    const query = document.querySelector("#query").value
    try {
        document.querySelector("#results").innerHTML = ""
        const response = await fetch(`https://api.tvmaze.com/search/shows?q=${query}`);
        const jsonData = await response.json();
        //let html = ""

        for (let result of jsonData){
            /*html = html + `
                        <article>
                        <h2>${result.show.name}</h2>
                        <a href=${result.show.url} target="_blank">link</a>
                        <img src=${result.show.image?.medium} alt=${result.show.name}>
                        <div>${result.show.summary}</div>
                        </article>`*/
            const article = document.createElement("article")
            const h2 = document.createElement("h2")
            const link = document.createElement("a")
            const img = document.createElement("img")
            const div = document.createElement("div")
            div.innerHTML = result.show.summary
            h2.innerHTML = result.show.name
            link.innerText = "link"
            link.href = result.show.url
            link.target = "_blank"
            img.alt = result.show.name
            if (result.show.image.medium !== null && result.show.image.medium !== undefined){
                img.src = result.show.image.medium
            }
            else{
                img.src = "https://via.placeholder.com/210x295?text=Not%20Found"
            }
            article.append(h2)
            article.append(link)
            article.append(img)
            article.append(div)
            document.querySelector("#results").append(article)
        }
        console.log(jsonData);
        //document.querySelector("#results").innerHTML = html

    } catch (error) {
        console.log(error.message);
    }
}

form.addEventListener("submit", myfunction)



