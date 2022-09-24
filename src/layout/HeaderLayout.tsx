import { Fragment } from "react";
import './index.less'

const HeaderLayout: React.FC = () => {
  return ( <Fragment>
    <div className="header">
      <div className="header-title">React最佳实践分享</div>
      <div className="header-author">
        分享人: <span>王杰</span>
      </div>
    </div>
  </Fragment> )
}

export default HeaderLayout;