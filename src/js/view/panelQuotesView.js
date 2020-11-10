
class PanelQuotesView {

    constructor() {

        this._parentElement = document.querySelector('.content.quotes-panel');
        this._data;
    }

    render(data) {
        this._data = data;
        this._clear();
        this._data.forEach((quote, index) => {
            this._parentElement.insertAdjacentHTML('beforeend', this._generateMarkup(this._data[index]));
        });
    }

    _generateMarkup(quote) {
        return `
         <div>
            <p class="quote">${quote.en}</p>
            <span class="author">${quote.author}</span>
            <span class="rating">Rating: ${quote.rating}</span>
            <div class="mask" id="${quote.id}">
            </div>
         </div>
        `;
    }

    _clear() {
        this._parentElement.innerHTML = '';
    }

    addHandlerDoubleClick(handler) {
        document.querySelector('.content.quotes-panel').addEventListener('dblclick', handler);
    }

    addHandlerSendQuotes(handler) {
        document.querySelector('#sendQuotes').addEventListener('click', handler);
    }
}

export default new PanelQuotesView();