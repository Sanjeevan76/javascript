const ballPen ={
    title:"Ball pen",
    price:170,
    star:4,
    offer:true,
};

console.log(ballPen);

console.log(ballPen["title"]);//to accest only title
console.log(ballPen.title); //other method to access a particular key of object

// practise 02

const profile={
    userName:"sanjeevan_kr",
    following:105,
    followers:985,
    bio:"nothing",
};

console.log(profile); //to access all key of the class
console.log(profile["followers"]);
console.log(profile.following);