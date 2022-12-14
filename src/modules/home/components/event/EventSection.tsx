import { Box, Flex, Text, useDisclosure } from "@chakra-ui/react";
import { useState } from "react";
import { IEvent } from "../../../../common/interface/interface";
import EventCard from "./EventCard";
import EventModal from "./EventModal";

interface IProps {
  isLoaded: boolean;
  eventListData: IEvent[];
}

const EventSection: React.FC<IProps> = ({ isLoaded, eventListData }) => {
  const {
    isOpen: eventisOpen,
    onOpen: eventonOpen,
    onClose: eventonClose,
  } = useDisclosure();

  const [eventID, setEventID] = useState<number>(-1);
  const [eventData, setEventData] = useState<IEvent[]>(eventListData);

  return (
    <>
      <Flex
        height={"100%"}
        width={240}
        px={5}
        py={5}
        flexDir={"column"}
        gap={4}
        borderWidth={1}
        borderColor={"#3a3a3a"}
        rounded={10}
        color={"#f3f3f3"}
      >
        <Text>New events</Text>
        {eventData &&
          eventData
            .slice(eventData.length - 3, eventData.length)
            .map((event, key) => {
              return (
                <>
                  <Box onClick={() => setEventID(eventData.length + key - 3)}>
                    <EventCard
                      onOpen={eventonOpen}
                      severity={event?.severity_level}
                      id={event?.id}
                      region={event.region}
                    />
                  </Box>
                </>
              );
            })}
        {isLoaded && eventData && (
          <EventModal
            isOpen={eventisOpen}
            onOpen={eventonOpen}
            onClose={eventonClose}
            data={eventData[eventID]}
          />
        )}
      </Flex>
    </>
  );
};

export default EventSection;
