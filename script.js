function toggleMod() {
  const html = document.documentElement
  html.classList.toggle("light")

  //pegar a tag img
  const img = document.querySelector("#profile img")

  //substituir a imagem
  if (html.classList.contains("light")) {
    //se tiver light mode,adicionar a imagem light
    img.setAttribute("src", "./assets/DouglasL.png")
  } else {
    //se tiver sem light mode, manter a imagem normal
    img.setAttribute("src", "./assets/DouglasB.png")
  }
}

const obj = {
  prop: {
    name: "Manual do Dev",
    info: {
      youtube: "/manualdodev",
      url: { value: "" },
    },
  },
}
