/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import PropTypes from "prop-types";

class PostContent extends React.Component {
  htmlDecode(input){
    var e = document.createElement('div');
    e.innerHTML = input;
    return e.childNodes.length === 0 ? "" : e.childNodes[0].nodeValue;
  }
  render() {
    return (
      <div className="section-row" dangerouslySetInnerHTML={{ __html: this.htmlDecode(this.props.content)}}>
      </div>
    );
  }
}
PostContent.propsType = {
  content: PropTypes.string
}
PostContent.defaultProps={
  content: "&lt;h3&gt;Ea vix periculis sententiae, ea blandit pericula abhorreant pri.&lt;/h3&gt;&lt;p&gt;Lorem ipsum dolor sit amet, mea ad idque detraxit, cu soleat graecis invenire eam. Vidisse suscipit liberavisse has ex, vocibus patrioque vim et, sed ex tation reprehendunt. Mollis volumus no vix, ut qui clita habemus, ipsum senserit est et. Ut has soluta epicurei mediocrem, nibh nostrum his cu, sea clita electram reformidans an.&lt;/p&gt;&lt;p&gt;Est in saepe accusam luptatum. Purto deleniti philosophia eum ea, impetus copiosae id mel. Vis at ignota delenit democritum, te summo tamquam delicata pro. Utinam concludaturque et vim, mei ullum intellegam ei. Eam te illum nostrud, suas sonet corrumpit ea per. Ut sea regione posidonium. Pertinax gubergren ne qui, eos an harum mundi quaestio.&lt;/p&gt;&lt;figure class=&quot;pull-right&quot;&gt;&lt;img src=&quot;/img/media-1.jpg&quot;&gt;&lt;figcaption&gt;Lorem ipsum dolor sit amet, mea ad idque detraxit,&lt;/figcaption&gt;&lt;/figure&gt;&lt;p&gt;Nihil persius id est, iisque tincidunt abhorreant no duo. Eripuit placerat mnesarchum ius at, ei pro laoreet invenire persecuti, per magna tibique scriptorem an. Aeque oportere incorrupte ius ea, utroque erroribus mel in, posse dolore nam in. Per veniam vulputate intellegam et, id usu case reprimique, ne aperiam scaevola sed. Veritus omnesque qui ad. In mei admodum maiorum iracundia, no omnis melius eum, ei erat vivendo his. In pri nonumes suscipit.&lt;/p&gt;&lt;p&gt;Sit nulla quidam et, eam ea legimus deserunt neglegentur. Et veri nostrud vix, meis minimum atomorum ex sea, stet case habemus mea no. Ut dignissim dissentiet his, mei ea delectus delicatissimi, debet dissentiunt te duo. Sonet partiendo et qui, pro et veri solet singulis. Vidit viderer eleifend ad nam. Minimum eligendi suscipit ius et, vis ex laoreet detracto scripserit, at sumo sale solum pro.&lt;/p&gt;&lt;blockquote class=&quot;blockquote&quot;&gt;&lt;p&gt;Ei prima graecis consulatu vix, per cu corpora qualisque voluptaria. Bonorum moderatius in per, ius cu albucius voluptatum. Ne ius torquatos dissentiunt. Brute illum utroque eu quo. Cu tota mediocritatem vis, aliquip cotidieque eu ius, cu lorem suscipit eleifend sit.&lt;/p&gt;&lt;footer class=&quot;blockquote-footer&quot;&gt;John Doe&lt;/footer&gt;&lt;/blockquote&gt;&lt;p&gt;Mei cu diam sonet audiam, his ad impetus fuisset indoctum. Te sit altera qualisque, stet suavitate ne vel. Euismod suavitate duo eu, habemus rationibus neglegentur ei qui. Debet omittam ad usu, ex vero feugait oporteat eos, id usu sint numquam sententiae.&lt;/p&gt;&lt;figure&gt;&lt;img src=&quot;/img/media-2.jpg&quot;&gt;&lt;/figure&gt;&lt;h3&gt;Sit nulla quidam et, eam ea legimus deserunt neglegentur.&lt;/h3&gt;&lt;p&gt;No possim singulis sea, dolores salutatus interpretaris eam ad. An singulis postulant his, an inermis urbanitas mel. Wisi veri noster eu est, diam ridens eum in. Omnium imperdiet patrioque quo in, est sumo persecuti abhorreant ei. Sed feugiat iracundia id, inermis percipit eu has.&lt;/p&gt;&lt;p&gt;In vidit homero ullamcorper his, ea mea senserit constituto, et alia idque congue sit. Postea percipit his ne. Probo movet noluisse in nam, sed ex utroque inermis corrumpit, oratio tation vix at. Usu aperiri assentior at, eam et melius iudicabit pertinacia.&lt;/p&gt;"
}

export default PostContent;
