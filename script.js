
const dogQuote = document.getElementsByClassName('dogQuote');
const dogImg = document.getElementsByClassName('dogImg');
const dogBreed = document.getElementsByClassName('dogBreed');
const fetchBtn = document.getElementsByClassName('fetchBtn');

const arrayQuotes = [
    "Handle every situation like a dog. If you can't eat it or play with it, just pee on it and walk away.",
    "Ever consider what our dogs must think of us? I mean, here we come back from a grocery store with the most amazing haul, chicken, pork, half a cow. They must think we're the greatest hunters on earth!",
    "My cats inspire me daily. They inspire me to get a dog!",
    "A dog desires affection more than its dinner. Well – almost.",
    "If you're uncomfortable around my dog, I'm happy to lock you in the other room when you come over.",
    "A boy can learn a lot from a dog — obedience, loyalty, and the importance of turning around three times before lying down.",
    "If you are a dog and your owner suggests that you wear a sweater suggest that he wear a tail.",
    "If aliens saw us walking our dogs and picking up their poop, who would they think is in charge?",
    "I don't think twice about picking up my dog's poop, but if another dog's poop is next to it, I think, 'Eww, dog poop!",
    "Outside of a dog, a book is a man's best friend. Inside of a dog it's too dark to read.",
    "You can say any foolish thing to a dog, and the dog will give you a look that says, 'Wow, you're right! I never would've thought of that!'",
    "Dogs teach us a very important lesson in life: The mailman is not to be trusted",
    "A well trained dog will make no attempt to share your lunch. He will just make you feel so guilty that you cannot enjoy it." ,
    "You can trust your dog to guard your house but never trust your dog to guard your sandwich.",
    "I once decided not to date a guy because he wasn't excited to meet my dog. I mean, this was like not wanting to meet my mother.",
    "The average dog is a nicer person than the average person.",
    "My dog is worried about the economy because Alpo is up to $3.00 a can. That's almost $21.00 in dog money.",
    "If your dog is fat, you aren't getting enough exercise.",
    "No home decor is complete without dog hair.",
    "The best therapist has fur and four legs.",
    "Whoever said you can't buy happiness forgot about puppies.",
    "Without my dog my wallet would be full my house would be clean but my heart would be empty.",
    "Nothing in the world is friendlier than a wet dog.",
    "If you want the best seat in the house, you'll have to move the dog.",
    "Every snack you make, every meal you bake, every bite you take…I'll be watching you.",
    "This home is filled with love and dog hair.",
    "Beware! Dog can't hold its licker.",
    "Dogs are like potato chips. You can't have just one.",
    "Life without a dog is like an unsharpened pencil. It has no point.",
    "What I like most about people is their dogs.",
    "Less people, more dogs.",
    "Dogs are my favorite people.",
    "The only person who understands me is my dog.",
    "I don't who care who dies in the movie, as long as the dog lives.",
    "I am one dog short of crazy.",
    "If our dog doesn't like you, we probably won't either.",
    "Choosing a dog may be the only chance you get to pick a relative.",
    "Leave me alone – I'm only speaking to dogs today.",
    "The more people I meet, the more I love my dog.",
    "When I die my dog gets everything."
];

function randomRange(min, max) {
    return Math.random() * (max - min) + min;
}

function fetchFun(){
fetch('https://dog.ceo/api/breeds/image/random')
.then(response => response.json())
.then(data => {
    const response = data.message;

    const startIndex = response.indexOf('breeds/') + 'breeds/'.length;
    const endIndex = response.indexOf('/', startIndex);
    const breedInfo = response.slice(startIndex, endIndex);

    const hyphenIndex = breedInfo.indexOf('-');
    const breedPrefix = breedInfo.slice(0, hyphenIndex);
    const breedSuffix = breedInfo.slice(hyphenIndex + 1);
    if (breedInfo.includes('-')) {
        dogBreed[0].textContent = `Breed : ${breedSuffix} ${breedPrefix}`;
    }
    else{
        dogBreed[0].textContent = `Breed : ${breedSuffix}`;
    }
    dogImg[0].src = data.message;

    const randomQuote = Math.floor(randomRange(0, arrayQuotes.length));
    dogQuote[0].textContent = arrayQuotes[randomQuote];
})
.catch(error => {
    console.error('Error:', error);
});}



fetchBtn[0].addEventListener('click', fetchFun);



