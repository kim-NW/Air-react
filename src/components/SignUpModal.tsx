import { Box, Button, Input, InputGroup, InputLeftElement, Modal, ModalBody, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay, VStack } from "@chakra-ui/react";
import { FaLock, FaUserNinja, FaEnvelope, FaUserSecret, } from "react-icons/fa";
import SocialLogin from "./SocialLogin";

interface SignModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function SignUpModal({ isOpen, onClose }: SignModalProps) {
  return (
    <Modal onClose={onClose} isOpen={isOpen}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Sign up</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <VStack>
            <InputGroup>
              <InputLeftElement children={
                <Box color={"gray.500"}>
                  <FaUserSecret />
                </Box>
              } />
              <Input variant={"filled"} placeholder="Name" />
            </InputGroup>
            <InputGroup>
              <InputLeftElement children={
                <Box color={"gray.500"}>
                  <FaEnvelope />
                </Box>
              } />
              <Input variant={"filled"} placeholder="Email" />
            </InputGroup>
            <InputGroup>
              <InputLeftElement children={
                <Box color={"gray.500"}>
                  <FaUserNinja />
                </Box>
              } />
              <Input variant={"filled"} placeholder="username" />
            </InputGroup>
            <InputGroup>
              <InputLeftElement children={
                <Box color={"gray.500"}>
                  <FaLock />
                </Box>
              } />
              <Input variant={"filled"} placeholder="password" />
            </InputGroup>
            <Button colorScheme="red" w="100%">Sign up</Button>
          </VStack>
          <SocialLogin />
        </ModalBody>
      </ModalContent>
    </Modal>
  )
}