import React from "react";
import { Input, Stack, FormControl, View, Image, Button, HStack, VStack } from "native-base";
import { Text } from "react-native";
import { TouchableOpacity } from "react-native-web";

const LoginImg = require("../assets/loginImage.png");

function LoginPage() {
  return (
    <VStack padding="8">
      <View alignItems="center">
        <Image source={LoginImg} w="250" h="230" marginTop="60" marginBottom="10" />
      </View>

      <View fontWeight="bold">
        <Text>Login</Text>
      </View>

      <View>
        <FormControl marginTop="5">
          <Stack space={5}>
            <Stack>
              <Input border="1px black solid" backgroundColor="whitesmoke" p={2} placeholder="Email" />
            </Stack>
            <Stack>
              <Input border="1px black solid" backgroundColor="whitesmoke" p={2} placeholder="Password" />
            </Stack>
          </Stack>
        </FormControl>
      </View>
      
      <View>
        <Button backgroundColor="danger.500" marginTop="8">
          <Text fontSize="16" fontWeight="600">
            Login
          </Text>
        </Button>
      </View>

      <HStack marginTop="2" fontSize="15">
        <Text alignText="center" marginRight="1">
          New user ?
        </Text>
        <TouchableOpacity fontWeight="500" color="red.500">
          <Text marginleft="1" fontWeight="500" color="red.500">
            Register
          </Text>
        </TouchableOpacity>
      </HStack>
    </VStack>
  );
}

export default LoginPage;
