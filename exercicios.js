document.write("1) <br>")
let a = 30.345, b = 154.666, c = 50.888, d = 089.52
document.write("a) ", a ," -> ", parseInt(a) , "<br>")
document.write("b) ", b ," -> ", parseInt(b) , "<br>")
document.write("c) ", c ," -> ", parseInt(c) , "<br>")
document.write("d) ", d ," -> ", parseInt(d) , "<br>")
document.write("<br>")

document.write("2) <br>")
let a2 = "30.345", b2 = "154.666", c2 = "50.888", d2 = "089.52"
document.write("a) ", a2 ,typeof(a2), " -> ", parseFloat(a2), typeof(parseFloat(a2)), "<br>")
document.write("b) ", b2 ,typeof(b2), " -> ", parseFloat(b2), typeof(parseFloat(b2)), "<br>")
document.write("c) ", c2 ,typeof(c2), " -> ", parseFloat(c2), typeof(parseFloat(c2)), "<br>")
document.write("d) ", d2 ,typeof(d2), " -> ", parseFloat(d2), typeof(parseFloat(d2)), "<br>")
document.write("<br>")

document.write("3) <br>")
let a3 = "A MAIOR TECNOLOGIA", b3 = "HARDWARE", c3 = "FIAP A MELHOR FACULDADE", d3 = "TENCOLOGIA"
document.write("a) ", a3, ": ", a3.length, "<br>")
document.write("b) ", b3, ": ", b3.length, "<br>")
document.write("c) ", c3, ": ", c3.length, "<br>")
document.write("d) ", d3, ": ", d3.length, "<br>")
document.write("<br>")

document.write("4) <br>")
let a4 = "A MAIOR TECNOLOGIA", b4 = "HARDWARE FAZ O COMPUTADOR", c4 =  "FIAP A MELHOR FACULDADE", d4 = "TENCOLOGIA E INOVAÇÃO"
document.write("-Primeira ocorrência da letra 'o'. <br>")
document.write(a4, ": ", a4.indexOf("O"), "<br>")
document.write(b4, ": ", b4.indexOf("O"), "<br>")
document.write(c4, ": ", c4.indexOf("O"), "<br>")
document.write(d4, ": ", d4.indexOf("O"), "<br>")
document.write("<br>")

document.write("5) <br>")
document.write("-Última ocorrência da letra 'o'. <br>")
document.write(a4, ": ", a4.lastIndexOf("O"), "<br>")
document.write(b4, ": ", b4.lastIndexOf("O"), "<br>")
document.write(c4, ": ", c4.lastIndexOf("O"), "<br>")
document.write(d4, ": ", d4.lastIndexOf("O"), "<br>")