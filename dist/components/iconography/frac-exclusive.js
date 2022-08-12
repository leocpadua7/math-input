'use strict';

var PropTypes = require('prop-types');
/**
 * An autogenerated component that renders the FRAC_EXCLUSIVE iconograpy in SVG.
 *
 * Generated with: https://gist.github.com/crm416/3c7abc88e520eaed72347af240b32590.
 */
var React = require('react');

var FracExclusive = React.createClass({
    displayName: 'FracExclusive',

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
                React.createElement(
                    'g',
                    { transform: 'translate(12 12)' },
                    React.createElement('path', { fill: 'none', d: 'M0 0h24v24H0z' }),
                    React.createElement('path', { d: 'M13 16.997c0-.55.453-.997.997-.997h6.006c.55 0 .997.453.997.997v6.006c0 .55-.453.997-.997.997h-6.006c-.55 0-.997-.453-.997-.997v-6.006zM15 18h4v4h-4v-4z', fill: this.props.color }),
                    React.createElement('rect', { fill: this.props.color, x: '10', y: '11', width: '14', height: '2', rx: '1' }),
                    React.createElement('path', { d: 'M13 .997c0-.55.453-.997.997-.997h6.006c.55 0 .997.453.997.997v6.006c0 .55-.453.997-.997.997h-6.006c-.55 0-.997-.453-.997-.997V.997zM15 2h4v4h-4V2zM0 8.997C0 8.447.453 8 .997 8h6.006c.55 0 .997.453.997.997v6.006c0 .55-.453.997-.997.997H.997C.447 16 0 15.547 0 15.003V8.997zM2 10h4v4H2v-4z', fill: this.props.color })
                )
            )
        );
    }
});

module.exports = FracExclusive;