import { useEffect, useState } from "react";
import { Switch, Input, message, Modal } from "antd";
import useRequest from "@ahooksjs/use-request";
import { useParams, useNavigate } from "react-router-dom";
import { getStoryById, saveStoryFields, deleteStory } from "@/api";
import { getErrorMessage } from "@helpers/errorMessage";
import styled from "styled-components";
import { StyleEnums } from "@/enums";

/* ─── Styles ─── */
const Wrapper = styled.div`
  max-width: 560px;
  padding: 2rem 0;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const Card = styled.div`
  background: #fff;
  border: 1px solid ${StyleEnums.gray4};
  border-radius: 16px;
  padding: 1.25rem 1.5rem;
`;

const CardTitle = styled.h4`
  font-size: 0.8rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: ${StyleEnums.gray2};
  margin: 0 0 1rem;
`;

const SettingRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  padding: 0.75rem 0;

  &:not(:last-child) {
    border-bottom: 1px solid ${StyleEnums.gray4};
  }
`;

const RowLabel = styled.div`
  flex: 1;

  p {
    font-size: 0.95rem;
    font-weight: 600;
    color: ${StyleEnums.gray1};
    margin: 0 0 0.2rem;
  }

  span {
    font-size: 0.8rem;
    color: ${StyleEnums.gray2};
  }
`;

const SaveBtn = styled.button<{ $loading?: boolean }>`
  margin-top: 0.5rem;
  padding: 0.55rem 1.5rem;
  border-radius: 10px;
  background: ${StyleEnums.primary};
  color: #fff;
  font-weight: 700;
  font-size: 0.9rem;
  border: none;
  cursor: ${({ $loading }) => ($loading ? "not-allowed" : "pointer")};
  opacity: ${({ $loading }) => ($loading ? 0.7 : 1)};
  transition: opacity 0.2s;
  align-self: flex-start;

  &:hover:not(:disabled) {
    opacity: 0.88;
  }
`;

const DeleteBtn = styled.button`
  padding: 0.55rem 1.5rem;
  border-radius: 10px;
  background: transparent;
  color: ${StyleEnums.error};
  font-weight: 700;
  font-size: 0.9rem;
  border: 1.5px solid ${StyleEnums.error};
  cursor: pointer;
  transition: background 0.2s, color 0.2s;
  align-self: flex-start;

  &:hover {
    background: ${StyleEnums.error};
    color: #fff;
  }
`;

/* ─── Component ─── */
const StorySettings = () => {
  const { storyId } = useParams();
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [isMultiple, setIsMultiple] = useState(false);
  const [isInfoCollection, setIsInfoCollection] = useState(false);
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);

  const { loading: loadingStory } = useRequest(
    () => getStoryById(storyId ?? ""),
    {
      onSuccess: (res: any) => {
        const story = res.data;
        setTitle(story.titleText ?? "");
        setIsMultiple(!!story.isMultiple);
        setIsInfoCollection(!!story.isInfoCollectionAllowed);
      },
      onError: (err: any) => message.error(getErrorMessage(err)),
    }
  );

  const { run: saveSettings, loading: saving } = useRequest(
    (payload: any) => saveStoryFields({ id: storyId, ...payload }),
    {
      manual: true,
      onSuccess: () => message.success("Settings saved"),
      onError: (err: any) => message.error(getErrorMessage(err)),
    }
  );

  const { run: runDelete, loading: deleting } = useRequest(
    () => deleteStory(storyId ?? ""),
    {
      manual: true,
      onSuccess: () => {
        message.success("Story deleted");
        navigate("/");
      },
      onError: (err: any) => message.error(getErrorMessage(err)),
    }
  );

  const handleSave = () => {
    saveSettings({
      titleText: title,
      isMultiple,
      isInfoCollectionAllowed: isInfoCollection,
    });
  };

  if (loadingStory) return null;

  return (
    <Wrapper>
      {/* General */}
      <Card>
        <CardTitle>General</CardTitle>
        <SettingRow>
          <RowLabel>
            <p>Story name</p>
            <span>The title shown at the top of your story</span>
          </RowLabel>
        </SettingRow>
        <Input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Enter story name"
          maxLength={80}
          size="large"
          style={{ borderRadius: 10 }}
        />
      </Card>

      {/* Response behaviour */}
      <Card>
        <CardTitle>Response behaviour</CardTitle>
        <SettingRow>
          <RowLabel>
            <p>Multiple answers</p>
            <span>Allow respondents to select more than one option</span>
          </RowLabel>
          <Switch
            checked={isMultiple}
            onChange={setIsMultiple}
            style={isMultiple ? { background: StyleEnums.primary } : {}}
          />
        </SettingRow>
        <SettingRow>
          <RowLabel>
            <p>Collect respondent info</p>
            <span>Ask for name, email, or phone before showing the story</span>
          </RowLabel>
          <Switch
            checked={isInfoCollection}
            onChange={setIsInfoCollection}
            style={isInfoCollection ? { background: StyleEnums.primary } : {}}
          />
        </SettingRow>
      </Card>

      <SaveBtn onClick={handleSave} $loading={saving} disabled={saving}>
        {saving ? "Saving…" : "Save changes"}
      </SaveBtn>

      {/* Danger zone */}
      <Card style={{ borderColor: "#FFD4CE" }}>
        <CardTitle style={{ color: StyleEnums.error }}>Danger zone</CardTitle>
        <SettingRow>
          <RowLabel>
            <p>Delete story</p>
            <span>
              Permanently removes this story and all its responses. This cannot
              be undone.
            </span>
          </RowLabel>
          <DeleteBtn onClick={() => setDeleteModalOpen(true)}>Delete</DeleteBtn>
        </SettingRow>
      </Card>

      <Modal
        open={deleteModalOpen}
        title="Delete this story?"
        okText="Yes, delete"
        okButtonProps={{
          danger: true,
          loading: deleting,
        }}
        cancelText="Cancel"
        onOk={runDelete}
        onCancel={() => setDeleteModalOpen(false)}
      >
        <p>
          All responses and analytics for this story will be permanently
          deleted. This action cannot be undone.
        </p>
      </Modal>
    </Wrapper>
  );
};

export default StorySettings;
