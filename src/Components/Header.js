import React from 'react'
import { Button, PageHeader } from "antd"

const Header = () => {
    return (
      <PageHeader
        className="site-page-header"
        title="Company Name"
        subTitle="Tagline of Company"
        extra={[
            <Button key="1" type="primary" size="large">
              Get Started
            </Button>
          ]}
      />
    )
}

export default Header;
