import { UploadArea } from "@/shared";
import { uploadAvatar } from "@/api";
import { message } from "antd";
import useRequest from "@ahooksjs/use-request";
import { useRecoilState } from "recoil";
import { userData } from "@/recoil";
import { UploadProfileAvatarWrapper } from "./styles";
import { getErrorMessage } from "@helpers/errorMessage";

const ProfileAvatar = () => {
  const [profileData, updateProfileData] = useRecoilState(userData);

  const { run: uploadAvatarToServer, loading } = useRequest(
    (payload) => uploadAvatar(payload),
    {
      manual: true,
      onSuccess: async (resp: any) => {
        if (resp.data) {
          const updatedProfileData = { ...profileData };
          updatedProfileData.avatarSrc = resp.data.avatarSrc;
          updateProfileData(updatedProfileData);
          message.success("Profile image was successfully updated!");
        }
      },
      onError: async (error: any) => {
        await message.error(getErrorMessage(error));
      },
    }
  );

  return (
    <UploadProfileAvatarWrapper>
      <UploadArea
        handleUpload={uploadAvatarToServer}
        loading={loading}
        title="Profile Image"
        description="Select image from gallery or pull to Dropbox"
      />
    </UploadProfileAvatarWrapper>
  );
};

export default ProfileAvatar;
