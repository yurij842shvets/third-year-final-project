import React from "react";
import { DatePicker, Space } from "antd";
import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";
import { FaCalendarAlt } from "react-icons/fa";

dayjs.extend(customParseFormat);

const dateFormat = "YYYY/MM/DD";

const TableDatePicker: React.FC = () => (
  <Space vertical size={12}>
    <div style={{ display: "flex", alignItems: 'center', gap: '15px' }}>
      <FaCalendarAlt />
      <DatePicker
        defaultValue={dayjs("2015/01/01", dateFormat)}
        format={dateFormat}
      />
    </div>
  </Space>
);

export default TableDatePicker;
