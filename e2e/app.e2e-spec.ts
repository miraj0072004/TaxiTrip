import { TaxiTripPage } from './app.po';

describe('taxi-trip App', function() {
  let page: TaxiTripPage;

  beforeEach(() => {
    page = new TaxiTripPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
