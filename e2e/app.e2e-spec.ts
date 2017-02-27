import { BeFitPage } from './app.po';

describe('be-fit App', () => {
  let page: BeFitPage;

  beforeEach(() => {
    page = new BeFitPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
