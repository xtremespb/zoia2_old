import React, { Component } from 'react';

import './admin.css';

class AdminPanel extends Component {
    resizeNav = () => {
        document.getElementById('z2a_nav_wrap').style.height = `${window.innerHeight - 64}px`;
    }

    constructor(props) {
        super(props);
    }

    componentDidMount = () => {
        window.onresize = this.resizeNav;
        this.resizeNav();
    }

    render = () => (<>
        <div>
            <nav className="uk-navbar-container uk-dark" uk-navbar="true" uk-sticky="true">
                <div className="uk-navbar-left">
                    <div className="uk-navbar-item uk-logo">
                        <a href=""><img src="/zoia/logo.png" width="83" height="27" alt="" /></a>
                    </div>
                </div>
                <div className="uk-navbar-right">
                    <ul className="uk-navbar-nav">
                        <li>
                            <a href="#">username</a>
                            <div className="uk-navbar-dropdown" uk-dropdown="mode:click;offset:-10">
                                <ul className="uk-nav uk-navbar-dropdown-nav">
                                    <li><a href="">Log Out</a></li>
                                </ul>
                            </div>
                        </li>
                    </ul>
                </div>
            </nav>
            <div className="uk-grid-collapse uk-grid">
                <div className="uk-width-small z2a-navleft-column-wrap">
                    <div>
                        <div id="z2a_nav_wrap">
                            <div className="z2a-navleft">
                                <ul className="uk-nav uk-nav-default">
                                    <li><a href="">Item</a></li>
                                    <li><a href=""><span uk-icon="search" />&nbsp;Another Item 1</a></li>
                                    <li><a href="">Another Item 2</a></li>
                                    <li><a href="">Another Item 3</a></li>
                                    <li><a href="">Another Item 4</a></li>
                                    <li><a href="">Another Item 5</a></li>
                                    <li><a href="">Another Item 6</a></li>
                                    <li><a href="">Another Item 7</a></li>
                                    <li><a href="">Another Item 8</a></li>
                                    <li><a href="">Another Item 9</a></li>
                                    <li><a href="">Another Item 10</a></li>
                                    <li><a href="">Another Item 11</a></li>
                                    <li><a href="">Another Item 12</a></li>
                                    <li><a href="">Another Item 13</a></li>
                                    <li><a href="">Another Item 14</a></li>
                                    <li><a href="">Another Item 15</a></li>
                                    <li><a href="">Another Item 16</a></li>
                                    <li><a href="">Another Item 17</a></li>
                                    <li><a href="">Another Item 18</a></li>
                                    <li><a href="">Another Item 19</a></li>
                                    <li><a href="">Another Item 20</a></li>
                                    <li><a href="">Another Item 21</a></li>
                                    <li><a href="">Another Item 22</a></li>
                                    <li><a href="">Another Item 23</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="uk-width-expand">
                    <div className="z2a-content-wrap">
                        {this.props.children}
                        <p>Only one class will come to effect, depending on the style you are using. For example, when using a style with a light background, you can only apply the .uk-light class to optimize content on dark backgrounds, as text will already be displayed in a dark color on light backgrounds — and vice versa.</p>
                        <p>Only one class will come to effect, depending on the style you are using. For example, when using a style with a light background, you can only apply the .uk-light class to optimize content on dark backgrounds, as text will already be displayed in a dark color on light backgrounds — and vice versa.</p>
                        <p>Only one class will come to effect, depending on the style you are using. For example, when using a style with a light background, you can only apply the .uk-light class to optimize content on dark backgrounds, as text will already be displayed in a dark color on light backgrounds — and vice versa.</p>
                        <p>Only one class will come to effect, depending on the style you are using. For example, when using a style with a light background, you can only apply the .uk-light class to optimize content on dark backgrounds, as text will already be displayed in a dark color on light backgrounds — and vice versa.</p>
                        <p>Only one class will come to effect, depending on the style you are using. For example, when using a style with a light background, you can only apply the .uk-light class to optimize content on dark backgrounds, as text will already be displayed in a dark color on light backgrounds — and vice versa.</p>
                        <p>Only one class will come to effect, depending on the style you are using. For example, when using a style with a light background, you can only apply the .uk-light class to optimize content on dark backgrounds, as text will already be displayed in a dark color on light backgrounds — and vice versa.</p>
                        <p>Only one class will come to effect, depending on the style you are using. For example, when using a style with a light background, you can only apply the .uk-light class to optimize content on dark backgrounds, as text will already be displayed in a dark color on light backgrounds — and vice versa.</p>
                        <p>Only one class will come to effect, depending on the style you are using. For example, when using a style with a light background, you can only apply the .uk-light class to optimize content on dark backgrounds, as text will already be displayed in a dark color on light backgrounds — and vice versa.</p>
                        <p>Only one class will come to effect, depending on the style you are using. For example, when using a style with a light background, you can only apply the .uk-light class to optimize content on dark backgrounds, as text will already be displayed in a dark color on light backgrounds — and vice versa.</p>
                        <p>Only one class will come to effect, depending on the style you are using. For example, when using a style with a light background, you can only apply the .uk-light class to optimize content on dark backgrounds, as text will already be displayed in a dark color on light backgrounds — and vice versa.</p>
                        <p>Only one class will come to effect, depending on the style you are using. For example, when using a style with a light background, you can only apply the .uk-light class to optimize content on dark backgrounds, as text will already be displayed in a dark color on light backgrounds — and vice versa.</p>
                        <p>Only one class will come to effect, depending on the style you are using. For example, when using a style with a light background, you can only apply the .uk-light class to optimize content on dark backgrounds, as text will already be displayed in a dark color on light backgrounds — and vice versa.</p>
                        <p>Only one class will come to effect, depending on the style you are using. For example, when using a style with a light background, you can only apply the .uk-light class to optimize content on dark backgrounds, as text will already be displayed in a dark color on light backgrounds — and vice versa.</p>
                        <p>Only one class will come to effect, depending on the style you are using. For example, when using a style with a light background, you can only apply the .uk-light class to optimize content on dark backgrounds, as text will already be displayed in a dark color on light backgrounds — and vice versa.</p>
                        <p>Only one class will come to effect, depending on the style you are using. For example, when using a style with a light background, you can only apply the .uk-light class to optimize content on dark backgrounds, as text will already be displayed in a dark color on light backgrounds — and vice versa.</p>
                        <p>Only one class will come to effect, depending on the style you are using. For example, when using a style with a light background, you can only apply the .uk-light class to optimize content on dark backgrounds, as text will already be displayed in a dark color on light backgrounds — and vice versa.</p>
                        <p>Only one class will come to effect, depending on the style you are using. For example, when using a style with a light background, you can only apply the .uk-light class to optimize content on dark backgrounds, as text will already be displayed in a dark color on light backgrounds — and vice versa.</p>
                        <p>Only one class will come to effect, depending on the style you are using. For example, when using a style with a light background, you can only apply the .uk-light class to optimize content on dark backgrounds, as text will already be displayed in a dark color on light backgrounds — and vice versa.</p>
                        <p>Only one class will come to effect, depending on the style you are using. For example, when using a style with a light background, you can only apply the .uk-light class to optimize content on dark backgrounds, as text will already be displayed in a dark color on light backgrounds — and vice versa.</p>
                        <p>Only one class will come to effect, depending on the style you are using. For example, when using a style with a light background, you can only apply the .uk-light class to optimize content on dark backgrounds, as text will already be displayed in a dark color on light backgrounds — and vice versa.</p>
                        <p>Only one class will come to effect, depending on the style you are using. For example, when using a style with a light background, you can only apply the .uk-light class to optimize content on dark backgrounds, as text will already be displayed in a dark color on light backgrounds — and vice versa.</p>
                        <p>Only one class will come to effect, depending on the style you are using. For example, when using a style with a light background, you can only apply the .uk-light class to optimize content on dark backgrounds, as text will already be displayed in a dark color on light backgrounds — and vice versa.</p>
                        <p>Only one class will come to effect, depending on the style you are using. For example, when using a style with a light background, you can only apply the .uk-light class to optimize content on dark backgrounds, as text will already be displayed in a dark color on light backgrounds — and vice versa.</p>
                        <p>Only one class will come to effect, depending on the style you are using. For example, when using a style with a light background, you can only apply the .uk-light class to optimize content on dark backgrounds, as text will already be displayed in a dark color on light backgrounds — and vice versa.</p>
                        <p>Only one class will come to effect, depending on the style you are using. For example, when using a style with a light background, you can only apply the .uk-light class to optimize content on dark backgrounds, as text will already be displayed in a dark color on light backgrounds — and vice versa.</p>
                    </div>
                </div>
            </div>
        </div>
    </>);
}

export default AdminPanel;
