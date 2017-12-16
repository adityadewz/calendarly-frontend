import { CalendarlyPage } from './app.po';

describe('calendarly App', () => {
  let page: CalendarlyPage;

  beforeEach(() => {
    page = new CalendarlyPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
