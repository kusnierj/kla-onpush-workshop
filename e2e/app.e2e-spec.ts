import { OnpushWorkshopPage } from './app.po';

describe('onpush-workshop App', () => {
  let page: OnpushWorkshopPage;

  beforeEach(() => {
    page = new OnpushWorkshopPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
