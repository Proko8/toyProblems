encode = (string) => {
    let arr = string.split('');
    for(var i = 0; i < arr.length; i++){
        if(arr[i] === 'a'){
            arr[i] = '1';
        }
        if(arr[i] === 'e'){
            arr[i] = '2';
        }
        if(arr[i] === 'i'){
            arr[i] = '3';
        }
        if(arr[i] === 'o'){
            arr[i] = '4';
        }
        if(arr[i] === 'u'){
            arr[i] = '5';
        }
    }
    return arr.join('');
}

decode = (string) => {
    let arr = string.split('');
    for(var i = 0; i < arr.length; i++){
        if(arr[i] === '1'){
            arr[i] = 'a';
        }
        if(arr[i] === '2'){
            arr[i] = 'e';
        }
        if(arr[i] === '3'){
            arr[i] = 'i';
        }
        if(arr[i] === '4'){
            arr[i] = 'o';
        }
        if(arr[i] === '5'){
            arr[i] = 'u';
        }
    }
    return arr.join('');
}