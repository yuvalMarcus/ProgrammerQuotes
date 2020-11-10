
class SendQuotesView {

    constructor() {

        this._parentElement = document.querySelector('.send-quotes-data');
    }

    renderSpinner() {
        const markup = `<div id="quotes-panel-spinner"><span></span><span></span><span></span><span></span></div>`;
        this._clear();
        this._parentElement.insertAdjacentHTML('beforeend', markup);
    }

    renderError(message) {
        const markup = this._generateMarkup('danger', message);
        this._clear();
        this._parentElement.insertAdjacentHTML('beforeend', markup);
    }

    renderMessage(message, type) {
        let className;
        if(type === 'success') {
            className = 'success';
        }
        if(type === 'warning') {
            className = 'warning';
        }
        const markup = this._generateMarkup(className, message);
        this._clear();
        this._parentElement.insertAdjacentHTML('beforeend', markup);
    }

    _generateMarkup(className, message) {
        return `
         <span class="alert alert-${className} display-none on">${message}</span>
        `;
    }

    _clear() {
        this._parentElement.innerHTML = '';
    }

}

export default new SendQuotesView();