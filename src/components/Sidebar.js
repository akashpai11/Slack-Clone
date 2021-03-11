import React from "react";
import styled from "styled-components";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import AddIcon from "@material-ui/icons/Add";
import { sidebarItems } from "../data/sidebarData";
import db from "../firebase";
// import { channelDataItems } from "../data/channelData";
import { useHistory } from "react-router-dom";

function Sidebar(props) {
  const addChannel = () => {
    const promptName = prompt("Enter the channel name");
    if (promptName) {
      db.collection("rooms").add({
        name: promptName,
      });
    }
  };

  const history = useHistory();
  const goToChannel = (id) => {
    if (id) {
      history.push(`/room/${id}`);
    }
  };

  return (
    <Container>
      <WorkspaceContainer>
        <Name>{props.user.name}</Name>
        <NewMessage>
          <AddCircleOutlineIcon />
        </NewMessage>
      </WorkspaceContainer>
      <MainChannel>
        {sidebarItems.map((item) => (
          <MainChannelItem>
            {item.icon}
            {item.text}
          </MainChannelItem>
        ))}
      </MainChannel>
      <ChannelsContainer>
        <NewChannels>
          <div>Channels</div>
          <AddIcon onClick={addChannel} />
        </NewChannels>
        <ChannelsList>
          {props.rooms.map((item) => (
            <Channel onClick={() => goToChannel(item.id)}>
              # {item.name}
            </Channel>
          ))}
        </ChannelsList>
      </ChannelsContainer>
    </Container>
  );
}

export default Sidebar;

const Container = styled.div`
  background: #3f0f3f;
`;

const WorkspaceContainer = styled.div`
  color: white;
  height: 64px;
  display: flex;
  align-items: center;
  padding-left: 16px;
  justify-content: space-between;
  border-bottom: 1px solid rgb(82, 82, 82);
  font-family: Poppins;
`;

const Name = styled.div``;

const NewMessage = styled.div`
  width: 36px;
  height: 36px;
  background: white;
  color: #3f0e40;
  fill: #3f0e40;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  margin-right: 20px;
  cursor: pointer;
`;

const MainChannel = styled.div`
  padding-top: 20px;
`;

const MainChannelItem = styled.div`
  color: #fafafa;
  display: grid;
  grid-template-columns: 15% auto;
  height: 28px;
  align-items: center;
  padding-left: 20px;
  cursor: pointer;
  :hover {
    background: rgb(82, 82, 82);
  }
`;
const ChannelsContainer = styled.div`
  margin-top: 10px;
  color: #fafafa;
`;

const NewChannels = styled.div`
  display: flex;
  justify-content: space-between;
  height: 28px;
  padding-left: 22px;
  padding-right: 10px;
  cursor: pointer;
`;

const ChannelsList = styled.div``;

const Channel = styled.div`
  display: flex;
  align-items: center;
  height: 28px;
  padding-left: 22px;
  cursor: pointer;
  :hover {
    background: rgb(82, 82, 82);
  }
`;
