const arr = ["Hello", "Hi", "Hey", "Greetings" ];
const name = "Jobaer";
const message = ["how are you?", "how's going", "what's up?", "How's it going?", ]
for(let i=0;i<arr.length; i++)
{
    for(let j = 0; j<message.length ; j++)
    {
        console.log(`${arr[i]} ${name} , ${message[j]} `);
    }
}
console.log('finished');