import * as model from './model';
import listQuotesView from './view/listQuotesView';
import panelQuotesView from "./view/panelQuotesView";
import sendQuotesView from "./view/sendQuotesView";

// function is to move a quote from the list to the panel or from the panel to the list
export const moveQuote = (id, type) => {
    model.moveQuotes(id, type);
    const listQuotes = model.state.quotes.filter(quote => quote.type == 'list');
    listQuotesView.render(listQuotes);
    const panelQuotes = model.state.quotes.filter(quote => quote.type == 'panel');
    panelQuotesView.render(panelQuotes);
};

// function is to send the quotes from the list or panel to an external server
export const sendQuotes = async () => {

    // checks if panel is empty
    if(model.state.quotes.filter(quote => quote.type === 'panel').length === 0) {
        sendQuotesView.renderMessage('The quotes panel is empty', 'warning');
        return;
    }

    try {
        sendQuotesView.renderSpinner();
        const data = await model.sendQuotes('panel');
        if(data.success) {
            sendQuotesView.renderMessage('Succeeded in saving quotes', 'success');
        }
        if(!data.success) {
            sendQuotesView.renderError('Failed to save quotes');
        }
    } catch (err) {
        sendQuotesView.renderError('Failed to connect to server');
    }
};

// main controller of quote
export const controllerQuote = async () => {
    try {
        listQuotesView.renderSpinner();
        await model.loadQuotes('list');
        const listQuotes = model.state.quotes.filter(quote => quote.type == 'list');
        listQuotesView.render(listQuotes);
    } catch (err) {
        listQuotesView.renderError();
    }
};