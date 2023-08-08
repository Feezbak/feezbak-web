import { ChangeEvent, useRef, useState } from "react";
import { Divider, Input, InputRef, Select } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import { SelectActionWrapper, ItemAddButton, CustomSelect } from "./styles";

interface Props {
  value?: string;
  onChange: (event: string | undefined | ChangeEvent<Element>) => void;
}

const { Option } = Select;

const SelectWithAdd = ({ value = "", onChange }: Props) => {
  const [items, setItems] = useState(["Designer", "Developer", "Manager"]);
  const [name, setName] = useState("");
  const inputRef = useRef<InputRef>(null);

  const onNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  const addItem = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    setItems([...items, name]);
    setName("");
    setTimeout(() => {
      inputRef.current?.focus();
    }, 0);
  };

  return (
    <CustomSelect
      size="large"
      onChange={onChange as () => void}
      value={value}
      dropdownRender={(menu) => (
        <>
          {menu}
          <Divider style={{ margin: "8px 0" }} />
          <SelectActionWrapper>
            <Input
              size="large"
              placeholder="Enter your job title"
              ref={inputRef}
              value={name}
              onChange={onNameChange}
            />
            <ItemAddButton
              size="large"
              type="primary"
              icon={<PlusOutlined />}
              onClick={addItem}
              disabled={!name.length}
            >
              Add item
            </ItemAddButton>
          </SelectActionWrapper>
        </>
      )}
    >
      {items.map((item) => (
        <Option key={item}>{item}</Option>
      ))}
    </CustomSelect>
  );
};

export default SelectWithAdd;
