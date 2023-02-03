let mixed:string="\u53ca\u5176\u4ed6 \u5730\u7344\u306b\u884c\u304f ";
function UnicodeToString(mixed:string){
    let enc = encodeURIComponent(mixed)
    return decodeURIComponent(enc);
}
console.log(UnicodeToString(mixed))