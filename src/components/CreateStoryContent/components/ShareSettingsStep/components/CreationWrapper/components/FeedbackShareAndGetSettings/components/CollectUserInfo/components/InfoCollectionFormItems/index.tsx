import { useContext, useState } from "react";
import { opacityAnimation } from "@assets/framerAnimations";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import FormItem from "./components/FormItem";
//import { Select } from "antd";
//import type { SelectProps } from "antd";
import { StoryCreationContext } from "@/context";
import { InfoFormWrapper, FieldsTitle } from "./styles";

const InfoCollectionFormItems = () => {
  const { step3, setInfoCollectionFields } = useContext(StoryCreationContext);
  const { userInfoFields } = step3;
  const [value, setValue] = useState<string[]>([]);

  //  useLayoutEffect(() => {
  //    const filteredValues = userInfoFields.map((field) => field.value);
  //    setValue(filteredValues);
  //  }, [userInfoFields]);

  const handleDragEnd = (result: any) => {
    if (!result.destination) {
      // Item was dropped outside of a droppable area
      return;
    }
    // Create a new array for the reordered items
    const newItems = Array.from(userInfoFields);
    // Reorder the items based on the drag and drop result
    const [removed] = newItems.splice(result.source.index, 1);
    newItems.splice(result.destination.index, 0, removed);
    // Update the state with the new ordered items
    setInfoCollectionFields(newItems);
  };

  //  const options: SelectProps["options"] = userInfoFields;
  //
  //  const handleChange = (value: string[]) => {
  //    const newArr = value.map((title: string) => ({
  //      label: title,
  //      value: title,
  //    }));
  //    setInfoCollectionFields(newArr);
  //  };

  //  const selectProps: SelectProps = {
  //    mode: "tags",
  //    value,
  //    options,
  //    onChange: handleChange,
  //    placeholder: "Enter form field name...",
  //    maxTagCount: "responsive",
  //    style: {
  //      width: "100%",
  //      marginBottom: "1.5rem",
  //    },
  //  };

  return (
    <InfoFormWrapper {...opacityAnimation}>
      <FieldsTitle>Fields</FieldsTitle>
      {/*<Select {...selectProps} />*/}
      <FieldsTitle>Order</FieldsTitle>
      <DragDropContext onDragEnd={handleDragEnd}>
        <Droppable droppableId="droppable">
          {(provided) => (
            <ul {...provided.droppableProps} ref={provided.innerRef}>
              {userInfoFields.map((field, index) => (
                <Draggable
                  key={index}
                  draggableId={`item-${index + 1}`}
                  index={index}
                >
                  {(provided) => (
                    <li
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                    >
                      <FormItem fieldName={field.label} />
                    </li>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </ul>
          )}
        </Droppable>
      </DragDropContext>
    </InfoFormWrapper>
  );
};

export default InfoCollectionFormItems;
