import panelQuotesView from "./view/panelQuotesView";
import listQuotesView from "./view/listQuotesView";
import { controllerQuote, moveQuote, sendQuotes } from "./controller";

// The init function whose function is to run the application
(async () => {
    // Loading the main controller of the quotes which activates all initial actions
    await controllerQuote();
    listQuotesView.addHandlerClick((e) => {
        const id = e.target.id;
        if(id) {
            moveQuote(id, 'panel');
        }
    });
    panelQuotesView.addHandlerDoubleClick((e) => {
        const id = e.target.id;
        if(id) {
            moveQuote(id, 'list');
        }
    });
    panelQuotesView.addHandlerSendQuotes(sendQuotes);
})();