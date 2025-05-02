let arrdata = [
    {title:"The Great Gatsby", author:"F. Scott Fitzgerald", year:1925, tags:["classic", "novel"]},
    {title:"To Kill a Mockingbird", author:"Harper Lee", year:1960, tags:["classic", "novel"]},
    {title:"1984", author:"George Orwell", year:1949, tags:["dystopian", "novel"]},
    {title:"Pride and Prejudice", author:"Jane Austen", year:1813, tags:["classic", "romance"]},
]

const filterbooks = (article)=>{
    const alltags = article.flatMap(articles=>articles.tags)
    const uniquetarget =[...new Set(alltags)]
    return uniquetarget
}

console.log(filterbooks(arrdata))