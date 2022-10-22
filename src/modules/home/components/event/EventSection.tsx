import { Box, Flex, Text, useDisclosure } from "@chakra-ui/react";
import { useState } from "react";
import { event_list } from "../../../../common/data/seed";
import EventCard from "./EventCard";
import EventModal from "./EventModal";

interface IProps {
  isLoaded: boolean;
}

const EventSection: React.FC<IProps> = ({ isLoaded }) => {
  const {
    isOpen: eventisOpen,
    onOpen: eventonOpen,
    onClose: eventonClose,
  } = useDisclosure();

  const [eventID, setEventID] = useState<number>(-1);

  return (
    <>
      <Flex
        height={"100%"}
        width={260}
        px={5}
        py={5}
        flexDir={"column"}
        gap={4}
        borderWidth={1}
        rounded={10}
      >
        <Text>Events</Text>
        {event_list.map((event, key) => {
          return (
            <>
              {key < 3 && (
                <Box onClick={() => setEventID(key)}>
                  <EventCard
                    onOpen={eventonOpen}
                    severity={event?.severity_level}
                    id={event?.id}
                    region={"Sunway Malls"}
                  />
                </Box>
              )}
            </>
          );
        })}
        {isLoaded && (
          <EventModal
            isOpen={eventisOpen}
            onOpen={eventonOpen}
            onClose={eventonClose}
            data={event_list[eventID]}
          />
        )}
      </Flex>
    </>
  );
};

export default EventSection;
