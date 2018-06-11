import Page from './pageObject';
fixture `My first fixture`
 .page `https://devexpress.github.io/testcafe/example`;

const page = new Page();
const myName = 'Adrian';
const notMyName = 'Paul';

test('My first test for the INPUT box', async t => {
    await t
        .typeText(page.nameInput, myName)
        .click(page.submitButton)
        .expect(page.articleHeader.innerText).eql('Thank you, ' + myName + '!');
});