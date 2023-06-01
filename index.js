class Formatter {
  //add static methods here
  static capitalize(string){
    return string.charAt(0).toUpperCase() + string.slice(1)
  }
 
  static sanitize(string){
    return string.replace( /[^A-Za-z0-9 '-]/g, '' )
  }

  static titleize(string){
    const strs = new Set(['THE', 'A', 'AN', 'BUT', 'OF', 'AND', 'FOR', 'AT', 'BY', 'FROM'])
    const sentence = string.split(" ").map((word) => 
    strs.has(word.toUpperCase())
    ? word.toLowerCase() : word[0].toUpperCase() + word.slice(1).split().map((letter) => letter.toLowerCase()).join(""))
    const newSentence = sentence.join(" ")
    return this.capitalize(newSentence)

  }
}




const strs = new Set(["ABOUT", "UNICORN", "TECHNOLOGIES"]),
sentence = "ANDRII IS GOOD IN JS TECHNOLOGIES",
res = sentence.split(" ").map((w) =>
strs.has(w.toUpperCase())
? w.toLowerCase()
: w[0].toUpperCase() + w.slice(1).split().map((c) => c.toLowerCase())
)
.join(" ");

console.log(res)