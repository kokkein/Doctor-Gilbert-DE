import { DoctorGilbertPage } from './app.po';

describe('Doctor-Dilbert-DEX App', () => {
  let page: DoctorGilbertPage;

  beforeEach(() => {
    page = new DoctorGilbertPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
