import { UseUpdateProfileFormResult } from "./types";
import { joiResolver } from "@hookform/resolvers/joi";
import { useForm } from "react-hook-form";
import { useSetRecoilState } from "recoil";
import { userData } from "@/recoil";
import { UpdateProfileFormInputs, UpdateProfileSchema } from "@/validations";
import { message } from "antd";
import { UserDataType } from "@/constants";
import { updateProfile } from "@/api";
import useRequest from "@ahooksjs/use-request";

export default function useProfileUpdateForm(
  onSuccessAction: () => void,
  userRecoilData: UserDataType
): UseUpdateProfileFormResult {
  const setUserRecoilData = useSetRecoilState(userData);

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

  const { run: runUpdateProfile, loading: requestLoading } = useRequest(
    (data) => updateProfile(data),
    {
      manual: true,
      onSuccess: (res) => {
        if (res) {
          setUserRecoilData(res.data);
          onSuccessAction();
        }
      },
      onError: (error: any) => {
        console.error(error);
        message.error(error.response.data.message);
      },
    }
  );

  const submitForm = handleSubmit(async (data) => {
    await runUpdateProfile(data);
  });

  return {
    reset,
    formErrors,
    formControl,
    formState,
    setValue,
    getFieldValue,
    submitForm,
    requestLoading,
  };
}
