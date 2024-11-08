const noofcandidates = Number(prompt("number of candidates"));
const listofcandidates = [];

for(let i = 1; i <= noofcandidates;i++){
    let candidatename = prompt(`name of candidate ${i}`);
    let cand = {
        name: candidatename,
        votes: 0
    }
    listofcandidates.push(cand);
}
const noofvoter = Number(prompt("number of voters?"));

for(let i = 0; i<noofvoter;i++){
    let vote = prompt("who will you wote for?")
    if(vote === ""){
        continue
    }


        for(const item of listofcandidates){
            if(item.name === vote) {
                item.votes += 1;
                break
            }


            }




}
listofcandidates.sort((a,b) => b.votes - a.votes);
console.log(listofcandidates);

console.log(`the winner is ${listofcandidates[0].name} with ${listofcandidates[0].votes} votes`);

console.log("results:")

for(let i = 0; i< listofcandidates.length;i++){
    console.log(`${listofcandidates[i].name}: ${listofcandidates[i].votes} votes`);

}
