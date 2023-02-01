function decrypt(BASE64:string) {
    return atob(BASE64);
}

let BASE64:string = "cGljb0NURnt0aGVfbTN0YWRhdGFfMXNfbW9kaWZpZWR9"
console.log(decrypt(BASE64));