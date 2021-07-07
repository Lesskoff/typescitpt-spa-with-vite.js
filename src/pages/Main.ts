import Page from "../core/templates/Page";

class MainPage extends Page {
  constructor(id: string) {
    super(id);
    this.textObject = {
      title: "MainPage",
    };
  }
}

export default MainPage;
