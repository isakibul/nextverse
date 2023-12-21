import { Button, Input, InputRightElement, InputGroup } from "@chakra-ui/react";
import { useState } from "react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";

const Login = () => {
    const [inputs, setInputs] = useState({
        email: "",
        password: "",
        confirmPassword: "",
    });
    const [showPassword, setShowPassword] = useState(false);
    return (
        <>
            <Input
                placeholder="Email"
                type="email"
                fontSize={14}
                value={inputs.email}
                onChange={(e) => setInputs({ ...inputs, email: e.target.value })}
            />
            <InputGroup>
                <Input
                    placeholder="Password"
                    type={showPassword ? "text" : "password"}
                    fontSize={14}
                    value={inputs.password}
                    size={"sm"}
                    onChange={(e) => setInputs({ ...inputs, password: e.target.value })}
                />
                <InputRightElement h={"full"}>
                    <Button variant={"ghost"} size={"sm"} onClick={(e) => setShowPassword(!showPassword)}>
                        {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                    </Button>
                </InputRightElement>
            </InputGroup>
            <Button w={"full"} colorScheme="blue" size={"sm"} fontSize={14}>
                Log In
            </Button>
        </>
    )
}

export default Login