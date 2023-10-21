import AdatView from "../view/AdatView.js";
import AdatModel from "../model/AdatModel.js";

class AdatController {
  constructor() {
    console.log("controller");
    this.adatView = new AdatView("Kattints a gombra!", $(".tartalom"));
    this.adatModel = new AdatModel("Dóra")
    $(window).on("adatKeres", (event) => {
      const miObjektumunk = event.detail;
      console.log(miObjektumunk);
      let szoveg = this.adatModel.koszon();
      this.adatView.setPelem(szoveg);
    });
  }
}

export default AdatController;
