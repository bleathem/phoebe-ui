import { PhoebeUiPage } from './app.po';

describe('phoebe-ui App', () => {
  let page: PhoebeUiPage;

  beforeEach(() => {
    page = new PhoebeUiPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
