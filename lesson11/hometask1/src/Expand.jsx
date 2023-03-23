import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Expand extends Component {
    state = {
        show: false,
    }

    toggleButton = () => {
        this.setState({
            show: !this.state.show,
        })
    }

    render() {
        return (
            <div className="expand border">
                <div className="expand__header">
                    <span className="expand__title">{this.props.title}</span>
                    <button className="expand__toggle-btn" onClick={this.toggleButton}>
                        <i className={`fas fa-chevron-${this.state.show ? 'up' : 'down'}`} />
                    </button>
                </div>
                {this.state.show && <div className="expand__content">{this.props.children}</div>}
            </div>
        )
    }
}

Expand.propTypes = {
    title: PropTypes.string,
    children: PropTypes.element.isRequired,
}

Expand.defaultProps = {
    title: 'Title',
}

export default Expand
