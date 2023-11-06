// function rec(n)
// {
//     if(n==0){
//         recurse();
//     }
//     console.log(n)
//     return rec(n-1)
// }
// rec(10)
// function recurse(n)
// {
//     console.log(n)
//     temp = n-1
//     if(n>0)
//     {
//         recurse(temp)
//     }
// }
// recurse(100)
function regx(value)
{
    let reg = /hello/
    return reg.test(value);
}
console.log(regx('world hello'));
