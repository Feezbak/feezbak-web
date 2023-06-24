import { UseUpdateProfileFormResult } from "./types";
import { joiResolver } from "@hookform/resolvers/joi";
import { useForm } from "react-hook-form";
import { useRecoilValue } from "recoil";
import { userData } from "@/recoil";
import { UpdateProfileFormInputs, UpdateProfileSchema } from "@/validations";
//import { message } from "antd";
//import useRequest from "@ahooksjs/use-request";

export default function useProfileUpdateForm(
  onSuccessAction: () => void
): UseUpdateProfileFormResult {
  const userRecoilData = useRecoilValue(userData);

  const {
    handleSubmit,
    formState: { errors: formErrors },
    control: formControl,
    formState,
    reset,
    setValue,
    getValues: getFieldValue,
  } = useForm<UpdateProfileFormInputs>({
    mode: "all",
    resolver: joiResolver(UpdateProfileSchema, {
      errors: {
        wrap: {
          label: "",
        },
      },
      abortEarly: false,
    }),
    defaultValues: {
      firstName: userRecoilData.firstName,
      lastName: userRecoilData.lastName,
      email: userRecoilData.email,
      profession: userRecoilData.profession,
    },
  });

  const submitForm = handleSubmit(async (data) => {
    console.log(data, "Updated data");
    onSuccessAction();
  });

  return {
    reset,
    formErrors,
    formControl,
    formState,
    setValue,
    getFieldValue,
    submitForm,
    requestLoading: false,
  };
}
