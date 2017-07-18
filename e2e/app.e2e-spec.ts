import { ClaimLookupPage } from './app.po';

describe('claim-lookup App', () => {
  let page: ClaimLookupPage;

  beforeEach(() => {
    page = new ClaimLookupPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
