import Page from "../core/templates/Page";

class SettingsPage extends Page {
  protected textObject = {
    title: "SettingsPage",
  };

  constructor(id: string) {
    super(id);
  }
}

export default SettingsPage;
