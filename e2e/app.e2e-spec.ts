import { ShirtStorePage } from './app.po';

describe('shirt-store App', () => {
  let page: ShirtStorePage;

  beforeEach(() => {
    page = new ShirtStorePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
