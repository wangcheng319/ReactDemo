import React, { Component } from 'react';


export default class App extends Component {
    /*
    *1.构造函数在组件被加载之前调用
    *2.应该最先调用super(props);，不然使用this.props会有bug
    *3.如果不需要initialize state 和bind methods,就不需要这方法
    * */
    constructor(props){
        super(props);
        this.state = {name : "jim",age : 99};//state初始化
    }

    /*在render方法之前调用，建议所有操作都在constructor中进行*/
    componentWillMount() {

    }

    /*1.这里组件已经生成
    * 2.获取数据，调用网络请求
    * 3.在这里修改state会引起re-render*/
    componentDidMount() {
        this.refs.button.onclick = function () {
            console.log('haha')
        }
    }

    /*在这里处理关闭定时器，关闭网络请求*/
    componentWillUnmount() {

    }


  render() {
    return (
      <div className="App">
        <div className="App-header" >
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro" ref={'button'}>
          To get started, edit <code>src/App.js</code> and save to reload.
            {this.state.name}{/*使用state*/}
        </p>

          <div style={{color:'red',fontSize:'15px'}}>
             3111呵呵呵dwe呵hreee jjjhsjsjsjjksdjfkjaldsjjksjdfkalsdlk
          </div>

      </div>
    );
  }
}


/*参数的默认值*/
const defaultProps ={
    name:'默认用户',
};

/*定义接受参数的类型*/
App.PropTypes = {
    /*name 只能是数字类型,必须的*/
    name:React.PropTypes.number.isRequired,
};

App.defaultProps = defaultProps;

