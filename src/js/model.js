import { API_GET_QUOTES, API_SAVE_QUOTES, NUMBER_QUOTES_TO_LOAD } from "./config";

// the main database of the application
export const state = {
    quotes: []
};

// function loads quotes from an external server and places the data in the state
export const loadQuotes = async function (type) {
    try {
        const res = await fetch(`${API_GET_QUOTES}/quotes/page/1`);
        const data = await res.json();
        data.length = NUMBER_QUOTES_TO_LOAD;
        const newData = data.map((quote, index) => {
            return Object.assign({
                index: index +1,
                type: type
            }, quote);
        });
        state.quotes = newData;
    } catch (err) {
        throw err;
    }
};

// function passes a quote from the list to the panel or from the panel to the list in state
export const moveQuotes = function (id, type) {
    const index = state.quotes.findIndex(quote => quote.id === id);
    state.quotes[index].type = type;
};

// function sends the quotes from the list or panel to an external server
export const sendQuotes = async function (type) {
    try {
        const res = await fetch(`${API_SAVE_QUOTES}/quotes`, {
            method: 'POST',
            body: JSON.stringify({
                quotes: state.quotes.filter(quote => quote.type === type)
            })
        });
        const data = await res.json();
        return data;
    } catch (err) {
        throw err;
    }
};