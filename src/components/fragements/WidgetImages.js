import React from "react";
import PropTypes from "prop-types";

class WidgetImages extends React.Component {
    render() {
        return (
            <div className="aside-widget">
                <div className="section-title">
                    <h2 className="title">Instagram</h2>
                </div>
                <div className="galery-widget">
                    <ul>
                        {this.props.images.map((item)=>
                            <li>
                                <a href={item.refer}>
                                <img src={item.image} alt />
                                </a>
                            </li>
                        )}
                    </ul>
                </div>
            </div>
        );
    }
}

WidgetImages.propsTyoe = {
    images: PropTypes.array
}
WidgetImages.defaultProps = {
    images: [
        {
            refer: "#",
            image: "/img/galery-1.jpg"
        },
        {
            image: "/img/galery-2.jpg"
        },
        {
            refer: "#",
            image: "/img/galery-3.jpg"
        },
        {
            refer: "#",
            image: "/img/galery-4.jpg"
        },
        {
            refer: "#",
            image: "/img/galery-5.jpg"
        },
        {
            refer: "#",
            image: "/img/galery-6.jpg"
        }
    ]
}

export default WidgetImages;
