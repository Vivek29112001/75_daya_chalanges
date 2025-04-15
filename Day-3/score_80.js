// Q17. Find user names with score > 80

const username = (score) => {
    return score.filter(score => score.score > 80).map(score => score.name)

}
console.log(username([
    { name: 'John', score: 90 },
    { name: 'A', score: 9 },
    { name: 'B', score: 75 },
    { name: 'C', score: 85 }
]))


function scoreCard(num){
    let scores = [];
    for(let i=0; i<num.length; i++){
        if(num[i].score >80){
            scores.push(num[i].name)
        }
    }
    return scores
}
console.log(scoreCard([
    { name: 'John', score: 9 },
    { name: 'A', score: 90 },
    { name: 'B', score: 85 },
    { name: 'C', score: 65 }
]))