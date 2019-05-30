module.exports = function main(num_str) {
    // console.log("Debug Info");
    // return 'Hello World!';
    let arr = ["._.|.||_|", ".....|..|", "._.._||_.", 
        "._.._|._|", "...|_|..|", "._.|_.._|", 
        "._.|_.|_|", "._...|..|", "._.|_||_|", 
        "._.|_|..|"]
    let l = num_str.length
    let out = ""
    for (let i = 0; i < 9; i += 3) {
        for (let j = 0; j < l; j++) {
            let index = num_str[j]
            let cur = arr[index].substr(i, 3)
            out += cur
            if (j != l - 1) {
                out += " "
            }
        }
        out += "\n"
    }
    return out
};
