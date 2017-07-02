import { NgrxsamplePage } from './app.po';

describe('ngrxsample App', () => {
  let page: NgrxsamplePage;

  beforeEach(() => {
    page = new NgrxsamplePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
