import 'babel-polyfill'
import React from 'react'
import { render } from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import logger from 'redux-logger'
import thunk from 'redux-thunk'
import reducer from './reducers'
import { getAllProducts } from './actions'

import { Router, Route, IndexRoute, useRouterHistory } from 'react-router'
import {createHashHistory} from 'history'

import App from './containers/App'
import ProductsContainer from './containers/product-page'
import CartContainer from './containers/cart-page'
import Home from './containers/home-page'

const middleware = process.env.NODE_ENV === 'production' ?
  [ thunk ] :
  [ thunk, logger() ]

const appHistory = useRouterHistory(createHashHistory)({ queryKey: false });//it is working when user checked the flush

const store = createStore(
  reducer,
  applyMiddleware(...middleware)
)

store.dispatch(getAllProducts())
console.log("now state is: ")
console.log(store.getState())
render(
  <Provider store={ store } >
   	<Router history={ appHistory }>
   		<Route path="/" component={ App } >
	      	<IndexRoute component={ Home } />
	      	<Route path="/productInfo" component={ ProductsContainer } />
	      	<Route path="/cart" component={ CartContainer } />
    	</Route>
	</Router>
  </Provider>,
  document.getElementById('root')
)
