import Page from "./core/templates/Page";
import ErrorPage from "./pages/Error";
import MainPage from "./pages/Main";
import SettingsPage from "./pages/Settings";
import StatisticsPage from "./pages/Statistics";
import Header from "./core/compontents/Header";

export const enum PageIds {
  MAIN_PAGE = "main",
  SETTINGS_PAGE = "settings",
  STATISTICS_PAGE = "statistics",
}

class App {
  private container: HTMLElement | null;
  private pageContainer: HTMLElement;
  // private initialPage: MainPage;
  private header: Header;

  public renderPage(idPage: string) {
    if (!this.container || !this.pageContainer) {
      console.error("[app] container isn't defined");
      return;
    }

    this.pageContainer.innerHTML = "";
    let page: Page | null = null;

    switch (idPage) {
      case PageIds.MAIN_PAGE:
        page = new MainPage(PageIds.MAIN_PAGE);
        break;

      case PageIds.SETTINGS_PAGE:
        page = new SettingsPage(PageIds.SETTINGS_PAGE);
        break;

      case PageIds.STATISTICS_PAGE:
        page = new StatisticsPage(PageIds.STATISTICS_PAGE);
        break;

      default:
        page = new ErrorPage(idPage);
        break;
    }

    if (page) {
      const pageHTML = page.render();
      this.pageContainer.append(pageHTML);
      this.container.append(this.pageContainer);
    }
  }

  private enableRouteChange() {
    const routerHandler = () => {
      const hash = window.location.hash.replace("#", "");

      if (!hash) return this.renderPage("main");

      this.renderPage(hash);
    };

    window.addEventListener("hashchange", routerHandler);
    window.addEventListener("load", routerHandler);
  }

  constructor() {
    this.container = document.getElementById("app");
    this.pageContainer = document.createElement("div");
    this.pageContainer.id = "pageContainer";
    this.header = new Header("header", "header");
  }

  run() {
    this.container && this.container.append(this.header.render());
    this.enableRouteChange();
  }
}

export default App;
