
import React from 'react'
import {  Card } from 'antd';
// import Featuredless from './featured.less';
import { Link } from 'react-router-dom';

const { Meta } = Card;
var FontListCss = require('./fontlist.css')
export default class FontList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            news: [{
                poster: "",
                cover:"",
                formName:""
            }]
        }
    }
    componentDidMount() {
        var that = this;
        fetch("/homepage/musicForm")
            .then(function (res) {
                console.log(res);
                return res.json();
            })
            .then(function (data) {
                console.log(data);
                that.setState({ news: data })
            })
    }
         render() {
        const { news } = this.state;
        return (
            <div>
           {
                            news.map((Item, index) => (
                                <Card  className={FontListCss.card}
                                    hoverable
                                    style={{ width: 120 }}
                                    cover={<img src={Item.cover} />}
                                >
                                    <Meta title={Item.formName} description="歌单" />
                                </Card>
                            ))}
            </div>
        )
    }
}