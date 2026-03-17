import React from "react";
import { DatePicker, Space } from "antd";
import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";
import { FaCalendarAlt } from "react-icons/fa";

dayjs.extend(customParseFormat);

const dateFormat = "YYYY/MM/DD";

interface TableDatePickerProps {
  value?: string;
  onChange: (date: string) => void;
}

const TableDatePicker: React.FC<TableDatePickerProps> = ({value, onChange}) => (
  <Space vertical size={12}>
    <div style={{ display: "flex", alignItems: 'center', gap: '15px' }}>
      <FaCalendarAlt />
      <DatePicker
          value={value ? dayjs(value, dateFormat) : undefined}
          format={dateFormat}
          onChange={(date) => onChange(date ? dayjs(date).format(dateFormat) : "")}
        />
    </div>
  </Space>
);

export default TableDatePicker;
