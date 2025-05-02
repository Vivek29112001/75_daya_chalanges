let book =[
    {title: "Book 1", author: "Author 1" , reviews:[
        {rating:3.5, Comment:"Great book"},
        {rating:4.6, Comment:"Good book"},
        {rating:3, Comment:"Average book"},
    ]},
    {title: "Book 2", author: "Author 2" , reviews:[
        {rating:5, Comment:"Great book"},
        {rating:4.59, Comment:"Good book"},
        {rating:3.221, Comment:"Average book"},
    ]},
]

const averageRating = (book)=>{
    return book.map((name)=>{
       const {title, reviews} = name;
       if(reviews.length ===0){
        return {title,averageRating:0}
       }
       const total = reviews.reduce((acc,curr)=> acc + curr.rating, 0);
       const average = total/ reviews.length;

       return{
        title,
        averageRating: average.toFixed(2),
       }
    })
}
console.log(averageRating(book))