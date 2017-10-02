var cx = require('classnames');

module.exports = createClass({
    displayName: 'OptionTemplate',

    propTypes: {
        data: PropTypes.any,
        inputValue: PropTypes.string,
        isSelected: PropTypes.bool
    },

    render: function() {
        var classes = cx({
            'yt-option': true,
            'yt-selected-option': this.props.isSelected
        });

        return (
            <div className={classes}>
                {this.renderOption()}
            </div>
        );
    },

    renderOption: function() {
        var optionData = this.props.data,
            inputValue = this.props.userInputValue;

        if (optionData.indexOf(inputValue) === 0) {
            return (
                <span>
                    {inputValue}
                    <strong>
                        {optionData.slice(inputValue.length)}
                    </strong>
                </span>
            );
        }

        return optionData;
    }
});
