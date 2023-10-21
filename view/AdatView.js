class AdatView {
  constructor(szoveg, szulo) {
    this.szulo = szulo;
    this.pElem = this.szulo.children("p");
    this.buttonElem = this.szulo.children("button");
    this.szoveg = szoveg;
    this.setPelem(this.szoveg);
    this.buttonElem.on("click", ()=>{
        console.log("dirr")
        this.#esemenyTrigger("adatKeres")
    })
  }
  setPelem(ertek) {
    this.pElem.append(ertek);
  }

  #esemenyTrigger(esemenynev){
    const e = new CustomEvent(esemenynev, {detail:this})
    window.dispatchEvent(e)
}
}

export default AdatView;
