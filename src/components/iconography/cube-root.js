const PropTypes = require('prop-types');
/**
 * An autogenerated component that renders the CUBE_ROOT iconograpy in SVG.
 *
 * Generated with: https://gist.github.com/crm416/3c7abc88e520eaed72347af240b32590.
 */
const React = require('react');

const CubeRoot = React.createClass({
    propTypes: {
        color: PropTypes.string.isRequired,
    },

    render() {
        return <svg width="48" height="48" viewBox="0 0 48 48"><g fill="none" fillRule="evenodd"><path fill="none" d="M0 0h48v48H0z"/><path d="M17.91 23.12c1.66 0 2.76-.81 2.76-1.98 0-.96-.86-1.51-1.57-1.58.79-.13 1.46-.72 1.46-1.5 0-1.1-.95-1.83-2.65-1.83-1.23 0-2.11.45-2.67 1.08l.83 1.08c.47-.42 1.05-.64 1.66-.64.64 0 1.12.19 1.12.61 0 .35-.39.52-1.08.52-.25 0-.77 0-.9-.01v1.53c.1-.01.61-.01.9-.01.91 0 1.19.18 1.19.56 0 .37-.38.65-1.12.65-.58 0-1.34-.23-1.82-.7l-.87 1.17c.52.6 1.48 1.05 2.76 1.05z" fill={this.props.color}/><path stroke={this.props.color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M14 29l4 6 9-14h7"/></g></svg>;
    },
});

module.exports = CubeRoot;
