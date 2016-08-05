import React from 'react'
import { Router, Route, IndexRoute, useRouterHistory } from 'react-router'
import {createHashHistory} from 'history'

import App from './containers/app'
import ProductsContainer from './containers/product-page'
import CartContainer from './containers/cart-page'
import Home from './containers/home-page'

export default class AppRouters extends React.Component {
	const appHistory = useRouterHistory(createHashHistory)({ queryKey: false });

	render() {
		return (
			<Router history={ appHistory }>
		   		<Route path="/" component={ App } >
			      	<IndexRoute component={ Home } />
			      	<Route path="/productInfo" component={ ProductsContainer } />
			      	<Route path="/cart" component={ CartContainer } />
		    	</Route>
	  		</Router>
		)
	}
}
