import React, { Component } from 'react'
import { Link, IndexLink } from 'react-router'
import styles from './style.css'

export default class Nav extends Component {

	render() {
		const ACTIVE = { color: 'white'}
		return (
			<div className={ styles.navBG }>
				<ul role="nav" className={ styles.ulStyle }>
					<li className={ styles.liStyle } ><IndexLink to="/" activeStyle={ ACTIVE } >首页</IndexLink></li>
					<span> | </span>
					<li className={ styles.liStyle }><Link to="/productInfo" activeStyle={ ACTIVE } >商城</Link></li>
					<span> | </span>
					<li className={ styles.liStyle }><Link to="/cart" activeStyle={ ACTIVE } >我的购物车</Link></li>
				</ul>
			</div>
		)
	}
}