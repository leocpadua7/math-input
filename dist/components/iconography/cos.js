"use strict";

/**
 * An autogenerated component that renders the COS iconograpy in SVG.
 *
 * Generated with: https://gist.github.com/crm416/3c7abc88e520eaed72347af240b32590.
 */
var React = require('react');

var Cos = React.createClass({
    displayName: "Cos",

    propTypes: {
        color: React.PropTypes.string.isRequired
    },

    render: function render() {
        return React.createElement(
            "svg",
            { width: "48", height: "48", viewBox: "0 0 48 48" },
            React.createElement(
                "g",
                { fill: "none", fillRule: "evenodd" },
                React.createElement("path", { fill: "none", d: "M0 0h48v48H0z" }),
                React.createElement("path", { fill: "none", d: "M13 12h24v24H13z" }),
                React.createElement("path", { d: "M18.182 29.168c1.386 0 2.226-.602 2.674-1.232l-1.162-1.078a1.707 1.707 0 0 1-1.428.728c-1.078 0-1.834-.798-1.834-1.974s.756-1.96 1.834-1.96c.616 0 1.106.252 1.428.728l1.162-1.092c-.448-.616-1.288-1.218-2.674-1.218-2.086 0-3.584 1.47-3.584 3.542 0 2.086 1.498 3.556 3.584 3.556zm6.972 0c2.24 0 3.584-1.624 3.584-3.556 0-1.918-1.344-3.542-3.584-3.542-2.226 0-3.57 1.624-3.57 3.542 0 1.932 1.344 3.556 3.57 3.556zm0-1.582c-1.106 0-1.722-.91-1.722-1.974 0-1.05.616-1.96 1.722-1.96 1.106 0 1.736.91 1.736 1.96 0 1.064-.63 1.974-1.736 1.974zm7.336 1.582c1.876 0 2.926-.938 2.926-2.17 0-2.73-4.004-1.89-4.004-2.898 0-.378.42-.672 1.064-.672.826 0 1.596.35 2.002.784l.714-1.218c-.672-.532-1.582-.924-2.73-.924-1.778 0-2.772.994-2.772 2.128 0 2.66 4.018 1.75 4.018 2.87 0 .42-.364.728-1.134.728-.84 0-1.848-.462-2.338-.924l-.77 1.246c.714.658 1.848 1.05 3.024 1.05z", fill: this.props.color })
            )
        );
    }
});

module.exports = Cos;