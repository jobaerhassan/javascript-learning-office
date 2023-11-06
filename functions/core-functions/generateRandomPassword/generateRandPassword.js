function getRandPass(len)
{
    //we dont take special characters for our password here.
    charSet = "abcdefghijklmnopqrstuvwxyz1234567890ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    randomString = ''
    for(var i= 0; i<len; i++){
        temp = Math.random();
        temp=temp*charSet.length;
        randomString+=charSet.charAt(temp);
    }
    return randomString;

}