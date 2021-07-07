import Component from "../templates/Component";
import { PageIds } from "../../App";

class Header extends Component {
  constructor(tagName: string, className: string) {
    super(tagName, className);
  }

  private Buttons = [
    {
      id: PageIds.MAIN_PAGE,
      text: "Main Page",
    },
    {
      id: PageIds.SETTINGS_PAGE,
      text: "Settings Page",
    },
    {
      id: PageIds.STATISTICS_PAGE,
      text: "Statistics Page",
    },
  ];

  renderPageButtons() {
    this.Buttons.forEach((button) => {
      const buttonHTML = document.createElement("a");
      buttonHTML.href = `#${button.id}`;
      buttonHTML.innerText = button.text;
      this.container.append(buttonHTML);
    });
  }

  render() {
    this.renderPageButtons();
    return this.container;
  }
}

export default Header;
