import React, { Component } from 'react';
import Figures from './components/Figures';
import imageDatas from './data/imageDatas.json';
import './styles/main.scss';


class App extends Component {
    //通过自执行函数将图片信息转化成图片路径信息
    imageDatas = (function getImageUrl(imageArr){
        for(var i=0;i<imageArr.length;i++){
            const imageURL = require('./images/' + imageArr[i].fileName);
            imageArr[i].imageURL = imageURL;
        }
        return imageArr;
    })(imageDatas);

    render() {
        const imgItems = [];
        for(var i=0;i<imageDatas.length;i++){
            imgItems.push(<Figures key={imageDatas[i].fileName} image={imageDatas[i]} />);
        }
        return (
            <div className="stage">
                {imgItems}
            </div>
        );
    }
}

export default App;
