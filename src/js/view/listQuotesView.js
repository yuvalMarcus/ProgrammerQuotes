
class ListQuotesView {

    constructor() {

        this._parentElement = document.querySelector('.content.quotes-list');
        this._data;
    }

    render(data) {
        this._data = data;
        this._clear();
        this._data.forEach((quote, index) => {
            this._parentElement.insertAdjacentHTML('beforeend', this._generateMarkup(index));
        });
    }

    renderSpinner() {
        const markup = `<div id="quotes-list-spinner"></div>`;
        this._clear();
        this._parentElement.insertAdjacentHTML('beforeend', markup);
    }

    renderError() {
        const markup = `<span class="error-text">Failed to connect to server</span>`;
        this._clear();
        this._parentElement.insertAdjacentHTML('beforeend', markup);
    }

    _generateMarkup(index) {
        return `
            <a id="${this._data[index].id}">Quote ${this._data[index].index}</a>
        `;
    }

    _clear() {
        this._parentElement.innerHTML = '';
    }

    addHandlerClick(handler) {
        document.querySelector('.content.quotes-list').addEventListener('click', handler);
    }
}

export default new ListQuotesView();