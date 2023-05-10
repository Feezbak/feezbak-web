import React, { useContext } from "react";
import { opacityAnimation } from "@assets/framerAnimations";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import FormItem from "./components/FormItem";
import { StoryCreationContext } from "@/context";
import { InfoFormWrapper, FieldsTitle } from "./styles";

const InfoCollectionFormItems = () => {
  const { step3, setInfoCollectionFields } = useContext(StoryCreationContext);
  const { userInfoFields } = step3;

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

  const handleUsageChange = (
    fieldName: "First Name" | "Last Name" | "Email Address",
    value: boolean
  ) => {
    const oldFields = Array.from(userInfoFields);
    const itemIndex = oldFields.findIndex((field) => field.title === fieldName);
    oldFields[itemIndex] = {
      title: fieldName,
      value,
    };
    setInfoCollectionFields(oldFields);
  };

  return (
    <InfoFormWrapper {...opacityAnimation}>
      <FieldsTitle>Fields</FieldsTitle>
      <DragDropContext onDragEnd={handleDragEnd}>
        <Droppable droppableId="droppable">
          {(provided) => (
            <ul {...provided.droppableProps} ref={provided.innerRef}>
              {step3.userInfoFields.map((field, index) => (
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
                      <FormItem
                        fieldName={field.title}
                        value={field.value}
                        handleChange={handleUsageChange}
                      />
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
