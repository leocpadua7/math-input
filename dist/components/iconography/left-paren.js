'use strict';

var PropTypes = require('prop-types');
/**
 * An autogenerated component that renders the LEFT_PAREN iconograpy in SVG.
 *
 * Generated with: https://gist.github.com/crm416/3c7abc88e520eaed72347af240b32590.
 */
var React = require('react');

var LeftParen = React.createClass({
    displayName: 'LeftParen',

    propTypes: {
        color: PropTypes.string.isRequired
    },

    render: function render() {
        return React.createElement(
            'svg',
            { width: '48', height: '48', viewBox: '0 0 48 48' },
            React.createElement(
                'g',
                { fill: 'none', fillRule: 'evenodd' },
                React.createElement('path', { fill: 'none', d: 'M0 0h48v48H0z' }),
                React.createElement('path', { fill: 'none', d: 'M12 12h24v24H12z' }),
                React.createElement('path', { d: 'M26 14c-4 6-4 14 0 20', stroke: this.props.color, strokeWidth: '2', strokeLinecap: 'round', strokeLinejoin: 'round' })
            )
        );
    }
});

module.exports = LeftParen;