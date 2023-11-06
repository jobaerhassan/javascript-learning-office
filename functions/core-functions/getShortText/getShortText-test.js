function getShortText(str,num)
{
    let n = str.length;
    if(str === null || str === undefined)
    {
        console.log("wrong input")
    }
    temp = str.substring(-2,num);
    console.log(temp);
}
getShortText("orangetoolz",5)
// getShortText("1234",3);