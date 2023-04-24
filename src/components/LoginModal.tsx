import { Text, Box, Button, Input, InputGroup, InputLeftElement, Modal, ModalBody, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay, VStack, useToast } from "@chakra-ui/react";
import { FaLock, FaUserNinja } from "react-icons/fa";
import SocialLogin from "./SocialLogin";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { IUsernameLoginError, IUsernameLoginSuccess, IUsernameLoginVariables, usernameLogIn } from "../api";

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface IForm {
  username: string
  password: string
}

export default function LoginModal({ isOpen, onClose }: LoginModalProps) {
  const { register, handleSubmit, formState: { errors }, reset } = useForm<IForm>()
  const toast = useToast()
  const queryClient = useQueryClient()
  const mutation = useMutation(usernameLogIn, {

    onSuccess: (data) => {
      toast({
        title: "welcome back!",
        status: "success",
      })
      onClose()
      reset()
      queryClient.refetchQueries(['me'])
    },
    onError: (error) => {
      console.log("mutation has an error")
    }
  })
  const onSubmit = ({ username, password }: IForm) => {
    mutation.mutate({ username, password })
  }
  console.log(errors)

  return (
    <Modal onClose={onClose} isOpen={isOpen}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Log in</ModalHeader>
        <ModalCloseButton />
        <ModalBody as="form" onSubmit={handleSubmit(onSubmit)}>
          <VStack>
            <InputGroup>
              <InputLeftElement children={
                <Box color={"gray.500"}>
                  <FaUserNinja />
                </Box>
              } />
              <Input
                isInvalid={Boolean(errors.username?.message)}
                {...register("username", {
                  required: "Please write a username",
                })}
                variant={"filled"}
                placeholder="Username"
              />
              <Text fontSize={"sm"} color="red.500">{errors.username?.message}</Text>
            </InputGroup>
            <InputGroup>
              <InputLeftElement children={
                <Box color={"gray.500"}>
                  <FaLock />
                </Box>
              } />
              <Input
                isInvalid={Boolean(errors.username?.message)}
                {...register("password", {
                  required: "Please write a password",
                })}
                type="password"
                variant={"filled"}
                placeholder="Password"
              />
              <Text fontSize={"sm"} color="red.500">{errors.password?.message}</Text>
            </InputGroup>
            <Button isLoading={mutation.isLoading} type="submit" mt={4} colorScheme="red" w="100%">Log in</Button>
          </VStack>
          <SocialLogin />
        </ModalBody>
      </ModalContent>
    </Modal>
  )
}