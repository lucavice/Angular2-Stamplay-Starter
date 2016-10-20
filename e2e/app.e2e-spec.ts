import { AngularStamplayStarterPage } from './app.po';

describe('angular-stamplay-starter App', function() {
  let page: AngularStamplayStarterPage;

  beforeEach(() => {
    page = new AngularStamplayStarterPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
