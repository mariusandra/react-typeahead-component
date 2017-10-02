var cx = require('classnames');

module.exports = createClass({
    displayName: 'OptionTemplate',

    propTypes: {
        data: PropTypes.any,
        isSelected: PropTypes.bool
    },

    render: function() {
        var classes = cx({
                'option-value': true,
                'selected-option': this.props.isSelected
            }),
            optionData = this.props.data;

        return (
            <div>
                {this.renderHeader(optionData)}
                <div className={classes}>
                    {optionData.value}
                </div>
            </div>
        )
    },

    renderHeader: function(option) {
        // If this option is the first of its type,
        // then render the header.
        if (option.index === 0) {
            return (
                <div className='option-header'>
                    {option.type}
                </div>
            );
        }

        return null;
    }
});
