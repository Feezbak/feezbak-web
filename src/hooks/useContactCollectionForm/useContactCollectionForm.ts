import { UseContactCollectionFormResult } from "./types";
import { joiResolver } from "@hookform/resolvers/joi";
import { useForm } from "react-hook-form";
import { ContactToData } from "@shared/Preview/components/Demo/types";
import {
  ContactsCollectingInputs,
  ContactsCollectingSchema,
} from "@/validations";

export default function useContactCollectionForm(
  sendContactInfo: (info: ContactToData[]) => void
): UseContactCollectionFormResult {
  const {
    watch,
    handleSubmit,
    formState: { errors: formErrors },
    control: formControl,
    formState,
    reset,
    setValue,
    getValues: getFieldValue,
  } = useForm<ContactsCollectingInputs>({
    mode: "all",
    resolver: joiResolver(ContactsCollectingSchema, {
      errors: {
        wrap: {
          label: "",
        },
      },
      abortEarly: false,
    }),
  });

  const submitForm = handleSubmit(async (formData) => {
    console.log(formData);
    //    const refactoredData = Object.entries(formData).map((field) => ({
    //      field: field[0],
    //      value: field[1] as string,
    //    }));
    //    sendContactInfo(refactoredData);
  });

  return {
    watch,
    reset,
    formErrors,
    formControl,
    formState,
    setValue,
    getFieldValue,
    submitForm,
  };
}
