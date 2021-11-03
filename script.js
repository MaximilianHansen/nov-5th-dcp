
const string1 = "()())()"
const string2 = ")("

const string3 = "((()()("


function handleString(e) {
    let chrCount = 0;
    let text = e;
    let i = 0
    while ( i < e.length) {
        if (text.substr(i, 1) === ")" ) { 
            chrCount++ ;
            //console.log(chrCount, i);
            i++ ;
        }
        else {
            if (text.substr(i+1 , 1) === ")" && i != text.length) {
                i = i + 2
            } 
        else {
            chrCount++ 
            //console.log(chrCount, i, "option 3")
            i++
        }
        }
    } 
    
    console.log(`remove ${chrCount}`)

}