import _ from 'lodash';
import React from 'react';
import { Card } from 'antd';

import './index.less';

interface Iprops {
  style?: React.CSSProperties;
  data?: Array<{
    label: string;
    value: React.ReactNode;
  }>;
}

export default function(props: Iprops) {
  const { data, style } = props;

  return (
    <Card style={style} className="desc-root">
      {_.map(data, item => (
        <div className="desc-item" key={_.get(item, 'label')}>
          <div>{_.get(item, 'label')}</div>
          <div>{_.get(item, 'value')}</div>
        </div>
      ))}
    </Card>
  );
}
