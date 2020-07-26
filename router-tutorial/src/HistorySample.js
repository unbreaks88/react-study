import React, {Component} from 'react'

class HistorySample extends Component {
    handleGoBack = () => {
        this.props.history.goBack()
    }

    handleGoHome = () => {
        this.props.history.push('/')
    }

    componentDidMount() {
        // 페이지 변화가 생길때마다 떠날것인지 물어본다.
        this.unblock = this.props.history.block('정말 떠나실 건가요?')
    }

    componentWillUnmount() {
        // 컴포넌트 언마운트 되면 질문 멈춘다.
        if (this.unblock) {
            this.unblock()
        }
    }

    render() {
        return (
            <div>
                <button onClick={this.handleGoBack}>뒤로</button>
                <button onClick={this.handleGoHome}>홈으로</button>
            </div>
        )
    }
}

export default HistorySample