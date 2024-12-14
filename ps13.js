function accum(s) {
	let str="";
    let count=1;
    let upper=true
    let strin=s.toLowerCase()
    for(let i=0;i<strin.length;i++){
        for(let j=0;j<count;j++){
            if(upper){
                if(i==0){
                    str+=strin[i].toUpperCase()
                    upper=false;
                }else{
                    str+="-"+strin[i].toUpperCase()
                    upper=false;
                }

            }else{
                str+=strin[i]
            }
        }
        count++;
        upper=true
    }
    return str;
}
console.log(accum("ZpglnRxqenU"))
// Question

// This time no story, no theory. The examples below
// show you how to write function accum:

// Examples:
// accum("abcd") -> "A-Bb-Ccc-Dddd"
// accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// accum("cwAt") -> "C-Ww-Aaa-Tttt"
// The parameter of accum is a string which
// includes only letters from a..z and A..Z.