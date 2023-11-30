import React, {useState} from 'react';
import { View, Text, Pressable } from 'react-native'
import { styled } from 'nativewind';
import { Ionicons } from '@expo/vector-icons'


export function PasswordItem({data, removePassword}){

    const StyledView = styled(View);
    const StyledText = styled(Text);
    const StyledPressable = styled(Pressable);

    const [passwordVisible, setPasswordVisible] = useState(true);

    function changePassword(){

        if(passwordVisible) {
            return <StyledText className='text-white font-bold'>{data}</StyledText>
        }

        return <StyledText className='text-white font-bold'>*****************</StyledText>
    }

    function changeEye(){
        if(passwordVisible) {
            return <Ionicons size={23} color="white" name="eye"/>
        }

        return <Ionicons size={23} color="white" name="eye-off"/>
    }

    function handlePasswordShow(){
        setPasswordVisible(!passwordVisible);
    }

    return(
        <StyledView className="flex flex-row justify-between bg-slate-800 rounded-md p-3 mb-2 ">

            <StyledPressable onLongPress={removePassword} >
                {changePassword}
            </StyledPressable>

            <StyledPressable onPress={handlePasswordShow}>
                {changeEye}
            </StyledPressable>
            
        </StyledView>
        
        

    )
}