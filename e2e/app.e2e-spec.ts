import { AprendendoInglesAppPage } from './app.po';

describe('aprendendo-ingles-app App', () => {
  let page: AprendendoInglesAppPage;

  beforeEach(() => {
    page = new AprendendoInglesAppPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
