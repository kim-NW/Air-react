import { Box, Button, Input, InputGroup, InputLeftElement, Modal, ModalBody, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay, VStack } from "@chakra-ui/react";
import { FaLock, FaUserNinja } from "react-icons/fa";
import SocialLogin from "./SocialLogin";

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function LoginModal({ isOpen, onClose }: LoginModalProps) {
  return (
    <Modal onClose={onClose} isOpen={isOpen}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Log in</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <VStack>
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
            <Button colorScheme="red" w="100%">Log in</Button>
          </VStack>
          <SocialLogin />
        </ModalBody>
      </ModalContent>
    </Modal>
  )
}