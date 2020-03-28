import React from "react";
import WidgetImage from "../fragements/WidgetImage";
import WidgetSocial from "../fragements/WidgetSocial";
import WidgetCategory from "../fragements/WidgetCategory";
import WidgetNewsletter from "../fragements/WidgetNewsletter"
import WidgetImages from "../fragements/WidgetImages";
import WidgetPosts from "../fragements/WidgetPosts";

class Widgets extends React.Component {
  render() {
    return (
      <div className="col-md-4">
        <WidgetImage/>
        <WidgetSocial/>
        <WidgetCategory/>
        {/* <WidgetNewsletter/> */}
        <WidgetPosts title="Popular Posts"/>
        <WidgetImages/>
        <WidgetImage image="/img/ad-1.jpg"/>
      </div>
    );
  }
}

export default Widgets;
