import React from "react";
import {Route, Redirect, Switch} from "react-router-dom";
import AuthPage from "../authPage/AuthPage";
import TerminalPage from "../terminalPage/TerminalPage";
import IdPage from "../customerPage/IdPage";
import CustomersPage from "../customerPage/CustomersPage";
import NotFoundPage from "../noMatch/NotFoundPage";

const Routing = (props) => {

    const {
        isAuthenticated,
        getAvatar,
        data,
        isCheating,
        addTerminal,
        deleteItem,
        terminalItems
    } = props;

    if (isAuthenticated) {
        return (
            <Switch>
                <Route path="/auth">
                    <Redirect to="/terminal" />
                </Route>
                <Route path="/terminal">
                    <TerminalPage
                    addTerminal={addTerminal}
                    deleteItem={deleteItem}
                    terminalItems={terminalItems}
                    />
                </Route>
                <Route path="/customers/:customerId">
                    <IdPage data={data}/>
                </Route>
                <Route exact path="/customers">
                    <CustomersPage data={data}/>
                </Route>
                <Route path="*">
                    <NotFoundPage />
                </Route>
            </Switch>
        )
    } else {
        return (
            <Switch>
                <Route exact path="/auth">
                    <AuthPage getAvatar={getAvatar} isCheating={isCheating}/>
                </Route>
                <Redirect to={'/auth'}/>
            </Switch>
        )
    }
}

export default Routing;