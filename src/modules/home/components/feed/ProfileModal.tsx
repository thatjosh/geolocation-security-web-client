import {
  Flex,
  Input,
  Modal,
  ModalContent,
  ModalOverlay,
  Text,
} from "@chakra-ui/react";
import { BsFillCheckCircleFill } from "react-icons/bs";
import { MdCancel } from "react-icons/md";
import { IPersonnel } from "../../../../common/interface/interface";

interface IProps {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
  data: IPersonnel;
}

const ProfileModal: React.FC<IProps> = ({ isOpen, onOpen, onClose, data }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent
        width={"80%"}
        rounded={"md"}
        bgColor={"#333333"}
        px={10}
        py={50}
      >
        <Flex gap={2} flexDir={"column"}>
          <Flex gap={2} flexDir={"row"} alignItems={"center"} my={2}>
            <Text fontSize={"20px"}>{`Personnel #${data?.id}`}</Text>
          </Flex>

          <Flex my={3} gap={2} flexDir={"column"}>
            <Text fontSize={"14px"}>Name</Text>
            <Input
              fontSize={"14px"}
              placeholder={data?.name}
              _placeholder={{ color: "white" }}
              isReadOnly={true}
            />
            <Text fontSize={"14px"}>Status</Text>
            <Input
              fontSize={"14px"}
              placeholder={data?.status}
              _placeholder={{ color: "white" }}
              isReadOnly={true}
            />
            <Text fontSize={"14px"}>Area</Text>
            <Input
              fontSize={"14px"}
              placeholder={data?.area}
              _placeholder={{ color: "white" }}
              isReadOnly={true}
            />
            <Text fontSize={"14px"}>Region</Text>
            <Input
              fontSize={"14px"}
              placeholder={data?.region}
              _placeholder={{ color: "white" }}
              isReadOnly={true}
            />
            <Text fontSize={"14px"}>Rank</Text>
            <Input
              fontSize={"14px"}
              placeholder={data?.rank}
              _placeholder={{ color: "white" }}
              isReadOnly={true}
            />
          </Flex>

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
            >
              <Text fontSize={"12px"}>{"Edit details"}</Text>
              <BsFillCheckCircleFill />
            </Flex>
            <Flex
              gap={2}
              width={"50%"}
              px={5}
              py={2}
              rounded={"5px"}
              borderWidth={1}
              _hover={{
                cursor: "pointer",
              }}
              justifyContent={"center"}
              onClick={onClose}
            >
              <Text fontSize={"12px"}>{"Close"}</Text>
              <MdCancel />
            </Flex>
          </Flex>
        </Flex>
      </ModalContent>
    </Modal>
  );
};

export default ProfileModal;
