import {
  Flex,
  Input,
  Modal,
  ModalContent,
  ModalOverlay,
  Select,
  Text,
  Textarea,
} from "@chakra-ui/react";
import {
  BsFillCheckCircleFill,
  BsFillExclamationTriangleFill,
} from "react-icons/bs";
import { MdCancel } from "react-icons/md";
import {
  GMapsCoordinates,
  IEvent,
} from "../../../../common/interface/interface";
import { useState, useRef } from "react";
interface IProps {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
  handleAddingEvent: (event: IEvent) => void; // to remove after integrating API
  currentCoordinate: GMapsCoordinates;
  latestIndex: number;
}

const InsertNewEventForm: React.FC<IProps> = ({
  isOpen,
  onOpen,
  onClose,
  handleAddingEvent,
  currentCoordinate,
  latestIndex,
}) => {
  // To replace with useContext
  const event_detail_ref = useRef<HTMLTextAreaElement>(null);
  const severity_level_ref = useRef<HTMLSelectElement>(null);
  const region_ref = useRef<HTMLSelectElement>(null);

  const handleCompilingFormData = () => {
    if (event_detail_ref && severity_level_ref) {
      const data: IEvent = {
        id: latestIndex + 1,
        details: event_detail_ref?.current?.value!,
        severity_level: severity_level_ref?.current?.value!,
        status: "open",
        coordinate: currentCoordinate,
        personnels_notified: [],
        region: region_ref?.current?.value!,
      };
      handleAddingEvent(data); // Deep copy
      onClose();
    }
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent
        width={"80%"}
        rounded={"md"}
        bgColor={"#333333"}
        px={10}
        py={50}
        color={"white"}
      >
        <Flex gap={2} flexDir={"column"}>
          <Flex gap={2} flexDir={"row"} alignItems={"center"} my={2}>
            <Text fontSize={"20px"}>Insert New Event</Text>
            <BsFillExclamationTriangleFill />
          </Flex>

          <Text fontSize={"14px"}>Region</Text>
          <Select fontSize={"14px"} ref={region_ref} background={"#333333"}>
            <option
              value="Bandar Sunway"
              style={{ backgroundColor: "#333333" }}
            >
              Bandar Sunway
            </option>
            <option value="Sunway Geo" style={{ backgroundColor: "#333333" }}>
              Sunway Geo
            </option>
            <option
              value="Sunway Pyramid"
              style={{ backgroundColor: "#333333" }}
            >
              Sunway Pyramid
            </option>
            <option
              value="Sunway South Quay"
              style={{ backgroundColor: "#333333" }}
            >
              Sunway South Quay
            </option>
            <option
              value="Sunway Lagoon"
              style={{ backgroundColor: "#333333" }}
            >
              Sunway Lagoon
            </option>
          </Select>

          <Text fontSize={"14px"}>Severity level</Text>
          <Select fontSize={"14px"} ref={severity_level_ref}>
            <option value="high" style={{ backgroundColor: "#333333" }}>
              High
            </option>
            <option value="mid" style={{ backgroundColor: "#333333" }}>
              Mid
            </option>
            <option value="low" style={{ backgroundColor: "#333333" }}>
              Low
            </option>
          </Select>

          <Text fontSize={"14px"}>Alert nearby personnels (up to 3km)</Text>
          <Select fontSize={"14px"}>
            <option value="option2" style={{ backgroundColor: "#333333" }}>
              Yes
            </option>
            <option value="option3" style={{ backgroundColor: "#333333" }}>
              No
            </option>
          </Select>

          <Text fontSize={"14px"}>Event details</Text>
          <Textarea
            fontSize={"14px"}
            placeholder="Insert details"
            ref={event_detail_ref}
          />
          <Flex gap={2} flexDir={"row"} alignItems={"center"} my={2}>
            <Flex
              width={"50%"}
              gap={2}
              px={5}
              py={2}
              rounded={"5px"}
              bgGradient={
                "linear-gradient(88.84deg, #E1306C 1.99%, #F77737 98.01%)"
              }
              _hover={{
                cursor: "pointer",
              }}
              justifyContent={"center"}
              onClick={() => handleCompilingFormData()}
              color={"#f3f3f3"}
            >
              <Text fontSize={"12px"}>{"Add event"}</Text>
              <BsFillCheckCircleFill />
            </Flex>
            <Flex
              gap={2}
              width={"50%"}
              px={5}
              py={2}
              rounded={"5px"}
              borderWidth={1}
              borderColor={"#636363"}
              _hover={{
                cursor: "pointer",
              }}
              justifyContent={"center"}
              onClick={onClose}
            >
              <Text fontSize={"12px"}>{"Cancel"}</Text>
              <MdCancel />
            </Flex>
          </Flex>
        </Flex>
      </ModalContent>
    </Modal>
  );
};

export default InsertNewEventForm;
