import React from 'react';
import {
  ActivityIndicator
} from 'antd-mobile';
import './loadable-loading.less';
export default function LoadableLoading() {
  return (
    <div className="enjoy-loadable-loading">
      <ActivityIndicator text="loading…" />
    </div>
  )
};
