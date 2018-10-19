
// 11: frirstLast6
function firstLast6(arr) {
    var first = arr[0];
    var last = arr[arr.length - 1];
    if (first == 6 || last == 6) {
        return true;
    } else {
        return false;
    }
}
// 12: has 23

function has23(arr){
    if(arr.length ==2){
        if(arr.includes(2) || arr.includes(3)){
            return true;
        }else{
            return false;
        }
    }
}

// 13: fix 23
function fix23(arr){
    for(var i=0;i < arr.length; i++){
        if(arr[i]==2 && arr[i+1]==3){
            arr[i+1]=0;
        }
    }
    return arr;
}

// 14: countYZ
function countYZ(str) {
    var x = 0;
    str=str.toLowerCase();
    for(var i = 0; i < str.length; i++) {
        if ((str[i] == "y" || str[i] == "z") && str[i + 1] == " ") {
            x = x + 1;
        }
        if ((str[i] == "y" || str[i] == "z") && i  == str.length - 1) {
            x = x + 1;
        }
    }
    return x;
}

// 15: endOther

function endOther(str1,str2){
    str1=str1.toLowerCase();
    str2=str2.toLowerCase();
    if(str1.endsWith(str2) || str2.endsWith(str1)){
        return true;
    }else{
        return false;
    }
}

//16: starOut

function starOut(str) {
    if (str.includes("*")) {
        var answer = "";
        for (var i = 0; i < str.length; i++){
            if(str[i] != "*" && str[i+1] != "*" && str[i-1] != "*"){
                answer = answer + str.charAt(i);
            }
        }
    }else {
        answer = str;
    }
    return answer;
}

// 17: getSandWich
function getSandwich(str){
    var answer = " ";
    if(str.includes("bread")){
        var bread1= str.indexOf("bread");
        var bread2 = str.lastIndexOf("bread");
        var newString = str.slice(bread1+5,bread2);
        var newBread = newString.indexOf("bread");
        answer = newString;
    }else{
        answer="";
    }
    return answer;
}

// 18: canBalance

function canBalance(arr) {
    var count = 0;
    var count2 = 0;
    for (var i = 0; i < arr.length; i++) {
        count = count + arr[i];
        for (var j = i + 1; j < arr.length; j++) {
            count2 = count2 + arr[j];
        }

        if (count == count2) {
            return true;
        }else{
            count2=0;
        }

    }

    return false;

}

//19: countClumps

function countClumps(arr){
    var count=0;
    for(var i = 0; i < arr.length;i++){
        if(arr[i]==arr[i+1]){
             for(var x = i+1; x < arr.length;x++){
                 if(arr[i]==arr[x] && arr[i] !=arr[x+1]){
                 count=count+1;
             }else{
                 break;
                 }
             }
        }
    }
    return count;
}

//20 : evenlySpaced

function evenlySpaced(num1,num2,num3){
    var answer="";
    var arr= [num1, num2, num3];
    var order= arr.sort(function(a,b)
    {return a-b;

    })
    var first= order[0];
    var second= order[1];
    var third = order[2];
        if(second - first == third-second){
        answer = true;
        }else{
            answer = false;
        }
        return answer;
}






//function runs on click and outputs test cases you create to page
function tester() {
    document.getElementById("output").innerHTML += evenlySpaced([4, 6, 2],true );

}