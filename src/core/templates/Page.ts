interface TextObject {
  title: string;
}

abstract class Page {
  protected container: HTMLElement;
  protected textObject!: TextObject;

  constructor(id: string) {
    this.container = document.createElement("div");
    this.container.id = id;
  }

  protected createHeaderTitle(text: string) {
    const headerTitle = document.createElement("h1");
    headerTitle.innerText = text;
    return headerTitle;
  }

  render() {
    if (this.textObject) {
      const title = this.createHeaderTitle(this.textObject.title);
      this.container.append(title);
    }

    return this.container;
  }
}

export default Page;
