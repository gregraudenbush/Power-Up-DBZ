import { PowerappPage } from './app.po';

describe('powerapp App', () => {
  let page: PowerappPage;

  beforeEach(() => {
    page = new PowerappPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
