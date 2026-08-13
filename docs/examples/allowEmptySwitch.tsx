import * as React from 'react';
import '../../assets/index.less';
import RangePicker from '../../src/PickerInput/RangePicker';

import dayjs, { type Dayjs } from 'dayjs';
import 'dayjs/locale/zh-cn';
import dayjsGenerateConfig from '../../src/generate/dayjs';
import zhCN from '../../src/locale/zh_CN';

dayjs.locale('zh-cn');

export default () => {
  const [value, setValue] = React.useState<[Dayjs | null, Dayjs | null] | null>(null);

  return (
    <div>
      <h3>
        <code>{'allowEmpty={[false, true]}'}</code>
      </h3>
      <p>
        Click start, then end — focus should switch. <code>allowEmpty</code> only gates submit, not
        focus.
      </p>
      <RangePicker
        locale={zhCN}
        generateConfig={dayjsGenerateConfig}
        style={{ width: 400 }}
        allowClear
        allowEmpty={[false, true]}
        value={value}
        onChange={setValue}
      />
    </div>
  );
};
