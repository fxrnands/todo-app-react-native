import React from "react";
import { Input, Stack, FormControl, VStack, Image, Text, Button, HStack } from "native-base";
import { TouchableOpacity } from "react-native-web";

const LoginImg = require("../assets/loginImage.png");

function RegisterPage() {
  return (
    <>
      <>
        <Image source={LoginImg} w="280" h="177" marginTop="20" />
      </>
      <VStack>
        <Text marginTop="10" marginBottom="3" fontSize="25" fontWeight="bold">
          Register
        </Text>
        <FormControl>
          <Stack space={3}>
            <Stack width="300">
              <Input border="1px black solid" backgroundColor="whitesmoke" p={2} placeholder="Email" />
            </Stack>
            <Stack>
              <Input border="1px black solid" backgroundColor="whitesmoke" p={2} placeholder="Name" />
            </Stack>
            <Stack>
              <Input border="1px black solid" backgroundColor="whitesmoke" p={2} placeholder="Password" />
            </Stack>
          </Stack>
        </FormControl>
        <Button backgroundColor="danger.500" marginTop="8">
          <Text color="white" fontSize="16" fontWeight="600">
            Register
          </Text>
        </Button>
      </VStack>
      <HStack alignItems="center" marginTop="2" fontSize="15">
        <Text marginRight="1">Joined us before ?</Text>
        <TouchableOpacity>
          <Text fontWeight="500" color="red.500">
            Login
          </Text>
        </TouchableOpacity>
      </HStack>
    </>
  );
}

export default RegisterPage;
