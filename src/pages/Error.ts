import Page from "../core/templates/Page";

class ErrorPage extends Page {
  protected textObject = {
    title: "Error 404 - Page Not Found",
  };

  constructor(id: string) {
    super(id);
  }
}

export default ErrorPage;
