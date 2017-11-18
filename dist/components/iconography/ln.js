"use strict";

/**
 * An autogenerated component that renders the LN iconograpy in SVG.
 *
 * Generated with: https://gist.github.com/crm416/3c7abc88e520eaed72347af240b32590.
 */
var React = require('react');

var Ln = React.createClass({
    displayName: "Ln",

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
                React.createElement("path", { d: "M20.836 29v-9.338h-1.778V29h1.778zm8.106 0v-4.774c0-1.316-.714-2.156-2.198-2.156-1.106 0-1.932.532-2.366 1.05v-.882H22.6V29h1.778v-4.55c.294-.406.84-.798 1.54-.798.756 0 1.246.322 1.246 1.26V29h1.778z", fill: this.props.color })
            )
        );
    }
});

module.exports = Ln;