let BASE64:string = "";
function decrypt(BASE64:string) {
    return atob(BASE64);
}

console.log(decrypt(BASE64));

// cGljb0NURnt0aGVfbTN0YWRhdGFfMXNfbW9kaWZpZWR9